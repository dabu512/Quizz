document.addEventListener('DOMContentLoaded', () => {
  // 1. Supabase Connection & Credentials
  let supabaseClient = null;
  let isDbOnline = false;

  const supabaseUrlEl = document.getElementById('supabase-url');
  const supabaseKeyEl = document.getElementById('supabase-key');
  const dbStatusBadge = document.getElementById('db-status-badge');
  const configErrorEl = document.getElementById('config-error');

  async function fetchEnv() {
    try {
      const response = await fetch('.env');
      if (!response.ok) return null;
      const text = await response.text();
      const env = {};
      text.split('\n').forEach(line => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
          const parts = trimmed.split('=');
          if (parts.length >= 2) {
            const key = parts[0].trim();
            const value = parts.slice(1).join('=').trim().replace(/^["']|["']$/g, '');
            env[key] = value;
          }
        }
      });
      return env;
    } catch (e) {
      console.warn("Could not fetch .env file:", e);
      return null;
    }
  }

  async function initSupabase() {
    const env = await fetchEnv();
    const envUrl = env ? env.SUPABASE_URL : null;
    const envKey = env ? env.SUPABASE_KEY : null;

    const defaultUrl = envUrl || 'https://isehmewfvadfnpmusuih.supabase.co';
    const defaultKey = envKey || 'sb_publishable_Ejw82iBVAe2GiWBYla4SGg_umxqeK8a';

    const savedUrl = localStorage.getItem('supabase_url') || defaultUrl;
    const savedKey = localStorage.getItem('supabase_key') || defaultKey;

    // Normalize URL to remove trailing /rest/v1 or /rest/v1/
    let normalizedUrl = savedUrl ? savedUrl.trim() : '';
    if (normalizedUrl) {
      normalizedUrl = normalizedUrl.replace(/\/rest\/v1\/?$/, '');
    }

    if (normalizedUrl && savedKey) {
      try {
        if (typeof supabase !== 'undefined') {
          supabaseClient = supabase.createClient(normalizedUrl, savedKey);
          
          // Quick test connection
          const { data, error } = await supabaseClient.from('jlpt_exams').select('id').limit(1);
          if (error) throw error;

          isDbOnline = true;
          dbStatusBadge.textContent = '🔌 Supabase Online';
          dbStatusBadge.className = 'status-badge online';
        } else {
          throw new Error("Supabase SDK is not loaded.");
        }
      } catch (e) {
        console.error("Failed to connect to Supabase:", e);
        isDbOnline = false;
        dbStatusBadge.textContent = 'Kết nối thất bại';
        dbStatusBadge.className = 'status-badge offline';
      }
    } else {
      isDbOnline = false;
      dbStatusBadge.textContent = 'Chưa cấu hình Supabase';
      dbStatusBadge.className = 'status-badge offline';
    }

    if (supabaseUrlEl) supabaseUrlEl.value = savedUrl || '';
    if (supabaseKeyEl) supabaseKeyEl.value = savedKey || '';
  }

  // Settings Modal Controls
  const openConfigBtn = document.getElementById('open-config-btn');
  const closeConfigBtn = document.getElementById('close-config-btn');
  const supabaseConfigModal = document.getElementById('supabase-config-modal');
  const saveConfigBtn = document.getElementById('save-config-btn');
  const clearConfigBtn = document.getElementById('clear-config-btn');

  if (openConfigBtn) {
    openConfigBtn.addEventListener('click', () => {
      supabaseConfigModal.classList.remove('hidden');
      configErrorEl.classList.add('hidden');
    });
  }

  if (closeConfigBtn) {
    closeConfigBtn.addEventListener('click', () => {
      supabaseConfigModal.classList.add('hidden');
    });
  }

  if (saveConfigBtn) {
    saveConfigBtn.addEventListener('click', () => {
      const url = supabaseUrlEl.value.trim();
      const key = supabaseKeyEl.value.trim();

      if (!url || !key) {
        configErrorEl.textContent = 'Vui lòng điền đầy đủ Supabase URL và Anon Key!';
        configErrorEl.classList.remove('hidden');
        return;
      }

      localStorage.setItem('supabase_url', url);
      localStorage.setItem('supabase_key', key);
      supabaseConfigModal.classList.add('hidden');
      alert('Đã lưu cấu hình! Ứng dụng sẽ tải lại để áp dụng kết nối mới.');
      window.location.reload();
    });
  }

  if (clearConfigBtn) {
    clearConfigBtn.addEventListener('click', () => {
      localStorage.removeItem('supabase_url');
      localStorage.removeItem('supabase_key');
      supabaseConfigModal.classList.add('hidden');
      alert('Đã ngắt kết nối! Ứng dụng yêu cầu thông tin cấu hình hợp lệ để sử dụng.');
      window.location.reload();
    });
  }

  // 2. Menu Navigation and Tabs Toggling
  const tabExamsBtn = document.getElementById('tab-exams-btn');
  const tabQuizzBtn = document.getElementById('tab-quizz-btn');
  const examsTabContent = document.getElementById('exams-tab-content');
  const quizzTabContent = document.getElementById('quizz-tab-content');

  function switchTab(activeTab) {
    if (activeTab === 'exams') {
      tabExamsBtn.classList.add('active');
      tabQuizzBtn.classList.remove('active');
      examsTabContent.classList.remove('hidden');
      quizzTabContent.classList.add('hidden');
    } else {
      tabExamsBtn.classList.remove('active');
      tabQuizzBtn.classList.add('active');
      examsTabContent.classList.add('hidden');
      quizzTabContent.classList.remove('hidden');
    }
  }

  if (tabExamsBtn) tabExamsBtn.addEventListener('click', () => switchTab('exams'));
  if (tabQuizzBtn) tabQuizzBtn.addEventListener('click', () => switchTab('quizz'));

  // 3. Database loaders and fetchers
  async function loadExams() {
    if (isDbOnline && supabaseClient) {
      try {
        const { data: exams, error } = await supabaseClient
          .from('jlpt_exams')
          .select('*')
          .order('year', { ascending: false })
          .order('month', { ascending: false });
        if (error) throw error;
        return exams || [];
      } catch (e) {
        console.error("Supabase query error:", e);
        return [];
      }
    } else {
      return [];
    }
  }

  async function fetchExamData(examId, partCode) {
    if (isDbOnline && supabaseClient) {
      try {
        let qQuery = supabaseClient.from('jlpt_questions').select('*').eq('exam_id', examId);
        if (partCode !== 'all') {
          qQuery = qQuery.eq('part', partCode);
        }
        const { data: questions, error } = await qQuery;
        if (error) throw error;

        const { data: passages, errorP } = await supabaseClient.from('jlpt_passages').select('*').eq('exam_id', examId);
        if (errorP) throw errorP;

        return { questions: questions || [], passages: passages || [] };
      } catch (e) {
        console.error("Supabase fetch data error:", e);
        alert("Lỗi khi tải dữ liệu từ Supabase: " + e.message);
        return { questions: [], passages: [] };
      }
    } else {
      alert("Chưa kết nối cơ sở dữ liệu Supabase!");
      return { questions: [], passages: [] };
    }
  }

  // 4. Render Main Menu
  const examsGrid = document.getElementById('exams-grid');
  const examsCountBadge = document.getElementById('exams-count-badge');

  async function renderMainMenu() {
    const exams = await loadExams();
    if (examsCountBadge) examsCountBadge.textContent = `${exams ? exams.length : 0} Đề thi`;
    if (!examsGrid) return;
    
    examsGrid.innerHTML = '';

    if (!exams || exams.length === 0) {
      examsGrid.innerHTML = `
        <div class="connection-error-card" style="grid-column: 1 / -1; padding: 40px; text-align: center; background: rgba(255,255,255,0.05); border: 1px dashed rgba(255,255,255,0.15); border-radius: 12px; margin: 20px 0;">
          <div class="error-icon" style="font-size: 48px; margin-bottom: 16px;">⚠️</div>
          <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px; color: var(--text-heading);">Không thể kết nối Cơ sở dữ liệu Supabase</h3>
          <p style="color: var(--text-muted); max-width: 500px; margin: 0 auto 20px auto; font-size: 14px; line-height: 1.6;">Ứng dụng không thể kết nối hoặc tải danh sách đề thi từ Supabase. Vui lòng kiểm tra lại cấu hình file .env hoặc sử dụng bảng điều khiển kết nối bên góc trên bên phải để thay đổi thông tin.</p>
          <div style="display: flex; gap: 12px; justify-content: center;">
            <button id="retry-db-btn" class="btn btn-primary" style="padding: 10px 20px; font-size: 14px;">Thử lại kết nối 🔁</button>
            <button id="open-config-from-error-btn" class="btn btn-outline" style="padding: 10px 20px; font-size: 14px;">Cấu hình Supabase 🔌</button>
          </div>
        </div>
      `;
      const retryBtn = document.getElementById('retry-db-btn');
      if (retryBtn) {
        retryBtn.addEventListener('click', () => window.location.reload());
      }
      const openConfigFromErrorBtn = document.getElementById('open-config-from-error-btn');
      if (openConfigFromErrorBtn) {
        openConfigFromErrorBtn.addEventListener('click', () => {
          const supabaseConfigModal = document.getElementById('supabase-config-modal');
          const configErrorEl = document.getElementById('config-error');
          if (supabaseConfigModal) supabaseConfigModal.classList.remove('hidden');
          if (configErrorEl) configErrorEl.classList.add('hidden');
        });
      }
      return;
    }

    for (let exam of exams) {
      let vocabCount = 35;
      let grammarCount = 22;
      let readingCount = 16;

      if (isDbOnline && supabaseClient) {
        try {
          const { data: qCounts, error } = await supabaseClient
            .from('jlpt_questions')
            .select('part')
            .eq('exam_id', exam.id);
          
          if (!error && qCounts) {
            vocabCount = qCounts.filter(q => q.part === 'vocabulary').length;
            grammarCount = qCounts.filter(q => q.part === 'grammar').length;
            readingCount = qCounts.filter(q => q.part === 'reading').length;
          }
        } catch (e) {
          console.warn("Error counting exam parts on database, using defaults:", e);
        }
      }

      const card = document.createElement('div');
      card.className = 'quiz-select-card';
      card.innerHTML = `
        <div class="card-top-info">
          <span class="quiz-file-badge">📄 Đề chuẩn JLPT ${exam.level}</span>
          <h3 class="quiz-card-title">${exam.name}</h3>
          <p class="quiz-card-desc">Đề thi năng lực tiếng Nhật cấp độ ${exam.level} kỳ tháng ${exam.month}/${exam.year}. Chọn một trong các phần thi chuẩn bên dưới để làm bài luyện tập:</p>
        </div>
        <div class="exam-part-card-row">
          <button class="exam-part-btn" data-part="vocabulary">
            <span class="exam-part-name">Từ vựng - Chữ hán</span>
            <span class="exam-part-qty">📝 ${vocabCount} câu</span>
          </button>
          <button class="exam-part-btn" data-part="grammar">
            <span class="exam-part-name">Ngữ pháp</span>
            <span class="exam-part-qty">📝 ${grammarCount} câu</span>
          </button>
          <button class="exam-part-btn" data-part="reading">
            <span class="exam-part-name">Đọc hiểu</span>
            <span class="exam-part-qty">📝 ${readingCount} câu</span>
          </button>
        </div>
      `;

      card.querySelectorAll('.exam-part-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
          const partCode = btn.dataset.part;
          const partNames = { vocabulary: 'Từ vựng - Chữ hán', grammar: 'Ngữ pháp', reading: 'Đọc hiểu' };
          const data = await fetchExamData(exam.id, partCode);
          
          const quizObject = {
            id: `${exam.id}_${partCode}`,
            title: `${exam.name} - Phần ${partNames[partCode]}`,
            description: `Luyện tập phần thi ${partNames[partCode]} theo form thi chuẩn JLPT.`,
            questions: data.questions,
            passages: data.passages
          };
          startQuiz(quizObject);
        });
      });

      examsGrid.appendChild(card);
    }
  }

  // Custom Quizz config handler
  const quizzConfigForm = document.getElementById('quizz-config-form');
  if (quizzConfigForm) {
    quizzConfigForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const selectedPartsCheckboxes = document.querySelectorAll('input[name="quiz-parts"]:checked');
      if (selectedPartsCheckboxes.length === 0) {
        alert('Vui lòng chọn ít nhất một phần thi để luyện tập!');
        return;
      }
      
      const selectedParts = Array.from(selectedPartsCheckboxes).map(cb => cb.value);
      const limitVal = document.getElementById('quiz-question-limit').value;
      const shuffleQuestions = document.getElementById('menu-shuffle-questions').checked;
      const shuffleOptions = document.getElementById('menu-shuffle-options').checked;
      
      const data = await fetchExamData(1, 'all');
      
      let filteredQuestions = data.questions.filter(q => selectedParts.includes(q.part));
      
      if (filteredQuestions.length === 0) {
        alert('Không tìm thấy câu hỏi tương ứng trong cơ sở dữ liệu!');
        return;
      }

      if (shuffleQuestions) {
        filteredQuestions = shuffleArray(filteredQuestions);
      }

      if (limitVal !== 'all') {
        const limit = parseInt(limitVal, 10);
        filteredQuestions = filteredQuestions.slice(0, limit);
      }

      settings.shuffleQuestions = shuffleQuestions;
      settings.shuffleOptions = shuffleOptions;
      saveSettings();

      const partNamesMapping = { vocabulary: 'Từ vựng', grammar: 'Ngữ pháp', reading: 'Đọc hiểu' };
      const selectedPartNames = selectedParts.map(p => partNamesMapping[p]).join(', ');

      const quizObject = {
        id: `custom_quiz_${Date.now()}`,
        title: `Quizz Luyện Tập Tổng Hợp`,
        description: `Các phần ôn tập: ${selectedPartNames}. Quy mô: ${filteredQuestions.length} câu hỏi.`,
        questions: filteredQuestions,
        passages: data.passages
      };

      startQuiz(quizObject);
    });
  }

  // 5. Application Quiz State & Settings
  let currentQuiz = null;
  let userAnswers = [];
  let currentPassageIdInPanel = null; // tracks which passage content is loaded currently

  let settings = {
    shuffleQuestions: false,
    shuffleOptions: false
  };

  const quizShuffleQuestions = document.getElementById('quiz-shuffle-questions');
  const quizShuffleOptions = document.getElementById('quiz-shuffle-options');

  function loadSettings() {
    const saved = localStorage.getItem('quiz_settings');
    if (saved) {
      try {
        settings = JSON.parse(saved);
      } catch (e) {
        console.error("Error loading settings:", e);
      }
    }
    syncSettingsToDOM();
  }

  function saveSettings() {
    localStorage.setItem('quiz_settings', JSON.stringify(settings));
    syncSettingsToDOM();
  }

  function syncSettingsToDOM() {
    const menuShuffleQuestions = document.getElementById('menu-shuffle-questions');
    const menuShuffleOptions = document.getElementById('menu-shuffle-options');
    
    if (menuShuffleQuestions) menuShuffleQuestions.checked = settings.shuffleQuestions;
    if (menuShuffleOptions) menuShuffleOptions.checked = settings.shuffleOptions;
    if (quizShuffleQuestions) quizShuffleQuestions.checked = settings.shuffleQuestions;
    if (quizShuffleOptions) quizShuffleOptions.checked = settings.shuffleOptions;
  }

  function handleShuffleSettingChange(settingKey, isChecked) {
    settings[settingKey] = isChecked;
    saveSettings();

    if (currentQuiz) {
      const hasProgress = userAnswers.some(ans => ans.answered);
      if (hasProgress) {
        if (confirm('Thay đổi cài đặt xáo trộn sẽ khởi động lại bài trắc nghiệm này từ đầu. Bạn có đồng ý?')) {
          restartQuizWithCurrentSettings();
        } else {
          settings[settingKey] = !isChecked;
          saveSettings();
        }
      } else {
        restartQuizWithCurrentSettings();
      }
    }
  }

  function restartQuizWithCurrentSettings() {
    if (!currentQuiz) return;
    
    localStorage.removeItem('quiz_shuffledQuestionIds');
    localStorage.removeItem('quiz_shuffledOptionOrders');
    localStorage.removeItem('quiz_userAnswers');
    localStorage.removeItem('quiz_currentIndex');
    
    const cleanQuizObj = {
      id: currentQuiz.id,
      title: currentQuiz.title,
      description: currentQuiz.description,
      questions: currentQuiz.questions.map(q => ({
        ...q,
        options: q.originalOptions || q.options,
        correct_option: q.originalCorrectOption || q.correct_option
      })),
      passages: currentQuiz.passages
    };
    
    startQuiz(cleanQuizObj);
  }

  if (quizShuffleQuestions) quizShuffleQuestions.addEventListener('change', (e) => handleShuffleSettingChange('shuffleQuestions', e.target.checked));
  if (quizShuffleOptions) quizShuffleOptions.addEventListener('change', (e) => handleShuffleSettingChange('shuffleOptions', e.target.checked));

  loadSettings();

  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // DOM Screen Selectors
  const menuScreen = document.getElementById('menu-screen');
  const quizScreen = document.getElementById('quiz-screen');

  // Quiz DOM Elements
  const backToMenuBtn = document.getElementById('back-to-menu-btn');
  const activeQuizTitle = document.getElementById('active-quiz-title');
  const activeQuizDesc = document.getElementById('active-quiz-desc');
  const resetBtn = document.getElementById('reset-btn');
  const redoWrongBtn = document.getElementById('redo-wrong-btn');
  const toggleNavBtn = document.getElementById('toggle-nav-btn');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const navBackdrop = document.getElementById('nav-backdrop');
  const navigatorDrawer = document.getElementById('navigator-drawer');

  const navGridEl = document.getElementById('navigator-grid');
  const navTotalCount = document.getElementById('nav-total-count');
  const questionsListContainer = document.getElementById('questions-list-container');
  const singlePageScrollContainer = document.querySelector('.single-page-scroll');

  // Stats DOM Elements
  const statCompletedEl = document.getElementById('stat-completed');
  const statCorrectEl = document.getElementById('stat-correct');
  const statWrongEl = document.getElementById('stat-wrong');
  const statAccuracyEl = document.getElementById('stat-accuracy');

  // Drawer open/close functions
  function openDrawer() {
    if (navigatorDrawer) {
      navigatorDrawer.classList.remove('drawer-collapsed');
      navigatorDrawer.classList.add('open');
    }
    if (navBackdrop) {
      navBackdrop.classList.remove('hidden');
    }
  }

  function closeDrawer() {
    if (navigatorDrawer) {
      navigatorDrawer.classList.remove('open');
      navigatorDrawer.classList.add('drawer-collapsed');
    }
    if (navBackdrop) {
      navBackdrop.classList.add('hidden');
    }
  }

  if (toggleNavBtn) toggleNavBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (navBackdrop) navBackdrop.addEventListener('click', closeDrawer);

  // 6. Start Quiz Controller
  function startQuiz(quiz, loadedAnswers = null, loadedIndex = 0) {
    let preparedQuestions = quiz.questions.map(q => {
      const correctIdx = q.correct_option - 1;
      return {
        ...q,
        options: [...q.options],
        correct: [correctIdx],
        originalOptions: [...q.options],
        originalCorrectOption: q.correct_option,
        originalCorrect: [correctIdx]
      };
    });

    let finalQuestions = [];
    let savedShuffledQuestionIds = null;
    let savedShuffledOptionOrders = null;

    if (loadedAnswers) {
      try {
        const qIdsStr = localStorage.getItem('quiz_shuffledQuestionIds');
        if (qIdsStr) savedShuffledQuestionIds = JSON.parse(qIdsStr);
        const optOrdersStr = localStorage.getItem('quiz_shuffledOptionOrders');
        if (optOrdersStr) savedShuffledOptionOrders = JSON.parse(optOrdersStr);
      } catch (e) {
        console.error("Error reading saved shuffle structure:", e);
      }
    }

    if (savedShuffledQuestionIds) {
      savedShuffledQuestionIds.forEach(id => {
        const found = preparedQuestions.find(q => q.id === id);
        if (found) finalQuestions.push(found);
      });
      if (finalQuestions.length !== preparedQuestions.length) {
        finalQuestions = preparedQuestions;
      }
    } else {
      if (settings.shuffleQuestions) {
        finalQuestions = shuffleArray(preparedQuestions);
      } else {
        finalQuestions = preparedQuestions;
      }
    }

    finalQuestions = finalQuestions.map(q => {
      let finalOptions = [];
      let finalCorrect = [];
      let savedOptOrder = null;

      if (savedShuffledOptionOrders && savedShuffledOptionOrders[q.id]) {
        savedOptOrder = savedShuffledOptionOrders[q.id];
      }

      if (savedOptOrder) {
        finalOptions = savedOptOrder.map(origIdx => q.options[origIdx]);
        q.shuffledOptionOrder = savedOptOrder;
        q.originalCorrect.forEach(origIdx => {
          const newIdx = savedOptOrder.indexOf(origIdx);
          if (newIdx !== -1) finalCorrect.push(newIdx);
        });
      } else {
        if (settings.shuffleOptions) {
          const mapped = q.options.map((optText, idx) => ({ text: optText, origIdx: idx }));
          const shuffledMapped = shuffleArray(mapped);
          
          finalOptions = shuffledMapped.map(item => item.text);
          q.shuffledOptionOrder = shuffledMapped.map(item => item.origIdx);
          q.originalCorrect.forEach(origIdx => {
            const newIdx = shuffledMapped.findIndex(item => item.origIdx === origIdx);
            if (newIdx !== -1) finalCorrect.push(newIdx);
          });
        } else {
          finalOptions = [...q.options];
          finalCorrect = [...q.originalCorrect];
          q.shuffledOptionOrder = q.options.map((_, idx) => idx);
        }
      }

      return {
        ...q,
        options: finalOptions,
        correct: finalCorrect
      };
    });

    const passagesMap = {};
    if (quiz.passages) {
      quiz.passages.forEach(p => {
        passagesMap[p.id] = p;
      });
    }

    currentQuiz = {
      ...quiz,
      questions: finalQuestions,
      passagesMap: passagesMap
    };

    // Reset or load user answers state
    if (loadedAnswers) {
      userAnswers = loadedAnswers;
    } else {
      userAnswers = Array.from({ length: currentQuiz.questions.length }, () => ({
        answered: false,
        selected: [],
        isCorrect: false
      }));
    }

    activeQuizTitle.textContent = currentQuiz.title;
    activeQuizDesc.textContent = currentQuiz.description;
    navTotalCount.textContent = `${currentQuiz.questions.length} câu`;

    // Reset Sidebar Drawer closed
    closeDrawer();

    // Switch Screens
    menuScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    initNavigatorGrid();
    renderAllQuestions();
    
    // Reset scroll of the questions container to the top
    if (singlePageScrollContainer) {
      singlePageScrollContainer.scrollTop = 0;
    }

    // Load initial passage if first question has one
    currentPassageIdInPanel = null;
    updatePassageViewForVisibleQuestion(0);

    updateStats();
    saveStateToLocalStorage();

    // Scroll to specific index if restoring session
    if (loadedIndex > 0) {
      setTimeout(() => {
        scrollToQuestion(loadedIndex);
      }, 300);
    }
  }

  // 7. Back to Menu Handler
  if (backToMenuBtn) {
    backToMenuBtn.addEventListener('click', () => {
      if (userAnswers.some(ans => ans.answered)) {
        if (!confirm('Bạn có chắc muốn quay về danh sách bài thi? Kết quả bài đang làm sẽ bị xoá.')) {
          return;
        }
      }
      clearLocalStorageState();
      quizScreen.classList.add('hidden');
      menuScreen.classList.remove('hidden');
    });
  }

  // 8. Navigator Grid Init
  function initNavigatorGrid() {
    navGridEl.innerHTML = '';
    const total = currentQuiz.questions.length;

    for (let i = 0; i < total; i++) {
      const btn = document.createElement('button');
      btn.className = 'nav-btn';
      btn.textContent = i + 1;
      btn.dataset.index = i;
      btn.addEventListener('click', () => {
        scrollToQuestion(i);
      });
      navGridEl.appendChild(btn);
    }
  }

  function scrollToQuestion(idx) {
    const card = document.getElementById(`q-card-${idx}`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update local storage index tracking
      localStorage.setItem('quiz_currentIndex', idx);
    }
    closeDrawer();
  }

  function updateNavigatorState() {
    const buttons = navGridEl.querySelectorAll('.nav-btn');
    buttons.forEach((btn, idx) => {
      btn.classList.remove('correct', 'wrong');

      const state = userAnswers[idx];
      if (state && state.answered) {
        if (state.isCorrect) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('wrong');
        }
      }
    });
  }

  // 9. Single-Page Render All Questions
  function renderAllQuestions() {
    if (!questionsListContainer) return;
    questionsListContainer.innerHTML = '';

    let lastSectionTitle = "";

    currentQuiz.questions.forEach((q, idx) => {
      const state = userAnswers[idx];

      const qCard = document.createElement('div');
      qCard.className = 'card question-card';
      qCard.id = `q-card-${idx}`;

      // Header row
      const qCardHeader = document.createElement('div');
      qCardHeader.className = 'q-card-header';
      
      const qNumBadge = document.createElement('span');
      qNumBadge.className = 'q-badge';
      qNumBadge.textContent = `Câu ${idx + 1}`;
      
      const qTypeBadge = document.createElement('span');
      qTypeBadge.className = 'type-badge';
      const partLabels = { vocabulary: 'Từ vựng - Chữ hán', grammar: 'Ngữ pháp', reading: 'Đọc hiểu' };
      qTypeBadge.textContent = partLabels[q.part] || 'Ôn tập';

      qCardHeader.appendChild(qNumBadge);
      qCardHeader.appendChild(qTypeBadge);
      qCard.appendChild(qCardHeader);

      // Title/Instruction Block
      const qTitleContainer = document.createElement('div');
      qTitleContainer.className = 'q-title-container';

      if (q.section_title && q.section_title !== lastSectionTitle) {
        const qSecTitle = document.createElement('div');
        qSecTitle.className = 'q-section-title';
        qSecTitle.textContent = q.section_title;
        qTitleContainer.appendChild(qSecTitle);
        
        lastSectionTitle = q.section_title;
      }

      const qTitleText = document.createElement('h2');
      qTitleText.className = 'q-title-text japanese-text';
      qTitleText.textContent = q.question_text;
      qTitleContainer.appendChild(qTitleText);
      
      qCard.appendChild(qTitleContainer);

      // Options List
      const qOptionsList = document.createElement('div');
      qOptionsList.className = 'options-list japanese-text';

      // Check if short options to display in 2 columns (like Riki app style)
      const isShort = q.options.every(opt => opt.length < 15);
      if (isShort) {
        qOptionsList.classList.add('grid-2-cols');
      }

      q.options.forEach((optText, optIdx) => {
        const optionItem = document.createElement('div');
        optionItem.className = 'option-item';

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `question_${q.id}`;
        input.value = optIdx;
        input.id = `opt_${q.id}_${optIdx}`;

        if (state.selected.includes(optIdx)) {
          input.checked = true;
          optionItem.classList.add('selected');
        }

        if (state.answered) {
          optionItem.classList.add('disabled');
          input.disabled = true;

          const isTargetCorrect = q.correct.includes(optIdx);
          const isUserSelected = state.selected.includes(optIdx);

          if (isTargetCorrect) {
            optionItem.classList.add('correct-answer');
          } else if (isUserSelected && !isTargetCorrect) {
            optionItem.classList.add('wrong-answer');
          }

          const statusIcon = document.createElement('span');
          statusIcon.className = 'option-status-icon';
          if (isTargetCorrect) {
            statusIcon.textContent = '✅';
          } else if (isUserSelected && !isTargetCorrect) {
            statusIcon.textContent = '❌';
          }
          optionItem.appendChild(statusIcon);
        } else {
          optionItem.addEventListener('click', (e) => {
            if (e.target !== input) {
              input.checked = true;
            }
            handleOptionSelection(idx, optIdx);
          });
        }

        const label = document.createElement('label');
        label.className = 'option-text';
        const prefix = String.fromCharCode(65 + optIdx) + '. ';
        label.textContent = prefix + optText;

        optionItem.prepend(input);
        optionItem.insertBefore(label, optionItem.querySelector('.option-status-icon') || null);
        qOptionsList.appendChild(optionItem);
      });

      qCard.appendChild(qOptionsList);

      // Explanation Block
      const explanationBox = document.createElement('div');
      explanationBox.className = 'explanation-box hidden';
      explanationBox.id = `explanation-${idx}`;

      const expHeader = document.createElement('div');
      expHeader.className = 'explanation-header';
      expHeader.innerHTML = '<span class="exp-icon">💡</span><h4>Giải Thích Đáp Án</h4>';
      explanationBox.appendChild(expHeader);

      const expContent = document.createElement('p');
      expContent.className = 'exp-content japanese-text';
      explanationBox.appendChild(expContent);
      qCard.appendChild(explanationBox);

      // Render answer if loaded from saved state
      if (state.answered) {
        const correctTexts = q.correct.map(cIdx => {
          const prefix = String.fromCharCode(65 + cIdx) + '. ';
          return prefix + q.options[cIdx];
        });

        expContent.innerHTML = `
          <div class="actual-correct-answer" style="color: var(--success); font-weight: 700; margin-bottom: 8px;">
            <span>🎯 Đáp án đúng thực tế: </span>${correctTexts.join(', ')}
          </div>
          <hr class="exp-divider" style="margin: 12px 0; border: 0; border-top: 1px solid var(--card-border);" />
          <div>${q.explanation}</div>
        `;
        explanationBox.classList.remove('hidden');
      }

      questionsListContainer.appendChild(qCard);
    });

    updateNavigatorState();
  }

  // 10. Handle Option Selection
  function handleOptionSelection(qIdx, optIdx) {
    const state = userAnswers[qIdx];
    if (state.answered) return;

    state.selected = [optIdx];
    state.answered = true;
    
    const q = currentQuiz.questions[qIdx];
    state.isCorrect = q.correct.includes(optIdx);

    // Update single card DOM without fully rebuilding list
    updateQuestionCardDOM(qIdx);
    updateStats();
    updateNavigatorState();
    saveStateToLocalStorage();
  }

  function updateQuestionCardDOM(qIdx) {
    const card = document.getElementById(`q-card-${qIdx}`);
    if (!card) return;

    const q = currentQuiz.questions[qIdx];
    const state = userAnswers[qIdx];

    const optionItems = card.querySelectorAll('.option-item');
    optionItems.forEach((optionItem, optIdx) => {
      optionItem.classList.add('disabled');
      const input = optionItem.querySelector('input');
      if (input) input.disabled = true;

      const oldIcon = optionItem.querySelector('.option-status-icon');
      if (oldIcon) oldIcon.remove();

      const isTargetCorrect = q.correct.includes(optIdx);
      const isUserSelected = state.selected.includes(optIdx);

      if (isTargetCorrect) {
        optionItem.classList.add('correct-answer');
      } else if (isUserSelected && !isTargetCorrect) {
        optionItem.classList.add('wrong-answer');
      }

      if (isTargetCorrect || (isUserSelected && !isTargetCorrect)) {
        const statusIcon = document.createElement('span');
        statusIcon.className = 'option-status-icon';
        statusIcon.textContent = isTargetCorrect ? '✅' : '❌';
        optionItem.appendChild(statusIcon);
      }
    });

    const expBox = document.getElementById(`explanation-${qIdx}`);
    if (expBox) {
      const expContent = expBox.querySelector('.exp-content');
      const correctTexts = q.correct.map(cIdx => {
        const prefix = String.fromCharCode(65 + cIdx) + '. ';
        return prefix + q.options[cIdx];
      });

      expContent.innerHTML = `
        <div class="actual-correct-answer" style="color: var(--success); font-weight: 700; margin-bottom: 8px;">
          <span>🎯 Đáp án đúng thực tế: </span>${correctTexts.join(', ')}
        </div>
        <hr class="exp-divider" style="margin: 12px 0; border: 0; border-top: 1px solid var(--card-border);" />
        <div>${q.explanation}</div>
      `;
      expBox.classList.remove('hidden');
    }
  }

  // 11. Scroll Event to Synchronize Passage Panel view
  let isScrollingRequestActive = false;
  if (singlePageScrollContainer) {
    singlePageScrollContainer.addEventListener('scroll', () => {
      if (!isScrollingRequestActive) {
        window.requestAnimationFrame(() => {
          handleScrollPassageSynchronizer();
          isScrollingRequestActive = false;
        });
        isScrollingRequestActive = true;
      }
    });
  }

  function handleScrollPassageSynchronizer() {
    if (!currentQuiz || !currentQuiz.questions) return;

    const cards = questionsListContainer.querySelectorAll('.question-card');
    let visibleCardIdx = 0;
    const containerRect = singlePageScrollContainer.getBoundingClientRect();

    for (let card of cards) {
      const rect = card.getBoundingClientRect();
      // Find the card currently closest to the top of the container scroll viewport
      if (rect.bottom > containerRect.top + 80) {
        visibleCardIdx = parseInt(card.id.replace('q-card-', ''), 10);
        break;
      }
    }

    updatePassageViewForVisibleQuestion(visibleCardIdx);
    
    // Save current active question index to local storage
    localStorage.setItem('quiz_currentIndex', visibleCardIdx);
  }

  function updatePassageViewForVisibleQuestion(qIdx) {
    if (!currentQuiz) return;
    const q = currentQuiz.questions[qIdx];
    if (!q) return;

    const passagePanel = document.getElementById('passage-panel');
    const quizBody = document.querySelector('.quiz-body');
    const passageTitleEl = document.getElementById('passage-title');
    const passageContentEl = document.getElementById('passage-content');

    if (q.passage_id && currentQuiz.passagesMap && currentQuiz.passagesMap[q.passage_id]) {
      const passageObj = currentQuiz.passagesMap[q.passage_id];
      
      // Update content only if changed to avoid unnecessary re-draw flashes
      if (currentPassageIdInPanel !== q.passage_id) {
        currentPassageIdInPanel = q.passage_id;
        if (passageTitleEl) passageTitleEl.textContent = passageObj.title || 'Đoạn văn đọc hiểu';
        if (passageContentEl) passageContentEl.innerHTML = passageObj.content.replace(/\n/g, '<br>');
      }

      if (passagePanel) passagePanel.classList.remove('hidden');
      if (quizBody) quizBody.classList.add('has-passage');
    } else {
      currentPassageIdInPanel = null;
      if (passagePanel) passagePanel.classList.add('hidden');
      if (quizBody) quizBody.classList.remove('has-passage');
    }
  }

  // 12. Update Stats Panel
  function updateStats() {
    if (!currentQuiz) return;
    const total = currentQuiz.questions.length;

    let completed = 0;
    let correct = 0;
    let wrong = 0;

    userAnswers.forEach(ans => {
      if (ans.answered) {
        completed++;
        if (ans.isCorrect) correct++;
        else wrong++;
      }
    });

    statCompletedEl.textContent = `${completed} / ${total}`;
    statCorrectEl.textContent = correct;
    statWrongEl.textContent = wrong;

    const accuracy = completed > 0 ? Math.round((correct / completed) * 100) : 0;
    statAccuracyEl.textContent = `${accuracy}%`;

    if (completed === total && wrong > 0) {
      redoWrongBtn.classList.remove('hidden');
    } else {
      redoWrongBtn.classList.add('hidden');
    }
  }

  // 13. Reset Quiz Event
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Bạn có chắc chắn muốn làm lại tất cả các câu hỏi của phần thi này từ đầu?')) {
        localStorage.removeItem('quiz_shuffledQuestionIds');
        localStorage.removeItem('quiz_shuffledOptionOrders');
        localStorage.removeItem('quiz_userAnswers');
        localStorage.removeItem('quiz_currentIndex');
        restartQuizWithCurrentSettings();
      }
    });
  }

  // 14. Redo Wrong Questions Event
  if (redoWrongBtn) {
    redoWrongBtn.addEventListener('click', () => {
      const wrongIndices = [];
      userAnswers.forEach((ans, idx) => {
        if (ans.answered && !ans.isCorrect) {
          wrongIndices.push(idx);
        }
      });

      if (wrongIndices.length === 0) return;

      if (confirm(`Bạn có muốn làm lại ${wrongIndices.length} câu hỏi đã trả lời sai?`)) {
        wrongIndices.forEach(idx => {
          userAnswers[idx] = {
            answered: false,
            selected: [],
            isCorrect: false
          };
        });

        // Re-render list
        renderAllQuestions();
        updateStats();
        saveStateToLocalStorage();

        // Scroll to the first wrong question
        setTimeout(() => {
          scrollToQuestion(wrongIndices[0]);
        }, 100);
      }
    });
  }

  // 15. Local Storage helper state savers
  function saveStateToLocalStorage() {
    if (currentQuiz) {
      localStorage.setItem('quiz_currentQuizId', currentQuiz.id);
      
      const activeIdxStr = localStorage.getItem('quiz_currentIndex') || '0';
      localStorage.setItem('quiz_currentIndex', activeIdxStr);
      localStorage.setItem('quiz_userAnswers', JSON.stringify(userAnswers));
      localStorage.setItem('quiz_shuffledQuestionIds', JSON.stringify(currentQuiz.questions.map(q => q.id)));
      
      const optionOrders = {};
      currentQuiz.questions.forEach(q => {
        optionOrders[q.id] = q.shuffledOptionOrder;
      });
      localStorage.setItem('quiz_shuffledOptionOrders', JSON.stringify(optionOrders));
      
      if (currentQuiz.id.startsWith('custom_quiz_')) {
        localStorage.setItem('quiz_customQuizData', JSON.stringify({
          id: currentQuiz.id,
          title: currentQuiz.title,
          description: currentQuiz.description,
          questions: currentQuiz.questions.map(q => ({
            ...q,
            options: q.originalOptions,
            correct_option: q.originalCorrectOption
          })),
          passages: Object.values(currentQuiz.passagesMap)
        }));
      } else {
        localStorage.removeItem('quiz_customQuizData');
      }
    }
  }

  function clearLocalStorageState() {
    localStorage.removeItem('quiz_currentQuizId');
    localStorage.removeItem('quiz_currentIndex');
    localStorage.removeItem('quiz_userAnswers');
    localStorage.removeItem('quiz_shuffledQuestionIds');
    localStorage.removeItem('quiz_shuffledOptionOrders');
    localStorage.removeItem('quiz_customQuizData');
  }

  // 16. Session restoration on startup
  async function restoreSession() {
    const savedQuizId = localStorage.getItem('quiz_currentQuizId');
    if (!savedQuizId) return;

    let quizObject = null;

    if (savedQuizId.startsWith('custom_quiz_')) {
      const customQuizStr = localStorage.getItem('quiz_customQuizData');
      if (customQuizStr) {
        try {
          quizObject = JSON.parse(customQuizStr);
        } catch (e) {
          console.error("Error parsing custom quiz data:", e);
        }
      }
    } else {
      const parts = savedQuizId.split('_');
      if (parts.length === 2) {
        const examId = parseInt(parts[0], 10);
        const partCode = parts[1];
        const partNames = { vocabulary: 'Từ vựng - Chữ hán', grammar: 'Ngữ pháp', reading: 'Đọc hiểu' };
        
        const data = await fetchExamData(examId, partCode);
        const exams = await loadExams();
        const examObj = exams.find(e => e.id === examId) || { name: 'JLPT N3 - 12/2024' };

        quizObject = {
          id: savedQuizId,
          title: `${examObj.name} - Phần ${partNames[partCode]}`,
          description: `Luyện tập phần thi ${partNames[partCode]} theo form thi chuẩn JLPT.`,
          questions: data.questions,
          passages: data.passages
        };
      }
    }

    if (quizObject) {
      const savedIndexStr = localStorage.getItem('quiz_currentIndex');
      const savedIndex = savedIndexStr ? parseInt(savedIndexStr, 10) : 0;
      
      let savedAnswers = null;
      try {
        const savedAnswersStr = localStorage.getItem('quiz_userAnswers');
        if (savedAnswersStr) {
          savedAnswers = JSON.parse(savedAnswersStr);
          if (!Array.isArray(savedAnswers) || savedAnswers.length !== quizObject.questions.length) {
            savedAnswers = null;
          }
        }
      } catch (e) {
        console.error("Error parsing saved answers:", e);
      }
      
      startQuiz(quizObject, savedAnswers, savedIndex);
    } else {
      clearLocalStorageState();
    }
  }

  async function startApp() {
    await initSupabase();
    loadSettings();
    await renderMainMenu();
    await restoreSession();
  }

  startApp();
});
