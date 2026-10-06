document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. SUPABASE CLIENT & STATE CONFIGURATION
  // =========================================================================
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

    let normalizedUrl = savedUrl ? savedUrl.trim() : '';
    if (normalizedUrl) {
      normalizedUrl = normalizedUrl.replace(/\/rest\/v1\/?$/, '');
    }

    if (normalizedUrl && savedKey) {
      try {
        if (typeof supabase !== 'undefined') {
          supabaseClient = supabase.createClient(normalizedUrl, savedKey);

          if (savedServiceKey) {
            try {
              adminSupabaseClient = supabase.createClient(normalizedUrl, savedServiceKey);
            } catch(errAdmin) {
              console.warn("Could not create admin client:", errAdmin);
            }
          }

          // Test database connection (try subjects table, then test fallback)
          try {
            const { data, error } = await supabaseClient.from('subjects').select('id').limit(1);
            if (!error) {
              isDbOnline = true;
              dbStatusBadge.textContent = '🔌 Supabase Online';
              dbStatusBadge.className = 'status-badge online';
            } else {
              // If subjects table is not yet created in Supabase
              isDbOnline = true;
              dbStatusBadge.textContent = '🔌 Supabase Đã Kết Nối';
              dbStatusBadge.className = 'status-badge online';
            }
          } catch (e) {
            isDbOnline = true;
            dbStatusBadge.textContent = '🔌 Supabase Đã Kết Nối';
            dbStatusBadge.className = 'status-badge online';
          }
        } else {
          throw new Error("Supabase SDK is not loaded.");
        }
      } catch (e) {
        console.error("Failed to connect to Supabase:", e);
        isDbOnline = false;
        dbStatusBadge.textContent = 'Chế độ Offline';
        dbStatusBadge.className = 'status-badge offline';
      }
    } else {
      isDbOnline = false;
      dbStatusBadge.textContent = 'Chế độ Offline';
      dbStatusBadge.className = 'status-badge offline';
    }

    if (supabaseUrlEl) supabaseUrlEl.value = savedUrl || '';
    if (supabaseKeyEl) supabaseKeyEl.value = savedKey || '';
    if (supabaseServiceKeyEl) supabaseServiceKeyEl.value = savedServiceKey || '';
  }

  // =========================================================================
  // 2. DATA LAYER (SUPABASE + LOCALSTORAGE FALLBACK)
  // =========================================================================
  const DEFAULT_SUBJECTS = [
    {
      id: 1,
      name: 'Kiến Trúc & Thiết Kế Phần Mềm (ITSS)',
      description: 'Tổng hợp câu hỏi trắc nghiệm kiến trúc phần mềm, UML, Design Patterns',
      icon: '💻',
      created_at: new Date().toISOString()
    },
    {
      id: 2,
      name: 'Tiếng Nhật JLPT N3',
      description: 'Luyện thi chuẩn JLPT: Từ vựng, Ngữ pháp, Đọc hiểu',
      icon: '🇯🇵',
      created_at: new Date().toISOString()
    },
    {
      id: 3,
      name: 'Toán Rời Rạc & Giải Thuật',
      description: 'Đồ thị, cây, tổ hợp xác suất và giải thuật đệ quy',
      icon: '📐',
      created_at: new Date().toISOString()
    }
  ];

  const DEFAULT_QUIZZES = [
    {
      id: 1,
      subject_id: 1,
      title: 'Trắc nghiệm ITSS - Đề số 1 (40 câu)',
      description: 'Tổng hợp kiến thức Use Case, Sequence Diagram, Activity Diagram',
      created_at: new Date().toISOString()
    }
  ];

  const DEFAULT_QUESTIONS = [
    {
      id: 'q_1_1',
      quiz_id: 1,
      question_number: 1,
      question_text: 'Hoàn chỉnh câu sau: ......... là cách biểu diễn tốt để mô tả hành vi của một số đối tượng hợp tác với nhau không cần biểu diễn rõ trình tự thời gian.',
      options: [
        'Sơ đồ trạng thái (State Diagrams)',
        'Sơ đồ tuần tự (Sequence Diagrams)',
        'Sơ đồ cộng tác (Collaboration Diagrams)',
        'Sơ đồ hoạt động (Activity Diagrams)'
      ],
      correct_option: 3,
      explanation: 'Sơ đồ cộng tác (Collaboration Diagrams) nhấn mạnh vào sự hợp tác giữa các đối tượng không theo trục thời gian.'
    },
    {
      id: 'q_1_2',
      quiz_id: 1,
      question_number: 2,
      question_text: 'Hoàn chỉnh câu sau: ......... là cách biểu diễn tốt để mô tả luồng hoạt động trong một Use Case và thường được dùng trong mô hình nghiệp vụ.',
      options: [
        'Sơ đồ trạng thái (State Diagrams)',
        'Sơ đồ tương tác (Interaction Diagrams)',
        'Sơ đồ hoạt động (Activity Diagrams)',
        'Sơ đồ lớp (Class Diagrams)'
      ],
      correct_option: 3,
      explanation: 'Sơ đồ hoạt động (Activity Diagrams) mô tả luồng hoạt động công việc nghiệp vụ trong use case.'
    }
  ];

  function getLocalData(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      if (data) return JSON.parse(data);
    } catch(e) {}
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }

  function setLocalData(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch(e) {
      console.warn("Could not save to localStorage:", e);
    }
  }

  // Fetch all subjects with their quiz count
  async function loadSubjects() {
    let subjects = [];
    if (isDbOnline && supabaseClient) {
      try {
        const { data, error } = await supabaseClient.from('subjects').select('*').order('id', { ascending: false });
        if (!error && data) {
          subjects = data;
        }
      } catch (e) {
        console.warn("Supabase loadSubjects error, falling back to local:", e);
      }
    }

    if (!subjects || subjects.length === 0) {
      subjects = getLocalData('study_subjects', DEFAULT_SUBJECTS);
    }

    // Calculate quiz count for each subject
    for (let s of subjects) {
      s.quiz_count = await getQuizCountForSubject(s.id);
    }

    return subjects;
  }

  async function getQuizCountForSubject(subjectId) {
    if (isDbOnline && supabaseClient) {
      try {
        const { count, error } = await supabaseClient.from('quizzes').select('*', { count: 'exact', head: true }).eq('subject_id', subjectId);
        if (!error && count !== null) return count;
      } catch (e) {}
    }
    const localQuizzes = getLocalData('study_quizzes', DEFAULT_QUIZZES);
    return localQuizzes.filter(q => Number(q.subject_id) === Number(subjectId)).length;
  }

  // Create a new subject
  async function createSubject(name, description, icon) {
    const newSubject = {
      name,
      description: description || '',
      icon: icon || '📚',
      created_at: new Date().toISOString()
    };

    let createdId = null;

    if (isDbOnline && supabaseClient) {
      try {
        const client = getWriteClient();
        const { data, error } = await client.from('subjects').insert([newSubject]).select('id').single();
        if (!error && data) {
          createdId = data.id;
        } else if (error && (error.code === '42501' || error.message.includes('row-level security'))) {
          throw error;
        }
      } catch (e) {
        if (e.code === '42501' || (e.message && e.message.includes('row-level security'))) {
          throw e;
        }
        console.warn("Supabase createSubject error, using local fallback:", e);
      }
    }

    // LocalStorage fallback
    const subjects = getLocalData('study_subjects', DEFAULT_SUBJECTS);
    if (!createdId) {
      createdId = Date.now();
    }
    newSubject.id = createdId;
    subjects.unshift(newSubject);
    setLocalData('study_subjects', subjects);

    return newSubject;
  }

  // Delete a subject
  async function deleteSubject(subjectId) {
    if (isDbOnline && supabaseClient) {
      try {
        const client = getWriteClient();
        await client.from('subjects').delete().eq('id', subjectId);
      } catch(e) {}
    }

    let subjects = getLocalData('study_subjects', DEFAULT_SUBJECTS);
    subjects = subjects.filter(s => Number(s.id) !== Number(subjectId));
    setLocalData('study_subjects', subjects);
  }

  // Load quizzes for a specific subject
  async function loadQuizzesForSubject(subjectId) {
    let quizzes = [];
    if (isDbOnline && supabaseClient) {
      try {
        const { data, error } = await supabaseClient.from('quizzes').select('*').eq('subject_id', subjectId).order('id', { ascending: false });
        if (!error && data) {
          quizzes = data;
        }
      } catch (e) {
        console.warn("Supabase loadQuizzes error:", e);
      }
    }

    if (!quizzes || quizzes.length === 0) {
      const allQuizzes = getLocalData('study_quizzes', DEFAULT_QUIZZES);
      quizzes = allQuizzes.filter(q => Number(q.subject_id) === Number(subjectId));
    }

    // Get question count for each quiz
    for (let q of quizzes) {
      q.question_count = await getQuestionCountForQuiz(q.id);
    }

    return quizzes;
  }

  async function getQuestionCountForQuiz(quizId) {
    if (isDbOnline && supabaseClient) {
      try {
        const { count, error } = await supabaseClient.from('questions').select('*', { count: 'exact', head: true }).eq('quiz_id', quizId);
        if (!error && count !== null) return count;
      } catch(e) {}
    }
    const allQuestions = getLocalData('study_questions', DEFAULT_QUESTIONS);
    return allQuestions.filter(item => Number(item.quiz_id) === Number(quizId)).length;
  }

  // Delete a quiz
  async function deleteQuiz(quizId) {
    if (isDbOnline && supabaseClient) {
      try {
        const client = getWriteClient();
        await client.from('quizzes').delete().eq('id', quizId);
      } catch(e) {}
    }

    let quizzes = getLocalData('study_quizzes', DEFAULT_QUIZZES);
    quizzes = quizzes.filter(q => Number(q.id) !== Number(quizId));
    setLocalData('study_quizzes', quizzes);

    let questions = getLocalData('study_questions', DEFAULT_QUESTIONS);
    questions = questions.filter(q => Number(q.quiz_id) !== Number(quizId));
    setLocalData('study_questions', questions);
  }

  // Load questions for taking quiz
  async function loadQuestionsForQuiz(quizId) {
    let questions = [];
    if (isDbOnline && supabaseClient) {
      try {
        const { data, error } = await supabaseClient.from('questions').select('*').eq('quiz_id', quizId).order('question_number', { ascending: true });
        if (!error && data && data.length > 0) {
          questions = data;
        }
      } catch (e) {
        console.warn("Supabase loadQuestions error:", e);
      }
    }

    if (!questions || questions.length === 0) {
      const allQuestions = getLocalData('study_questions', DEFAULT_QUESTIONS);
      questions = allQuestions.filter(q => Number(q.quiz_id) === Number(quizId));
    }

    return questions;
  }

  // =========================================================================
  // 3. SMART TXT QUESTION & ANSWER PARSER MODULE
  // =========================================================================
  /**
   * Parser specifications:
   * Question format:
   * Câu 1 : [Đề bài]
   * A. [...]
   * B. [...]
   * C. [...]
   * D. [...]
   *
   * Answer format (optional separate file):
   * 1. A
   * 2. B
   * 3. C
   */
  function parseAnswersText(rawAnswersText) {
    if (!rawAnswersText || !rawAnswersText.trim()) return {};
    const answersMap = {};
    const lines = rawAnswersText.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');

    for (let line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;

      // Pattern: "1. A", "1: A", "1 - A", "Câu 1: A", "1. 2"
      const match = trimmed.match(/^(?:Câu|Question|\#)?\s*(\d+)[\.\:\)\/\-\s]+([A-Da-d1-4])/i);
      if (match) {
        const qNum = parseInt(match[1], 10);
        const letter = match[2].toUpperCase();
        let optIndex = 1;
        if (letter === 'A' || letter === '1') optIndex = 1;
        else if (letter === 'B' || letter === '2') optIndex = 2;
        else if (letter === 'C' || letter === '3') optIndex = 3;
        else if (letter === 'D' || letter === '4') optIndex = 4;
        answersMap[qNum] = optIndex;
      }
    }
    return answersMap;
  }

  function parseQuestionsAndAnswers(rawQuestionsText, rawAnswersText) {
    if (!rawQuestionsText || !rawQuestionsText.trim()) return [];

    const answersMap = parseAnswersText(rawAnswersText);
    const lines = rawQuestionsText.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
    const questions = [];
    let currentQ = null;

    function finalizeQuestion(q) {
      if (!q || !q.question_text) return;
      if (q.options.length < 2) return;

      // Assign answer if found in separate answersMap
      if (answersMap[q.question_number]) {
        q.correct_option = answersMap[q.question_number];
      }

      // If still not assigned, check if we had inline answer or default
      if (!q.correct_option) {
        q.correct_option = 1; // default to A
        q.hasWarning = true;
      }

      questions.push(q);
    }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      // Check for Question start: "Câu 1 : [Đề bài]", "Câu 1: [Đề bài]", "1. [Đề bài]"
      const qMatch = line.match(/^(?:Câu|Question|\#)\s*(\d+)\s*[\:\.\)\/\-]+\s*(.*)$/i) ||
                     (!currentQ && line.match(/^(\d+)\s*[\:\.\)\/\-]+\s*(.*)$/));

      const isNewQuestion = qMatch && (
        !currentQ || 
        currentQ.options.length >= 2 || 
        parseInt(qMatch[1], 10) > (currentQ ? currentQ.question_number : 0)
      );

      // Check for Option: "A. [...]", "A: [...]", "A) [...]", "1. [...]", "*A. [...]"
      const optMatch = line.match(/^(\*)?\s*(?:\[?([A-Da-d1-4])\]?|([A-Da-d1-4]))[\.\:\)\/\-]\s*(.*)$/);

      // Check for inline answer: "Đáp án: A", "Đ/A: B", "Key: C", "Answer: D"
      const ansMatch = line.match(/^(?:Đáp\s*án|Đ\/A|ĐA|Key|Answer|Ans)[\s\:\=\-]+([A-Da-d1-4])/i);

      // Check for explanation: "Giải thích: [...]", "Ghi chú: [...]"
      const expMatch = line.match(/^(?:Giải\s*thích|Ghi\s*chú|Note|HD|Hướng\s*dẫn|Exp)[\s\:\-]+(.*)$/i);

      if (ansMatch && currentQ) {
        const letter = ansMatch[1].toUpperCase();
        let optIndex = 1;
        if (letter === 'A' || letter === '1') optIndex = 1;
        else if (letter === 'B' || letter === '2') optIndex = 2;
        else if (letter === 'C' || letter === '3') optIndex = 3;
        else if (letter === 'D' || letter === '4') optIndex = 4;
        currentQ.correct_option = optIndex;
      } else if (expMatch && currentQ) {
        currentQ.explanation = expMatch[1].trim();
      } else if (optMatch && currentQ && (!isNewQuestion || currentQ.options.length < 4)) {
        const isAsterisk = !!optMatch[1];
        const optLetter = (optMatch[2] || optMatch[3]).toUpperCase();
        const optText = optMatch[4].trim();

        currentQ.options.push(optText || optLetter);

        if (isAsterisk) {
          let optIndex = currentQ.options.length;
          if (optLetter === 'A' || optLetter === '1') optIndex = 1;
          else if (optLetter === 'B' || optLetter === '2') optIndex = 2;
          else if (optLetter === 'C' || optLetter === '3') optIndex = 3;
          else if (optLetter === 'D' || optLetter === '4') optIndex = 4;
          currentQ.correct_option = optIndex;
        }
      } else if (isNewQuestion) {
        if (currentQ) finalizeQuestion(currentQ);
        currentQ = {
          question_number: parseInt(qMatch[1], 10) || (questions.length + 1),
          question_text: qMatch[2].trim(),
          options: [],
          correct_option: null,
          explanation: ''
        };
      } else if (currentQ) {
        // Multi-line continuation
        if (currentQ.options.length === 0) {
          currentQ.question_text += ' ' + line;
        } else if (currentQ.explanation) {
          currentQ.explanation += ' ' + line;
        } else {
          currentQ.options[currentQ.options.length - 1] += ' ' + line;
        }
      }
    }

    if (currentQ) finalizeQuestion(currentQ);
    return questions;
  }

  // =========================================================================
  // 4. SCREEN NAVIGATION & ROUTING
  // =========================================================================
  const subjectsScreen = document.getElementById('subjects-screen');
  const subjectDetailScreen = document.getElementById('subject-detail-screen');
  const quizScreen = document.getElementById('quiz-screen');

  let currentSubject = null;
  let currentActiveQuiz = null;

  function showScreen(screenName) {
    if (subjectsScreen) subjectsScreen.classList.toggle('hidden', screenName !== 'subjects');
    if (subjectDetailScreen) subjectDetailScreen.classList.toggle('hidden', screenName !== 'subject-detail');
    if (quizScreen) quizScreen.classList.toggle('hidden', screenName !== 'quiz');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // =========================================================================
  // 5. SCREEN 1: SUBJECTS LIST RENDERING & ACTIONS
  // =========================================================================
  const subjectsGrid = document.getElementById('subjects-grid');
  const subjectsCountBadge = document.getElementById('subjects-count-badge');
  const openCreateSubjectBtn = document.getElementById('open-create-subject-btn');
  const createSubjectModal = document.getElementById('create-subject-modal');
  const closeCreateSubjectBtn = document.getElementById('close-create-subject-btn');
  const cancelSubjectBtn = document.getElementById('cancel-subject-btn');
  const createSubjectForm = document.getElementById('create-subject-form');
  const newSubjectNameInput = document.getElementById('new-subject-name');
  const newSubjectDescInput = document.getElementById('new-subject-desc');
  const selectedSubjectIconInput = document.getElementById('selected-subject-icon');
  const iconChoices = document.querySelectorAll('.icon-choice');
  const subjectModalError = document.getElementById('subject-modal-error');

  // Render all subjects cards
  async function renderSubjectsScreen() {
    if (!subjectsGrid) return;
    subjectsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">⏳ Đang tải danh sách môn học...</div>';

    const subjects = await loadSubjects();
    if (subjectsCountBadge) subjectsCountBadge.textContent = `${subjects.length} Môn học`;

    subjectsGrid.innerHTML = '';

    if (!subjects || subjects.length === 0) {
      subjectsGrid.innerHTML = `
        <div class="empty-state-card">
          <div class="empty-state-icon">📚</div>
          <h3 class="empty-state-title">Chưa có môn học nào</h3>
          <p class="empty-state-text">Hãy bắt đầu bằng cách tạo môn học đầu tiên để lưu trữ các bài quiz ôn tập.</p>
          <button id="empty-add-subject-btn" class="btn btn-primary btn-lg">➕ Thêm Môn Học Ngay</button>
        </div>
      `;
      const emptyBtn = document.getElementById('empty-add-subject-btn');
      if (emptyBtn) emptyBtn.addEventListener('click', openSubjectModal);
      return;
    }

    subjects.forEach(subject => {
      const card = document.createElement('div');
      card.className = 'subject-card';
      card.innerHTML = `
        <div class="subject-card-top">
          <div class="subject-icon">${subject.icon || '📚'}</div>
          <div class="subject-info">
            <h3 class="subject-title">${subject.name}</h3>
            <p class="subject-desc">${subject.description || 'Chưa có mô tả'}</p>
          </div>
        </div>
        <div class="subject-card-footer">
          <span class="subject-quiz-count">📝 ${subject.quiz_count || 0} bài Quiz</span>
          <div class="subject-card-actions">
            <button class="btn btn-outline btn-sm delete-subject-btn" title="Xóa môn học" data-id="${subject.id}">🗑️</button>
            <button class="btn btn-primary btn-sm enter-subject-btn" data-id="${subject.id}">Vào ôn tập ➔</button>
          </div>
        </div>
      `;

      // Enter subject click
      card.addEventListener('click', (e) => {
        if (e.target.closest('.delete-subject-btn')) return;
        enterSubject(subject);
      });

      // Delete subject button
      const deleteBtn = card.querySelector('.delete-subject-btn');
      if (deleteBtn) {
        deleteBtn.addEventListener('click', async (e) => {
          e.stopPropagation();
          if (confirm(`Bạn có chắc chắn muốn xóa môn "${subject.name}" cùng tất cả các quiz bên trong không?`)) {
            await deleteSubject(subject.id);
            await renderSubjectsScreen();
          }
        });
      }

      subjectsGrid.appendChild(card);
    });
  }

  // Icon picker logic
  iconChoices.forEach(btn => {
    btn.addEventListener('click', () => {
      iconChoices.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (selectedSubjectIconInput) {
        selectedSubjectIconInput.value = btn.dataset.icon;
      }
    });
  });

  function openSubjectModal() {
    if (createSubjectModal) createSubjectModal.classList.remove('hidden');
    if (newSubjectNameInput) {
      newSubjectNameInput.value = '';
      newSubjectNameInput.focus();
    }
    if (newSubjectDescInput) newSubjectDescInput.value = '';
    if (subjectModalError) subjectModalError.classList.add('hidden');
  }

  function closeSubjectModal() {
    if (createSubjectModal) createSubjectModal.classList.add('hidden');
  }

  if (openCreateSubjectBtn) openCreateSubjectBtn.addEventListener('click', openSubjectModal);
  if (closeCreateSubjectBtn) closeCreateSubjectBtn.addEventListener('click', closeSubjectModal);
  if (cancelSubjectBtn) cancelSubjectBtn.addEventListener('click', closeSubjectModal);

  // Submit new subject form
  if (createSubjectForm) {
    createSubjectForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = newSubjectNameInput.value.trim();
      const desc = newSubjectDescInput.value.trim();
      const icon = selectedSubjectIconInput ? selectedSubjectIconInput.value : '📚';

      if (!name) {
        if (subjectModalError) {
          subjectModalError.textContent = 'Vui lòng nhập tên môn học!';
          subjectModalError.classList.remove('hidden');
        }
        return;
      }

      try {
        await createSubject(name, desc, icon);
        closeSubjectModal();
        await renderSubjectsScreen();
      } catch (err) {
        if (subjectModalError) {
          subjectModalError.textContent = `Lỗi: ${err.message || err}`;
          subjectModalError.classList.remove('hidden');
        }
      }
    });
  }

  // =========================================================================
  // 6. SCREEN 2: SUBJECT DETAIL & QUIZZES LIST
  // =========================================================================
  const backToSubjectsBtn = document.getElementById('back-to-subjects-btn');
  const currentSubjectTitle = document.getElementById('current-subject-title');
  const currentSubjectDesc = document.getElementById('current-subject-desc');
  const currentSubjectIcon = document.getElementById('current-subject-icon');
  const subjectQuizzesCountBadge = document.getElementById('subject-quizzes-count-badge');
  const subjectQuizzesGrid = document.getElementById('subject-quizzes-grid');
  const openCreateQuizForSubjectBtn = document.getElementById('open-create-quiz-for-subject-btn');
  const openQuickUploadBtn = document.getElementById('open-quick-upload-btn');

  async function enterSubject(subject) {
    currentSubject = subject;
    if (currentSubjectTitle) currentSubjectTitle.textContent = subject.name;
    if (currentSubjectDesc) currentSubjectDesc.textContent = subject.description || 'Danh sách các bài quiz ôn tập';
    if (currentSubjectIcon) currentSubjectIcon.textContent = subject.icon || '📚';

    showScreen('subject-detail');
    await renderSubjectQuizzes();
  }

  if (backToSubjectsBtn) {
    backToSubjectsBtn.addEventListener('click', () => {
      currentSubject = null;
      showScreen('subjects');
      renderSubjectsScreen();
    });
  }

  async function renderSubjectQuizzes() {
    if (!currentSubject || !subjectQuizzesGrid) return;
    subjectQuizzesGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">⏳ Đang tải danh sách bài quiz...</div>';

    const quizzes = await loadQuizzesForSubject(currentSubject.id);
    if (subjectQuizzesCountBadge) subjectQuizzesCountBadge.textContent = `${quizzes.length} Bài Quiz`;

    subjectQuizzesGrid.innerHTML = '';

    if (!quizzes || quizzes.length === 0) {
      subjectQuizzesGrid.innerHTML = `
        <div class="empty-state-card">
          <div class="empty-state-icon">📝</div>
          <h3 class="empty-state-title">Chưa có bài quiz nào cho môn này</h3>
          <p class="empty-state-text">Hãy bấm nút bên dưới để tạo bài quiz mới bằng cách dán hoặc tải lên file .txt câu hỏi và đáp án.</p>
          <button id="empty-add-quiz-btn" class="btn btn-primary btn-lg">➕ Tạo Quiz Mới Bằng TXT</button>
        </div>
      `;
      const emptyAddQuizBtn = document.getElementById('empty-add-quiz-btn');
      if (emptyAddQuizBtn) {
        emptyAddQuizBtn.addEventListener('click', () => openCreateQuizModal(currentSubject.id));
      }
      return;
    }

    quizzes.forEach(quiz => {
      const card = document.createElement('div');
      card.className = 'quiz-select-card';
      card.innerHTML = `
        <div class="card-top-info">
          <div class="quiz-file-badge">📖 ${currentSubject.name}</div>
          <h3 class="quiz-card-title">${quiz.title}</h3>
          <p class="quiz-card-desc">${quiz.description || 'Đề trắc nghiệm ôn tập kiến thức môn học'}</p>
        </div>
        <div class="card-bottom-info">
          <span class="quiz-meta-stat">⚡ ${quiz.question_count || 0} câu hỏi</span>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-outline btn-sm delete-quiz-btn" title="Xóa Quiz" data-id="${quiz.id}">🗑️</button>
            <button class="btn btn-primary btn-sm start-quiz-btn" data-id="${quiz.id}">Làm bài ⚡</button>
          </div>
        </div>
      `;

      // Start quiz event
      const startBtn = card.querySelector('.start-quiz-btn');
      if (startBtn) {
        startBtn.addEventListener('click', () => startQuizFromSubject(quiz));
      }

      // Delete quiz event
      const deleteBtn = card.querySelector('.delete-quiz-btn');
      if (deleteBtn) {
        deleteBtn.addEventListener('click', async (e) => {
          e.stopPropagation();
          if (confirm(`Bạn có chắc chắn muốn xóa bài quiz "${quiz.title}" không?`)) {
            await deleteQuiz(quiz.id);
            await renderSubjectQuizzes();
          }
        });
      }

      subjectQuizzesGrid.appendChild(card);
    });
  }

  // =========================================================================
  // 7. CREATE QUIZ FROM TXT FILES MODAL
  // =========================================================================
  const createQuizModal = document.getElementById('create-quiz-modal');
  const closeCreateQuizBtn = document.getElementById('close-create-quiz-btn');
  const quizSubjectSelect = document.getElementById('quiz-subject-select');
  const quizTitleInput = document.getElementById('quiz-title-input');
  const questionFileInput = document.getElementById('question-file-input');
  const answerFileInput = document.getElementById('answer-file-input');
  const quizRawQuestions = document.getElementById('quiz-raw-questions');
  const quizRawAnswers = document.getElementById('quiz-raw-answers');
  const fillSampleQBtn = document.getElementById('fill-sample-q-btn');
  const fillSampleAnsBtn = document.getElementById('fill-sample-ans-btn');
  const parsePreviewQuizBtn = document.getElementById('parse-preview-quiz-btn');
  const clearQuizInputsBtn = document.getElementById('clear-quiz-inputs-btn');
  const quizPreviewSection = document.getElementById('quiz-preview-section');
  const parsedQuizCount = document.getElementById('parsed-quiz-count');
  const parsedQuizBadge = document.getElementById('parsed-quiz-badge');
  const parsedQuizPreviewList = document.getElementById('parsed-quiz-preview-list');
  const executeSaveQuizBtn = document.getElementById('execute-save-quiz-btn');
  const quizSaveStatus = document.getElementById('quiz-save-status');

  let parsedQuestionsForCreation = [];

  async function openCreateQuizModal(preferredSubjectId = null) {
    if (!createQuizModal) return;

    // Populate subjects in dropdown
    const subjects = await loadSubjects();
    if (quizSubjectSelect) {
      quizSubjectSelect.innerHTML = '';
      subjects.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.id;
        opt.textContent = `${s.icon || '📚'} ${s.name}`;
        if (preferredSubjectId && Number(s.id) === Number(preferredSubjectId)) {
          opt.selected = true;
        }
        quizSubjectSelect.appendChild(opt);
      });
    }

    if (quizTitleInput) quizTitleInput.value = '';
    if (quizRawQuestions) quizRawQuestions.value = '';
    if (quizRawAnswers) quizRawAnswers.value = '';
    if (quizPreviewSection) quizPreviewSection.classList.add('hidden');
    if (quizSaveStatus) quizSaveStatus.classList.add('hidden');

    createQuizModal.classList.remove('hidden');
  }

  function closeCreateQuizModal() {
    if (createQuizModal) createQuizModal.classList.add('hidden');
  }

  if (openCreateQuizForSubjectBtn) {
    openCreateQuizForSubjectBtn.addEventListener('click', () => {
      openCreateQuizModal(currentSubject ? currentSubject.id : null);
    });
  }

  if (openQuickUploadBtn) {
    openQuickUploadBtn.addEventListener('click', () => {
      openCreateQuizModal(currentSubject ? currentSubject.id : null);
    });
  }

  if (closeCreateQuizBtn) closeCreateQuizBtn.addEventListener('click', closeCreateQuizModal);

  // File Upload Handlers (read .txt files using FileReader)
  if (questionFileInput) {
    questionFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        if (quizRawQuestions) quizRawQuestions.value = event.target.result;
        // Suggest title if empty
        if (quizTitleInput && !quizTitleInput.value) {
          quizTitleInput.value = file.name.replace(/\.[^/.]+$/, "");
        }
      };
      reader.readAsText(file);
    });
  }

  if (answerFileInput) {
    answerFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        if (quizRawAnswers) quizRawAnswers.value = event.target.result;
      };
      reader.readAsText(file);
    });
  }

  // Sample data fillers
  if (fillSampleQBtn) {
    fillSampleQBtn.addEventListener('click', () => {
      quizRawQuestions.value = `Câu 1 : Hoàn chỉnh câu sau: Sơ đồ tuần tự (Sequence Diagram) được sử dụng để làm gì?
A. Phân tích luồng nghiệp vụ trong use case
B. Mô tả tương tác giữa các đối tượng theo thứ tự thời gian
C. Mô tả kiến trúc vật lý và triển khai phần cứng
D. Thiết kế giao diện đồ họa người dùng

Câu 2 : Thuộc tính nào sau đây thể hiện tính đóng gói (Encapsulation) trong OOP?
A. Khả năng kế thừa phương thức từ lớp cha
B. Che giấu dữ liệu bên trong lớp và chỉ cho phép truy cập qua interface
C. Định nghĩa nhiều hàm cùng tên khác tham số
D. Tạo nhiều đối tượng từ cùng một khuôn mẫu

Câu 3 : Trong mô hình MVC, thành phần nào chịu trách nhiệm xử lý logic nghiệp vụ và dữ liệu?
A. View
B. Controller
C. Model
D. Router`;
      if (!quizTitleInput.value) {
        quizTitleInput.value = 'Trắc nghiệm Kiến Trúc Phần Mềm (Mẫu)';
      }
    });
  }

  if (fillSampleAnsBtn) {
    fillSampleAnsBtn.addEventListener('click', () => {
      quizRawAnswers.value = `1. B
2. B
3. C`;
    });
  }

  if (clearQuizInputsBtn) {
    clearQuizInputsBtn.addEventListener('click', () => {
      quizRawQuestions.value = '';
      quizRawAnswers.value = '';
      parsedQuestionsForCreation = [];
      quizPreviewSection.classList.add('hidden');
    });
  }

  // Parse and preview questions
  if (parsePreviewQuizBtn) {
    parsePreviewQuizBtn.addEventListener('click', () => {
      const qText = quizRawQuestions.value.trim();
      const aText = quizRawAnswers.value.trim();

      if (!qText) {
        alert("Vui lòng dán hoặc tải lên nội dung câu hỏi .txt trước!");
        return;
      }

      parsedQuestionsForCreation = parseQuestionsAndAnswers(qText, aText);

      if (parsedQuestionsForCreation.length === 0) {
        alert("Không tìm thấy câu hỏi trắc nghiệm hợp lệ nào. Vui lòng kiểm tra lại cấu trúc: \nCâu 1 : [Đề bài]\nA. [...]\nB. [...]");
        return;
      }

      parsedQuizCount.textContent = parsedQuestionsForCreation.length;
      parsedQuizBadge.textContent = `${parsedQuestionsForCreation.length} câu đã nhận diện`;

      renderQuizCreationPreview();
      quizPreviewSection.classList.remove('hidden');
      quizPreviewSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  function renderQuizCreationPreview() {
    if (!parsedQuizPreviewList) return;
    parsedQuizPreviewList.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];

    parsedQuestionsForCreation.forEach((q, idx) => {
      const card = document.createElement('div');
      card.className = 'preview-q-card';

      const optionsHtml = q.options.map((opt, oIdx) => {
        const isCorrect = (oIdx + 1) === q.correct_option;
        return `
          <div class="preview-opt-pill ${isCorrect ? 'is-correct' : ''}" data-qidx="${idx}" data-oidx="${oIdx + 1}" style="cursor: pointer;" title="Bấm để chọn đáp án đúng cho câu này">
            <strong>${letters[oIdx] || (oIdx + 1)}.</strong>
            <span>${opt}</span>
          </div>
        `;
      }).join('');

      card.innerHTML = `
        <div class="preview-q-header">
          <span class="preview-q-num">Câu ${q.question_number || (idx + 1)}</span>
          <button type="button" class="preview-q-remove" data-idx="${idx}" title="Xóa câu này">&times;</button>
        </div>
        <div class="preview-q-text">${q.question_text}</div>
        <div class="preview-options-grid">${optionsHtml}</div>
        ${q.explanation ? `<div class="preview-q-exp">💡 ${q.explanation}</div>` : ''}
        ${q.hasWarning ? `<div style="color: #f59e0b; font-size: 0.8rem;">⚠️ Chưa có đáp án từ file đáp án riêng, mặc định đáp án A (bấm vào phương án bên trên để đổi nếu muốn)</div>` : ''}
      `;

      // Allow clicking on options in preview to manually change correct answer!
      const pills = card.querySelectorAll('.preview-opt-pill');
      pills.forEach(pill => {
        pill.addEventListener('click', (e) => {
          const targetPill = e.target.closest('.preview-opt-pill');
          if (targetPill) {
            const qIdx = parseInt(targetPill.dataset.qidx, 10);
            const oIdx = parseInt(targetPill.dataset.oidx, 10);
            parsedQuestionsForCreation[qIdx].correct_option = oIdx;
            parsedQuestionsForCreation[qIdx].hasWarning = false;
            renderQuizCreationPreview();
          }
        });
      });

      // Remove button
      const removeBtn = card.querySelector('.preview-q-remove');
      if (removeBtn) {
        removeBtn.addEventListener('click', () => {
          parsedQuestionsForCreation.splice(idx, 1);
          parsedQuizCount.textContent = parsedQuestionsForCreation.length;
          if (parsedQuestionsForCreation.length === 0) {
            quizPreviewSection.classList.add('hidden');
          } else {
            renderQuizCreationPreview();
          }
        });
      }

      parsedQuizPreviewList.appendChild(card);
    });
  }

  // Save Quiz and Push Questions to Database
  if (executeSaveQuizBtn) {
    executeSaveQuizBtn.addEventListener('click', async () => {
      const subjectId = quizSubjectSelect.value;
      const title = quizTitleInput.value.trim();

      if (!subjectId) {
        alert("Vui lòng chọn môn học!");
        return;
      }

      if (!title) {
        alert("Vui lòng nhập tên bài Quiz!");
        return;
      }

      if (!parsedQuestionsForCreation || parsedQuestionsForCreation.length === 0) {
        alert("Chưa có câu hỏi nào được phân tích! Vui lòng bấm '⚡ Phân Tích & Xem Trước' trước khi lưu.");
        return;
      }

      quizSaveStatus.className = 'upload-status-text loading';
      quizSaveStatus.textContent = '⏳ Đang lưu quiz và đẩy câu hỏi lên database...';
      quizSaveStatus.classList.remove('hidden');
      executeSaveQuizBtn.disabled = true;

      try {
        let savedQuizId = null;

        // 1. Save Quiz into Supabase
        if (isDbOnline && supabaseClient) {
          try {
            const client = getWriteClient();
            const { data: newQuiz, error: qErr } = await client
              .from('quizzes')
              .insert([{
                subject_id: parseInt(subjectId, 10),
                title: title,
                description: `Tạo từ file TXT với ${parsedQuestionsForCreation.length} câu hỏi`
              }])
              .select('id')
              .single();

            if (!qErr && newQuiz) {
              savedQuizId = newQuiz.id;

              // Insert Questions into Supabase
              const payload = parsedQuestionsForCreation.map((q, idx) => ({
                id: `q_${savedQuizId}_${Date.now()}_${idx + 1}`,
                quiz_id: savedQuizId,
                question_number: q.question_number || (idx + 1),
                question_text: q.question_text,
                options: q.options,
                correct_option: q.correct_option,
                explanation: q.explanation || `Đáp án đúng là lựa chọn ${['A','B','C','D'][q.correct_option - 1] || q.correct_option}`
              }));

              const { error: insErr } = await client.from('questions').insert(payload);
              if (insErr) throw insErr;
            }
          } catch(errDb) {
            console.warn("Supabase insert error, falling back to local:", errDb);
            if (errDb.code === '42501' || (errDb.message && errDb.message.includes('row-level security'))) {
              alert("⚠️ Supabase báo lỗi quyền ghi (RLS / Permission denied)! Vui lòng xem mục '🔒 SQL Script' để cấp quyền trên Supabase.");
            }
          }
        }

        // 2. LocalStorage Fallback (ensures 100% offline & immediate reliability)
        if (!savedQuizId) {
          savedQuizId = Date.now();
        }

        const localQuizzes = getLocalData('study_quizzes', DEFAULT_QUIZZES);
        localQuizzes.unshift({
          id: savedQuizId,
          subject_id: parseInt(subjectId, 10),
          title: title,
          description: `Đề thi trắc nghiệm (${parsedQuestionsForCreation.length} câu hỏi)`,
          created_at: new Date().toISOString()
        });
        setLocalData('study_quizzes', localQuizzes);

        const localQuestions = getLocalData('study_questions', DEFAULT_QUESTIONS);
        parsedQuestionsForCreation.forEach((q, idx) => {
          localQuestions.push({
            id: `q_${savedQuizId}_${idx + 1}`,
            quiz_id: savedQuizId,
            question_number: q.question_number || (idx + 1),
            question_text: q.question_text,
            options: q.options,
            correct_option: q.correct_option,
            explanation: q.explanation || `Đáp án đúng là lựa chọn ${['A','B','C','D'][q.correct_option - 1] || q.correct_option}`
          });
        });
        setLocalData('study_questions', localQuestions);

        quizSaveStatus.className = 'upload-status-text success';
        quizSaveStatus.textContent = `✅ Đã tạo thành công bài quiz với ${parsedQuestionsForCreation.length} câu hỏi!`;

        alert(`🎉 Thành công! Đã tạo bài quiz "${title}" và đẩy ${parsedQuestionsForCreation.length} câu hỏi lên hệ thống.`);

        closeCreateQuizModal();

        // Refresh screens
        if (currentSubject && Number(currentSubject.id) === Number(subjectId)) {
          await renderSubjectQuizzes();
        } else {
          await renderSubjectsScreen();
        }
      } catch (err) {
        console.error("Save quiz error:", err);
        quizSaveStatus.className = 'upload-status-text error';
        quizSaveStatus.textContent = `❌ Lỗi: ${err.message || err}`;
        alert("Lỗi khi tạo quiz: " + (err.message || err));
      } finally {
        executeSaveQuizBtn.disabled = false;
      }
    });
  }

  // =========================================================================
  // 8. SCREEN 3: QUIZ TAKING ENGINE
  // =========================================================================
  const backFromQuizBtn = document.getElementById('back-from-quiz-btn');
  const activeQuizTitle = document.getElementById('active-quiz-title');
  const activeQuizDesc = document.getElementById('active-quiz-desc');
  const toggleNavBtn = document.getElementById('toggle-nav-btn');
  const redoWrongBtn = document.getElementById('redo-wrong-btn');
  const resetBtn = document.getElementById('reset-btn');
  const quizShuffleQuestions = document.getElementById('quiz-shuffle-questions');
  const quizShuffleOptions = document.getElementById('quiz-shuffle-options');

  const statCompletedEl = document.getElementById('stat-completed');
  const statCorrectEl = document.getElementById('stat-correct');
  const statWrongEl = document.getElementById('stat-wrong');
  const statAccuracyEl = document.getElementById('stat-accuracy');

  const navigatorDrawer = document.getElementById('navigator-drawer');
  const navBackdrop = document.getElementById('nav-backdrop');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const navGridEl = document.getElementById('navigator-grid');
  const navTotalCount = document.getElementById('nav-total-count');
  const questionsListContainer = document.getElementById('questions-list-container');

  let currentQuizData = null;
  let userAnswers = [];
  let quizSettings = {
    shuffleQuestions: false,
    shuffleOptions: false
  };

  function openDrawer() {
    if (navigatorDrawer) navigatorDrawer.classList.remove('drawer-collapsed');
    if (navigatorDrawer) navigatorDrawer.classList.add('open');
    if (navBackdrop) navBackdrop.classList.remove('hidden');
  }

  function closeDrawer() {
    if (navigatorDrawer) navigatorDrawer.classList.remove('open');
    if (navigatorDrawer) navigatorDrawer.classList.add('drawer-collapsed');
    if (navBackdrop) navBackdrop.classList.add('hidden');
  }

  if (toggleNavBtn) toggleNavBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (navBackdrop) navBackdrop.addEventListener('click', closeDrawer);

  if (backFromQuizBtn) {
    backFromQuizBtn.addEventListener('click', () => {
      if (currentSubject) {
        showScreen('subject-detail');
      } else {
        showScreen('subjects');
      }
    });
  }

  if (quizShuffleQuestions) {
    quizShuffleQuestions.addEventListener('change', (e) => {
      quizSettings.shuffleQuestions = e.target.checked;
    });
  }

  if (quizShuffleOptions) {
    quizShuffleOptions.addEventListener('change', (e) => {
      quizSettings.shuffleOptions = e.target.checked;
    });
  }

  function shuffleArray(arr) {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  async function startQuizFromSubject(quiz) {
    const rawQuestions = await loadQuestionsForQuiz(quiz.id);
    if (!rawQuestions || rawQuestions.length === 0) {
      alert("Bài quiz này chưa có câu hỏi nào!");
      return;
    }

    let questionsToUse = rawQuestions.map((q, idx) => ({
      ...q,
      originalIndex: idx,
      options: [...q.options],
      correctIndex: (q.correct_option || 1) - 1
    }));

    if (quizSettings.shuffleQuestions) {
      questionsToUse = shuffleArray(questionsToUse);
    }

    currentQuizData = {
      ...quiz,
      questions: questionsToUse
    };

    userAnswers = Array.from({ length: questionsToUse.length }, () => ({
      answered: false,
      selectedIndex: null,
      isCorrect: false
    }));

    if (activeQuizTitle) activeQuizTitle.textContent = quiz.title;
    if (activeQuizDesc) activeQuizDesc.textContent = currentSubject ? currentSubject.name : 'Bài ôn tập';
    if (navTotalCount) navTotalCount.textContent = `${questionsToUse.length} câu`;

    if (redoWrongBtn) redoWrongBtn.classList.add('hidden');

    showScreen('quiz');
    renderQuestionList();
    renderNavigatorGrid();
    updateStats();
  }

  function renderQuestionList() {
    if (!questionsListContainer || !currentQuizData) return;
    questionsListContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];

    currentQuizData.questions.forEach((q, qIdx) => {
      const card = document.createElement('div');
      card.className = 'quiz-select-card question-card';
      card.id = `q-card-${qIdx}`;

      const ansState = userAnswers[qIdx];

      const optionsHtml = q.options.map((optText, oIdx) => {
        let optClass = 'option-item';
        if (ansState.answered) {
          optClass += ' disabled';
          if (oIdx === q.correctIndex) {
            optClass += ' correct-answer';
          } else if (ansState.selectedIndex === oIdx) {
            optClass += ' wrong-answer';
          }
        }

        const isChecked = ansState.selectedIndex === oIdx;

        return `
          <div class="${optClass}" data-qidx="${qIdx}" data-oidx="${oIdx}">
            <input type="radio" name="opt_q_${qIdx}" ${isChecked ? 'checked' : ''} ${ansState.answered ? 'disabled' : ''}>
            <span class="option-text"><strong>${letters[oIdx] || (oIdx + 1)}.</strong> ${optText}</span>
            <div class="option-status-icon">${ansState.answered ? (oIdx === q.correctIndex ? '✅' : (isChecked ? '❌' : '')) : ''}</div>
          </div>
        `;
      }).join('');

      card.innerHTML = `
        <div class="card-top-info">
          <div class="quiz-file-badge">Câu ${qIdx + 1} / ${currentQuizData.questions.length}</div>
          <h3 class="quiz-card-title">${q.question_text}</h3>
        </div>
        <div class="options-list" style="display: flex; flex-direction: column; gap: 8px; margin-top: 12px;">
          ${optionsHtml}
        </div>
        ${ansState.answered && q.explanation ? `
          <div class="explanation-box" style="margin-top: 14px;">
            <div class="explanation-header">💡 Giải thích đáp án:</div>
            <div class="exp-content">${q.explanation}</div>
          </div>
        ` : ''}
      `;

      // Click option handler
      const optionElements = card.querySelectorAll('.option-item');
      optionElements.forEach(optEl => {
        optEl.addEventListener('click', () => {
          if (userAnswers[qIdx].answered) return;
          const selectedOIdx = parseInt(optEl.dataset.oidx, 10);
          handleAnswerSelect(qIdx, selectedOIdx);
        });
      });

      questionsListContainer.appendChild(card);
    });
  }

  function handleAnswerSelect(qIdx, selectedOIdx) {
    const q = currentQuizData.questions[qIdx];
    const isCorrect = (selectedOIdx === q.correctIndex);

    userAnswers[qIdx] = {
      answered: true,
      selectedIndex: selectedOIdx,
      isCorrect: isCorrect
    };

    renderQuestionList();
    renderNavigatorGrid();
    updateStats();

    // Show redo button if there are wrong answers
    const hasWrong = userAnswers.some(a => a.answered && !a.isCorrect);
    if (redoWrongBtn) {
      redoWrongBtn.classList.toggle('hidden', !hasWrong);
    }
  }

  function renderNavigatorGrid() {
    if (!navGridEl || !currentQuizData) return;
    navGridEl.innerHTML = '';

    currentQuizData.questions.forEach((_, idx) => {
      const btn = document.createElement('button');
      btn.className = 'nav-item';
      btn.textContent = idx + 1;

      const ans = userAnswers[idx];
      if (ans.answered) {
        btn.classList.add(ans.isCorrect ? 'correct' : 'wrong');
      }

      btn.addEventListener('click', () => {
        closeDrawer();
        const card = document.getElementById(`q-card-${idx}`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });

      navGridEl.appendChild(btn);
    });
  }

  function updateStats() {
    const total = currentQuizData ? currentQuizData.questions.length : 0;
    const answered = userAnswers.filter(a => a.answered).length;
    const correct = userAnswers.filter(a => a.answered && a.isCorrect).length;
    const wrong = userAnswers.filter(a => a.answered && !a.isCorrect).length;
    const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;

    if (statCompletedEl) statCompletedEl.textContent = `${answered} / ${total}`;
    if (statCorrectEl) statCorrectEl.textContent = correct;
    if (statWrongEl) statWrongEl.textContent = wrong;
    if (statAccuracyEl) statAccuracyEl.textContent = `${accuracy}%`;
  }

  // Reset quiz
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm("Làm lại từ đầu bài quiz này?")) {
        userAnswers = Array.from({ length: currentQuizData.questions.length }, () => ({
          answered: false,
          selectedIndex: null,
          isCorrect: false
        }));
        if (redoWrongBtn) redoWrongBtn.classList.add('hidden');
        renderQuestionList();
        renderNavigatorGrid();
        updateStats();
      }
    });
  }

  // Redo wrong questions
  if (redoWrongBtn) {
    redoWrongBtn.addEventListener('click', () => {
      userAnswers.forEach((ans, idx) => {
        if (ans.answered && !ans.isCorrect) {
          userAnswers[idx] = {
            answered: false,
            selectedIndex: null,
            isCorrect: false
          };
        }
      });
      redoWrongBtn.classList.add('hidden');
      renderQuestionList();
      renderNavigatorGrid();
      updateStats();
    });
  }

  // =========================================================================
  // 9. CONFIGURATION & SQL SCRIPT MODALS
  // =========================================================================
  const openConfigBtn = document.getElementById('open-config-btn');
  const closeConfigBtn = document.getElementById('close-config-btn');
  const supabaseConfigModal = document.getElementById('supabase-config-modal');
  const saveConfigBtn = document.getElementById('save-config-btn');
  const clearConfigBtn = document.getElementById('clear-config-btn');

  const openSqlGuideBtn = document.getElementById('open-sql-guide-btn');
  const closeSqlModalBtn = document.getElementById('close-sql-modal-btn');
  const closeSqlConfirmBtn = document.getElementById('close-sql-confirm-btn');
  const supabaseSqlModal = document.getElementById('supabase-sql-modal');
  const copySqlCodeBtn = document.getElementById('copy-sql-code-btn');
  const setupSqlCode = document.getElementById('setup-sql-code');

  if (openConfigBtn) {
    openConfigBtn.addEventListener('click', () => {
      if (supabaseConfigModal) supabaseConfigModal.classList.remove('hidden');
      if (configErrorEl) configErrorEl.classList.add('hidden');
    });
  }

  if (closeConfigBtn) {
    closeConfigBtn.addEventListener('click', () => {
      if (supabaseConfigModal) supabaseConfigModal.classList.add('hidden');
    });
  }

  if (saveConfigBtn) {
    saveConfigBtn.addEventListener('click', () => {
      const url = supabaseUrlEl.value.trim();
      const key = supabaseKeyEl.value.trim();
      const serviceKey = supabaseServiceKeyEl ? supabaseServiceKeyEl.value.trim() : '';

      if (!url || !key) {
        if (configErrorEl) {
          configErrorEl.textContent = 'Vui lòng điền đầy đủ Supabase URL và Anon Key!';
          configErrorEl.classList.remove('hidden');
        }
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
      alert('Đã lưu cấu hình kết nối! Trang web sẽ tải lại để áp dụng kết nối mới.');
      window.location.reload();
    });
  }

  if (clearConfigBtn) {
    clearConfigBtn.addEventListener('click', () => {
      localStorage.removeItem('supabase_url');
      localStorage.removeItem('supabase_key');
      localStorage.removeItem('supabase_service_key');
      supabaseConfigModal.classList.add('hidden');
      alert('Đã chuyển về chế độ lưu trữ cục bộ (Offline LocalStorage).');
      window.location.reload();
    });
  }

  // SQL Script modal controls
  if (openSqlGuideBtn) {
    openSqlGuideBtn.addEventListener('click', () => {
      if (supabaseSqlModal) supabaseSqlModal.classList.remove('hidden');
    });
  }

  if (closeSqlModalBtn) {
    closeSqlModalBtn.addEventListener('click', () => {
      if (supabaseSqlModal) supabaseSqlModal.classList.add('hidden');
    });
  }

  if (closeSqlConfirmBtn) {
    closeSqlConfirmBtn.addEventListener('click', () => {
      if (supabaseSqlModal) supabaseSqlModal.classList.add('hidden');
    });
  }

  if (copySqlCodeBtn && setupSqlCode) {
    copySqlCodeBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(setupSqlCode.value).then(() => {
        copySqlCodeBtn.textContent = '✓ Đã sao chép!';
        setTimeout(() => {
          copySqlCodeBtn.textContent = '📋 Sao chép SQL';
        }, 2500);
      }).catch(() => {
        setupSqlCode.select();
        document.execCommand('copy');
        copySqlCodeBtn.textContent = '✓ Đã sao chép!';
      });
    });
  }

  // =========================================================================
  // 10. APP INITIALIZATION
  // =========================================================================
  async function startApp() {
    await initSupabase();
    showScreen('subjects');
    await renderSubjectsScreen();
  }

  startApp();
});
