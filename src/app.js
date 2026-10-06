document.addEventListener('DOMContentLoaded', () => {
  // 1. Supabase Connection & Credentials
  let supabaseClient = null;
  let adminSupabaseClient = null;
  let isDbOnline = false;

  const supabaseUrlEl = document.getElementById('supabase-url');
  const supabaseKeyEl = document.getElementById('supabase-key');
  const supabaseServiceKeyEl = document.getElementById('supabase-service-key');
  const dbStatusBadge = document.getElementById('db-status-badge');
  const configErrorEl = document.getElementById('config-error');

  function getWriteClient() {
    return adminSupabaseClient || supabaseClient;
  }

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
    const envServiceKey = env ? (env.SUPABASE_SERVICE_KEY || env.SERVICE_ROLE_KEY) : null;

    const defaultUrl = envUrl || 'https://isehmewfvadfnpmusuih.supabase.co';
    const defaultKey = envKey || 'sb_publishable_Ejw82iBVAe2GiWBYla4SGg_umxqeK8a';

    const savedUrl = localStorage.getItem('supabase_url') || defaultUrl;
    const savedKey = localStorage.getItem('supabase_key') || defaultKey;
    const savedServiceKey = localStorage.getItem('supabase_service_key') || envServiceKey || '';

    // Normalize URL to remove trailing /rest/v1 or /rest/v1/
    let normalizedUrl = savedUrl ? savedUrl.trim() : '';
    if (normalizedUrl) {
      normalizedUrl = normalizedUrl.replace(/\/rest\/v1\/?$/, '');
    }

    if (normalizedUrl && savedKey) {
      try {
        if (typeof supabase !== 'undefined') {
          supabaseClient = supabase.createClient(normalizedUrl, savedKey);

          // If service key provided, also create admin client for writes
          if (savedServiceKey) {
            try {
              adminSupabaseClient = supabase.createClient(normalizedUrl, savedServiceKey);
            } catch(errAdmin) {
              console.warn("Failed to create admin client:", errAdmin);
            }
          }
          
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
    if (supabaseServiceKeyEl) supabaseServiceKeyEl.value = savedServiceKey || '';
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
      const serviceKey = supabaseServiceKeyEl ? supabaseServiceKeyEl.value.trim() : '';

      if (!url || !key) {
        configErrorEl.textContent = 'Vui lòng điền đầy đủ Supabase URL và Anon Key!';
        configErrorEl.classList.remove('hidden');
        return;
      }

      localStorage.setItem('supabase_url', url);
      localStorage.setItem('supabase_key', key);
      if (serviceKey) {
        localStorage.setItem('supabase_service_key', serviceKey);
      } else {
        localStorage.removeItem('supabase_service_key');
      }

      supabaseConfigModal.classList.add('hidden');
      alert('Đã lưu cấu hình! Ứng dụng sẽ tải lại để áp dụng kết nối mới.');
      window.location.reload();
    });
  }

  if (clearConfigBtn) {
    clearConfigBtn.addEventListener('click', () => {
      localStorage.removeItem('supabase_url');
      localStorage.removeItem('supabase_key');
      localStorage.removeItem('supabase_service_key');
      supabaseConfigModal.classList.add('hidden');
      alert('Đã ngắt kết nối! Ứng dụng yêu cầu thông tin cấu hình hợp lệ để sử dụng.');
      window.location.reload();
    });
  }

  // 2. Menu Navigation and Tabs Toggling
  const tabExamsBtn = document.getElementById('tab-exams-btn');
  const tabQuizzBtn = document.getElementById('tab-quizz-btn');
  const tabUploadBtn = document.getElementById('tab-upload-btn');
  const examsTabContent = document.getElementById('exams-tab-content');
  const quizzTabContent = document.getElementById('quizz-tab-content');
  const uploadTabContent = document.getElementById('upload-tab-content');

  function switchTab(activeTab) {
    if (tabExamsBtn) tabExamsBtn.classList.toggle('active', activeTab === 'exams');
    if (tabQuizzBtn) tabQuizzBtn.classList.toggle('active', activeTab === 'quizz');
    if (tabUploadBtn) tabUploadBtn.classList.toggle('active', activeTab === 'upload');

    if (examsTabContent) examsTabContent.classList.toggle('hidden', activeTab !== 'exams');
    if (quizzTabContent) quizzTabContent.classList.toggle('hidden', activeTab !== 'quizz');
    if (uploadTabContent) uploadTabContent.classList.toggle('hidden', activeTab !== 'upload');

    if (activeTab === 'upload') {
      populateUploadExamsList();
    }
  }

  if (tabExamsBtn) tabExamsBtn.addEventListener('click', () => switchTab('exams'));
  if (tabQuizzBtn) tabQuizzBtn.addEventListener('click', () => switchTab('quizz'));
  if (tabUploadBtn) tabUploadBtn.addEventListener('click', () => switchTab('upload'));

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

  // =========================================================================
  // 5. DIRECT DATABASE UPLOAD & PARSER MODULE
  // =========================================================================
  const uploadExamSelect = document.getElementById('upload-exam-select');
  const newExamFields = document.getElementById('new-exam-fields');
  const newExamNameInput = document.getElementById('new-exam-name');
  const newExamLevelSelect = document.getElementById('new-exam-level');
  const newExamYearInput = document.getElementById('new-exam-year');
  const newExamMonthInput = document.getElementById('new-exam-month');
  const uploadPartSelect = document.getElementById('upload-part-select');
  const uploadSectionTitleInput = document.getElementById('upload-section-title');
  const togglePassageInput = document.getElementById('toggle-passage-input');
  const passageFields = document.getElementById('passage-fields');
  const uploadPassageTitle = document.getElementById('upload-passage-title');
  const uploadPassageContent = document.getElementById('upload-passage-content');
  const uploadRawText = document.getElementById('upload-raw-text');
  const fillSampleVocabBtn = document.getElementById('fill-sample-vocab-btn');
  const fillSampleReadingBtn = document.getElementById('fill-sample-reading-btn');
  const parsePreviewBtn = document.getElementById('parse-preview-btn');
  const clearUploadTextBtn = document.getElementById('clear-upload-text-btn');
  const uploadPreviewSection = document.getElementById('upload-preview-section');
  const parsedCountEl = document.getElementById('parsed-count');
  const parsedBadgeEl = document.getElementById('parsed-badge');
  const parsedQuestionsPreviewList = document.getElementById('parsed-questions-preview-list');
  const executeUploadBtn = document.getElementById('execute-upload-btn');
  const uploadProgressStatus = document.getElementById('upload-progress-status');

  // RLS guidance modal controls
  const openRlsGuideBtn = document.getElementById('open-rls-guide-btn');
  const closeRlsModalBtn = document.getElementById('close-rls-modal-btn');
  const closeRlsConfirmBtn = document.getElementById('close-rls-confirm-btn');
  const supabaseRlsModal = document.getElementById('supabase-rls-modal');
  const copySqlBtn = document.getElementById('copy-sql-btn');
  const rlsSqlCode = document.getElementById('rls-sql-code');

  let parsedQuestionsList = [];

  async function populateUploadExamsList() {
    if (!uploadExamSelect) return;
    const exams = await loadExams();
    uploadExamSelect.innerHTML = '';

    if (exams && exams.length > 0) {
      exams.forEach(ex => {
        const opt = document.createElement('option');
        opt.value = ex.id;
        opt.textContent = `${ex.name} (${ex.level || 'JLPT'})`;
        uploadExamSelect.appendChild(opt);
      });
    }

    const newOpt = document.createElement('option');
    newOpt.value = 'new';
    newOpt.textContent = '➕ [Tạo Đề Thi Mới...]';
    uploadExamSelect.appendChild(newOpt);

    if (!exams || exams.length === 0) {
      uploadExamSelect.value = 'new';
      if (newExamFields) newExamFields.classList.remove('hidden');
    } else {
      if (newExamFields) newExamFields.classList.add('hidden');
    }
  }

  if (uploadExamSelect) {
    uploadExamSelect.addEventListener('change', () => {
      if (uploadExamSelect.value === 'new') {
        if (newExamFields) newExamFields.classList.remove('hidden');
      } else {
        if (newExamFields) newExamFields.classList.add('hidden');
      }
    });
  }

  if (uploadPartSelect) {
    uploadPartSelect.addEventListener('change', () => {
      const part = uploadPartSelect.value;
      if (part === 'vocabulary') {
        uploadSectionTitleInput.value = '問題 1: ＿＿＿のことばの読み方として最もよいものを、１・２・３・４から一つえらびなさい。';
        togglePassageInput.checked = false;
        passageFields.classList.add('hidden');
      } else if (part === 'grammar') {
        uploadSectionTitleInput.value = '問題 7: 次の文の（ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。';
      } else if (part === 'reading') {
        uploadSectionTitleInput.value = '問題 10: 次の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つえらびなさい。';
        togglePassageInput.checked = true;
        passageFields.classList.remove('hidden');
      }
    });
  }

  if (togglePassageInput) {
    togglePassageInput.addEventListener('change', () => {
      if (togglePassageInput.checked) {
        passageFields.classList.remove('hidden');
      } else {
        passageFields.classList.add('hidden');
      }
    });
  }

  // Sample data buttons
  if (fillSampleVocabBtn) {
    fillSampleVocabBtn.addEventListener('click', () => {
      uploadPartSelect.value = 'vocabulary';
      uploadSectionTitleInput.value = '問題 1: ＿＿＿のことばの読み方として最もよいものを、１・２・３・４から一つえらびなさい。';
      togglePassageInput.checked = false;
      passageFields.classList.add('hidden');
      uploadRawText.value = `Câu 1: ここから(じゅんばん)に見てください。
A. 順番
B. 項番
C. 順審
D. 項審
Đáp án: A
Giải thích: 順番 (じゅんばん) nghĩa là thứ tự, lần lượt.

Câu 2: 父は銀行に(つとめて)います。
1. 勧めて
2. 働めて
3. 仕めて
4. 勤めて
Đáp án: 4
Giải thích: 勤めて (つとめて) nghĩa là làm việc tại.

Câu 3: ポケットが(さゆう)にあるんですね。
A. 裏表
B. 右左
C. 表裏
D. 左右
Đáp án: D
Giải thích: 左右 (さゆう) nghĩa là trái phải.`;
      parseQuestions();
    });
  }

  if (fillSampleReadingBtn) {
    fillSampleReadingBtn.addEventListener('click', () => {
      uploadPartSelect.value = 'reading';
      uploadSectionTitleInput.value = '問題 10: 次の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つえらびなさい。';
      togglePassageInput.checked = true;
      passageFields.classList.remove('hidden');
      uploadPassageTitle.value = '(1) 古民家について';
      uploadPassageContent.value = `最近、日本では古民家、つまり昔から伝わる建築方法で作られた古い家を、直して住む人が増えている。ただ、少し前までは、古民家を直した家に住む人は少なかった。
しかし、その良さに30年も前に気づいていた外国人がいる。ドイツ人の建築家、Kさんだ。
冬にたくさんの雪が降るT村には、30年前、住む人のいない壊れた古民家がたくさんあった。あるとき、偶然T村を訪ねたKさんは、一軒の古民家をとても気に入ってすぐに買い、自分が住むために直し始めた。日本の古民家には、丈夫で立派な木の材料が使われている。それを利用して直せば、長く住めるいい家になると考えたのだ。`;
      uploadRawText.value = `Câu 1: この文章で、KさんがT村の古民家を買った理由として最も合っているものはどれか。
A. T村の雪景色がとても美しかったから。
B. 丈夫で立派な木の材料をそのまま利用して、長く住める家にできると考えたから。
C. 村の人々から古民家を直してほしいと頼まれたから。
D. 古民家を直して高く売るビジネスを計画していたから。
Đáp án: B
Giải thích: Theo đoạn văn: "日本の古民家には、丈夫で立派な木の材料が使われている。それを利用して直せば、長く住めるいい家になると考えたのだ。"`;
      parseQuestions();
    });
  }

  if (clearUploadTextBtn) {
    clearUploadTextBtn.addEventListener('click', () => {
      uploadRawText.value = '';
      parsedQuestionsList = [];
      uploadPreviewSection.classList.add('hidden');
      uploadProgressStatus.classList.add('hidden');
    });
  }

  // Smart Question Parser
  function parseQuestionsFromRawText(rawText) {
    if (!rawText || !rawText.trim()) return [];

    const text = rawText.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    const lines = text.split('\n');
    const questions = [];
    let currentQ = null;

    function finalize(q) {
      if (!q || !q.question_text) return;
      if (q.options.length < 2) return;
      if (!q.correct_option) {
        q.correct_option = 1;
        q.hasWarning = true;
      }
      questions.push(q);
    }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const qHeaderMatch = line.match(/^(?:Câu|Question|\#)\s*(\d+)[\.\:\)\/\-]*\s*(.*)$/i) || 
                           (!currentQ && line.match(/^(\d+)[\.\:\)\/\-]+\s*(.*)$/));

      const isNewQuestion = qHeaderMatch && (
        !currentQ || 
        currentQ.options.length >= 2 || 
        parseInt(qHeaderMatch[1], 10) > (currentQ ? currentQ.question_number : 0)
      );

      const optMatch = line.match(/^(\*)?\s*(?:\[?([A-Da-d1-4])\]?|([A-Da-d1-4]))[\.\)\:\/\-]\s*(.*)$/);
      const ansMatch = line.match(/^(?:Đáp\s*án|Đ\/A|ĐA|Key|Answer|Ans|Đúng)[\s\:\=\-]+([A-Da-d1-4])/i);
      const expMatch = line.match(/^(?:Giải\s*thích|Ghi\s*chú|Note|HD|Hướng\s*dẫn|Exp)[\s\:\-]+(.*)$/i);

      if (ansMatch && currentQ) {
        const letter = ansMatch[1].toUpperCase();
        let idx = 1;
        if (letter === 'A' || letter === '1') idx = 1;
        else if (letter === 'B' || letter === '2') idx = 2;
        else if (letter === 'C' || letter === '3') idx = 3;
        else if (letter === 'D' || letter === '4') idx = 4;
        currentQ.correct_option = idx;
      } else if (expMatch && currentQ) {
        currentQ.explanation = expMatch[1].trim();
      } else if (optMatch && currentQ && (!isNewQuestion || currentQ.options.length < 4)) {
        const isAsterisk = !!optMatch[1];
        const optLetter = (optMatch[2] || optMatch[3]).toUpperCase();
        const optText = optMatch[4].trim();

        currentQ.options.push(optText || optLetter);

        if (isAsterisk) {
          let idx = currentQ.options.length;
          if (optLetter === 'A' || optLetter === '1') idx = 1;
          else if (optLetter === 'B' || optLetter === '2') idx = 2;
          else if (optLetter === 'C' || optLetter === '3') idx = 3;
          else if (optLetter === 'D' || optLetter === '4') idx = 4;
          currentQ.correct_option = idx;
        }
      } else if (isNewQuestion) {
        if (currentQ) finalize(currentQ);
        currentQ = {
          question_number: parseInt(qHeaderMatch[1], 10) || (questions.length + 1),
          question_text: qHeaderMatch[2].trim(),
          options: [],
          correct_option: null,
          explanation: ''
        };
      } else if (currentQ) {
        if (currentQ.options.length === 0) {
          currentQ.question_text += ' ' + line;
        } else if (currentQ.explanation) {
          currentQ.explanation += ' ' + line;
        } else {
          currentQ.options[currentQ.options.length - 1] += ' ' + line;
        }
      }
    }

    if (currentQ) finalize(currentQ);
    return questions;
  }

  function renderPreviewQuestions() {
    if (!parsedQuestionsPreviewList) return;
    parsedQuestionsPreviewList.innerHTML = '';

    parsedQuestionsList.forEach((q, idx) => {
      const card = document.createElement('div');
      card.className = 'preview-q-card';

      const optLetters = ['A', 'B', 'C', 'D'];
      const optionsHtml = q.options.map((opt, oIdx) => {
        const isCorrect = (oIdx + 1) === q.correct_option;
        return `
          <div class="preview-opt-pill ${isCorrect ? 'is-correct' : ''}">
            <strong>${optLetters[oIdx] || (oIdx + 1)}.</strong>
            <span>${opt}</span>
          </div>
        `;
      }).join('');

      card.innerHTML = `
        <div class="preview-q-header">
          <span class="preview-q-num">Câu ${q.question_number || (idx + 1)}</span>
          <button type="button" class="preview-q-remove" data-idx="${idx}" title="Xóa câu này">&times;</button>
        </div>
        <div class="preview-q-text japanese-text">${q.question_text}</div>
        <div class="preview-options-grid">${optionsHtml}</div>
        ${q.explanation ? `<div class="preview-q-exp">💡 ${q.explanation}</div>` : ''}
        ${q.hasWarning ? `<div style="color: #f59e0b; font-size: 0.8rem;">⚠️ Chưa phát hiện đáp án rõ ràng, mặc định đáp án 1</div>` : ''}
      `;

      parsedQuestionsPreviewList.appendChild(card);
    });

    // Remove buttons in preview
    const removeBtns = parsedQuestionsPreviewList.querySelectorAll('.preview-q-remove');
    removeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idxToRemove = parseInt(e.target.dataset.idx, 10);
        parsedQuestionsList.splice(idxToRemove, 1);
        parsedCountEl.textContent = parsedQuestionsList.length;
        if (parsedQuestionsList.length === 0) {
          uploadPreviewSection.classList.add('hidden');
        } else {
          renderPreviewQuestions();
        }
      });
    });
  }

  function parseQuestions() {
    const raw = uploadRawText.value.trim();
    if (!raw) {
      alert("Vui lòng dán nội dung các câu hỏi vào ô nhập trước!");
      return;
    }

    parsedQuestionsList = parseQuestionsFromRawText(raw);
    if (parsedQuestionsList.length === 0) {
      alert("Không tìm thấy câu hỏi hợp lệ nào trong văn bản đã dán. Vui lòng kiểm tra lại cấu trúc định dạng hoặc bấm '📋 Dán mẫu thử' để tham khảo!");
      return;
    }

    parsedCountEl.textContent = parsedQuestionsList.length;
    parsedBadgeEl.textContent = `${parsedQuestionsList.length} câu đã sẵn sàng`;
    renderPreviewQuestions();
    uploadPreviewSection.classList.remove('hidden');
    uploadPreviewSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  if (parsePreviewBtn) {
    parsePreviewBtn.addEventListener('click', parseQuestions);
  }

  // Upload to Supabase handler
  async function uploadQuestionsToSupabase() {
    if (!isDbOnline || !supabaseClient) {
      alert("Chưa kết nối cơ sở dữ liệu Supabase! Vui lòng cấu hình kết nối ở góc phải trước.");
      return;
    }

    if (!parsedQuestionsList || parsedQuestionsList.length === 0) {
      alert("Chưa có câu hỏi nào được phân tích! Vui lòng dán câu hỏi và bấm '⚡ Phân Tích & Xem Trước'.");
      return;
    }

    const client = getWriteClient();
    const examSelectVal = uploadExamSelect.value;
    let examId = null;

    uploadProgressStatus.className = 'upload-status-text loading';
    uploadProgressStatus.textContent = '⏳ Đang kết nối Supabase...';
    uploadProgressStatus.classList.remove('hidden');
    executeUploadBtn.disabled = true;

    try {
      // 1. Resolve Exam
      if (examSelectVal === 'new') {
        const name = newExamNameInput.value.trim();
        const level = newExamLevelSelect.value;
        const year = parseInt(newExamYearInput.value, 10) || new Date().getFullYear();
        const month = parseInt(newExamMonthInput.value, 10) || 7;

        if (!name) {
          throw new Error("Vui lòng nhập tên đề thi mới!");
        }

        uploadProgressStatus.textContent = '⏳ Đang tạo đề thi mới...';
        const { data: newExam, error: examErr } = await client
          .from('jlpt_exams')
          .insert([{ name, level, year, month }])
          .select('id')
          .single();

        if (examErr) throw examErr;
        examId = newExam.id;
      } else {
        examId = parseInt(examSelectVal, 10);
        if (!examId) {
          throw new Error("Vui lòng chọn đề thi mục tiêu!");
        }
      }

      // 2. Resolve Passage (if enabled)
      let passageId = null;
      if (togglePassageInput.checked) {
        const pTitle = uploadPassageTitle.value.trim() || 'Bài đọc ngữ cảnh';
        const pContent = uploadPassageContent.value.trim();
        if (pContent) {
          uploadProgressStatus.textContent = '⏳ Đang lưu bài đọc ngữ cảnh...';
          passageId = `passage_${uploadPartSelect.value}_${Date.now()}`;
          const { error: passErr } = await client
            .from('jlpt_passages')
            .insert([{
              id: passageId,
              exam_id: examId,
              part: uploadPartSelect.value,
              title: pTitle,
              content: pContent
            }]);
          if (passErr) throw passErr;
        }
      }

      // 3. Batch Insert Questions
      uploadProgressStatus.textContent = `⏳ Đang tải ${parsedQuestionsList.length} câu hỏi lên Database...`;
      const part = uploadPartSelect.value;
      const sectionTitle = uploadSectionTitleInput.value.trim() || 'Câu hỏi trắc nghiệm';

      const payload = parsedQuestionsList.map((q, idx) => ({
        id: `q_${part}_${examId}_${Date.now()}_${idx + 1}`,
        exam_id: examId,
        part: part,
        question_number: q.question_number || (idx + 1),
        section_title: sectionTitle,
        passage_id: passageId,
        question_text: q.question_text,
        options: q.options,
        correct_option: q.correct_option,
        explanation: q.explanation || `Đáp án đúng là lựa chọn số ${q.correct_option}`
      }));

      const { error: qErr } = await client
        .from('jlpt_questions')
        .insert(payload);

      if (qErr) throw qErr;

      uploadProgressStatus.className = 'upload-status-text success';
      uploadProgressStatus.textContent = `✅ Đã tải thành công ${parsedQuestionsList.length} câu hỏi lên Database!`;

      alert(`🎉 Thành công! Đã đẩy ${parsedQuestionsList.length} câu hỏi trực tiếp lên cơ sở dữ liệu Supabase.`);

      // Refresh exams list and reset
      await renderMainMenu();
      await populateUploadExamsList();
      uploadRawText.value = '';
      parsedQuestionsList = [];
      uploadPreviewSection.classList.add('hidden');
    } catch (err) {
      console.error("Upload error:", err);
      uploadProgressStatus.className = 'upload-status-text error';
      uploadProgressStatus.textContent = `❌ Lỗi: ${err.message || err}`;

      if (err.code === '42501' || (err.message && (err.message.includes('permission denied') || err.message.includes('violates row-level security')))) {
        alert("⚠️ Supabase báo lỗi quyền ghi (Permission denied / RLS)! Database cần được mở quyền INSERT. Hệ thống sẽ mở hướng dẫn cấu hình cho bạn.");
        if (supabaseRlsModal) supabaseRlsModal.classList.remove('hidden');
      } else {
        alert("Có lỗi khi đẩy câu hỏi lên Supabase: " + (err.message || err));
      }
    } finally {
      executeUploadBtn.disabled = false;
    }
  }

  if (executeUploadBtn) {
    executeUploadBtn.addEventListener('click', uploadQuestionsToSupabase);
  }

  // RLS guidance modal interactions
  if (openRlsGuideBtn) {
    openRlsGuideBtn.addEventListener('click', () => {
      if (supabaseRlsModal) supabaseRlsModal.classList.remove('hidden');
    });
  }

  if (closeRlsModalBtn) {
    closeRlsModalBtn.addEventListener('click', () => {
      if (supabaseRlsModal) supabaseRlsModal.classList.add('hidden');
    });
  }

  if (closeRlsConfirmBtn) {
    closeRlsConfirmBtn.addEventListener('click', () => {
      if (supabaseRlsModal) supabaseRlsModal.classList.add('hidden');
    });
  }

  if (copySqlBtn && rlsSqlCode) {
    copySqlBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(rlsSqlCode.value).then(() => {
        copySqlBtn.textContent = '✓ Đã sao chép!';
        setTimeout(() => {
          copySqlBtn.textContent = '📋 Sao chép SQL';
        }, 2500);
      }).catch(err => {
        rlsSqlCode.select();
        document.execCommand('copy');
        copySqlBtn.textContent = '✓ Đã sao chép!';
      });
    });
  }

  async function startApp() {
    await initSupabase();
    loadSettings();
    await renderMainMenu();
    await restoreSession();
  }

  startApp();
});

