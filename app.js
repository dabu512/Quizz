document.addEventListener('DOMContentLoaded', () => {
  if (typeof allQuizSets === 'undefined' || !Array.isArray(allQuizSets)) {
    alert('Không tìm thấy dữ liệu bài thi!');
    return;
  }

  // Application State
  let currentQuiz = null;
  let currentIndex = 0;
  let userAnswers = [];

  // DOM Screens
  const menuScreen = document.getElementById('menu-screen');
  const quizScreen = document.getElementById('quiz-screen');

  // Menu Elements
  const quizCardsContainer = document.getElementById('quiz-cards-container');
  const quizCountBadge = document.getElementById('quiz-count-badge');

  // Quiz Elements
  const backToMenuBtn = document.getElementById('back-to-menu-btn');
  const activeQuizTitle = document.getElementById('active-quiz-title');
  const activeQuizDesc = document.getElementById('active-quiz-desc');
  const resetBtn = document.getElementById('reset-btn');
  const redoWrongBtn = document.getElementById('redo-wrong-btn');

  const navGridEl = document.getElementById('navigator-grid');
  const navTotalCount = document.getElementById('nav-total-count');
  const qNumberBadgeEl = document.getElementById('q-number-badge');
  const qTypeBadgeEl = document.getElementById('q-type-badge');
  const qTitleEl = document.getElementById('q-title');
  const qOptionsEl = document.getElementById('q-options');
  const actionBarEl = document.getElementById('action-bar');
  const submitCheckBtn = document.getElementById('submit-check-btn');
  const explanationBoxEl = document.getElementById('explanation-box');
  const explanationTextEl = document.getElementById('explanation-text');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const footerCounterEl = document.getElementById('footer-counter');

  // Stats Elements
  const statCompletedEl = document.getElementById('stat-completed');
  const statCorrectEl = document.getElementById('stat-correct');
  const statWrongEl = document.getElementById('stat-wrong');
  const statAccuracyEl = document.getElementById('stat-accuracy');

  // 1. Initialize Main Menu
  renderMenu();

  function renderMenu() {
    quizCountBadge.textContent = `${allQuizSets.length} Bài thi`;
    quizCardsContainer.innerHTML = '';

    allQuizSets.forEach(quiz => {
      const card = document.createElement('div');
      card.className = 'quiz-select-card';
      card.innerHTML = `
        <div class="card-top-info">
          <span class="quiz-file-badge">📄 ${quiz.filename}</span>
          <h3 class="quiz-card-title">${quiz.title}</h3>
          <p class="quiz-card-desc">${quiz.description}</p>
        </div>
        <div class="card-bottom-info">
          <span class="quiz-meta-stat">📝 ${quiz.questionsCount} câu hỏi</span>
          <button class="btn btn-primary start-quiz-btn" data-id="${quiz.id}">
            Bắt đầu làm bài →
          </button>
        </div>
      `;

      card.querySelector('.start-quiz-btn').addEventListener('click', () => {
        startQuiz(quiz);
      });

      quizCardsContainer.appendChild(card);
    });
  }

  // 2. Start Quiz Mode
  function startQuiz(quiz, loadedAnswers = null, loadedIndex = 0) {
    currentQuiz = quiz;
    currentIndex = loadedIndex;
    
    // Reset or load user answers state for this quiz
    if (loadedAnswers) {
      userAnswers = loadedAnswers;
    } else {
      userAnswers = Array.from({ length: quiz.questions.length }, () => ({
        answered: false,
        selected: [],
        isCorrect: false
      }));
    }

    activeQuizTitle.textContent = quiz.title;
    activeQuizDesc.textContent = quiz.description;
    navTotalCount.textContent = `${quiz.questions.length} câu`;

    // Switch Screens
    menuScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    initNavigatorGrid();
    loadQuestion(currentIndex);
    updateStats();
    saveStateToLocalStorage();
  }

  // 3. Back to Menu
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

  // 4. Navigator Grid Init
  function initNavigatorGrid() {
    navGridEl.innerHTML = '';
    const total = currentQuiz.questions.length;

    for (let i = 0; i < total; i++) {
      const btn = document.createElement('button');
      btn.className = 'nav-btn';
      btn.textContent = i + 1;
      btn.dataset.index = i;
      btn.addEventListener('click', () => {
        currentIndex = i;
        loadQuestion(currentIndex);
        saveStateToLocalStorage();
      });
      navGridEl.appendChild(btn);
    }
  }

  function updateNavigatorState() {
    const buttons = navGridEl.querySelectorAll('.nav-btn');
    buttons.forEach((btn, idx) => {
      btn.classList.remove('current', 'correct', 'wrong');
      
      if (idx === currentIndex) {
        btn.classList.add('current');
      }

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

  // 5. Load Question
  function loadQuestion(index) {
    const q = currentQuiz.questions[index];
    const state = userAnswers[index];
    const total = currentQuiz.questions.length;

    qNumberBadgeEl.textContent = `Câu ${q.id}`;
    qTitleEl.textContent = q.title;
    footerCounterEl.textContent = `${index + 1} / ${total}`;

    if (q.isMultiple) {
      qTypeBadgeEl.textContent = 'Chọn nhiều đáp án';
      qTypeBadgeEl.classList.remove('single');
    } else {
      qTypeBadgeEl.textContent = 'Chọn 1 đáp án';
      qTypeBadgeEl.classList.add('single');
    }

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === total - 1;

    renderOptions(q, state);

    if (q.isMultiple && !state.answered) {
      actionBarEl.classList.remove('hidden');
    } else {
      actionBarEl.classList.add('hidden');
    }

    if (state.answered) {
      explanationTextEl.textContent = q.explanation;
      explanationBoxEl.classList.remove('hidden');
    } else {
      explanationBoxEl.classList.add('hidden');
    }

    updateNavigatorState();
  }

  // 6. Render Options
  function renderOptions(q, state) {
    qOptionsEl.innerHTML = '';

    q.options.forEach((optText, optIdx) => {
      const optionItem = document.createElement('div');
      optionItem.className = 'option-item';
      
      const inputType = q.isMultiple ? 'checkbox' : 'radio';
      const input = document.createElement('input');
      input.type = inputType;
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
            input.checked = q.isMultiple ? !input.checked : true;
          }
          handleOptionSelection(q, optIdx);
        });
      }

      const label = document.createElement('label');
      label.className = 'option-text';
      label.textContent = optText;

      optionItem.prepend(input);
      optionItem.insertBefore(label, optionItem.querySelector('.option-status-icon') || null);

      qOptionsEl.appendChild(optionItem);
    });
  }

  // 7. Handle Selection
  function handleOptionSelection(q, optIdx) {
    const state = userAnswers[currentIndex];
    if (state.answered) return;

    if (q.isMultiple) {
      const existsIdx = state.selected.indexOf(optIdx);
      if (existsIdx > -1) {
        state.selected.splice(existsIdx, 1);
      } else {
        state.selected.push(optIdx);
      }
      
      const optionItems = qOptionsEl.querySelectorAll('.option-item');
      optionItems.forEach((item, idx) => {
        if (state.selected.includes(idx)) {
          item.classList.add('selected');
        } else {
          item.classList.remove('selected');
        }
      });
      saveStateToLocalStorage();
    } else {
      state.selected = [optIdx];
      validateAnswer(q);
    }
  }

  // 8. Submit Check for Multiple Choice
  submitCheckBtn.addEventListener('click', () => {
    const q = currentQuiz.questions[currentIndex];
    const state = userAnswers[currentIndex];

    if (state.selected.length === 0) {
      alert('Vui lòng chọn ít nhất một đáp án trước khi kiểm tra!');
      return;
    }

    validateAnswer(q);
  });

  // 9. Validate Answer
  function validateAnswer(q) {
    const state = userAnswers[currentIndex];
    state.answered = true;

    const targetSet = new Set(q.correct);
    const userSet = new Set(state.selected);

    let isCorrect = targetSet.size === userSet.size;
    if (isCorrect) {
      for (let elem of targetSet) {
        if (!userSet.has(elem)) {
          isCorrect = false;
          break;
        }
      }
    }
    state.isCorrect = isCorrect;

    loadQuestion(currentIndex);
    updateStats();
    saveStateToLocalStorage();
  }

  // 10. Update Stats
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

    // Show/hide Redo Wrong Questions button
    if (completed === total && wrong > 0) {
      redoWrongBtn.classList.remove('hidden');
    } else {
      redoWrongBtn.classList.add('hidden');
    }
  }

  // 11. Navigation Buttons
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      loadQuestion(currentIndex);
      saveStateToLocalStorage();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < currentQuiz.questions.length - 1) {
      currentIndex++;
      loadQuestion(currentIndex);
      saveStateToLocalStorage();
    }
  });

  // 12. Reset Event
  resetBtn.addEventListener('click', () => {
    if (confirm('Bạn có chắc chắn muốn làm lại bài trắc nghiệm này từ đầu?')) {
      userAnswers = Array.from({ length: currentQuiz.questions.length }, () => ({
        answered: false,
        selected: [],
        isCorrect: false
      }));
      currentIndex = 0;
      loadQuestion(currentIndex);
      updateStats();
      saveStateToLocalStorage();
    }
  });

  // 13. Redo Wrong Questions Event
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

      // Find the first wrong question index
      currentIndex = wrongIndices[0];
      loadQuestion(currentIndex);
      updateStats();
      saveStateToLocalStorage();
    }
  });

  // Local Storage Helper Functions
  function saveStateToLocalStorage() {
    if (currentQuiz) {
      localStorage.setItem('quiz_currentQuizId', currentQuiz.id);
      localStorage.setItem('quiz_currentIndex', currentIndex);
      localStorage.setItem('quiz_userAnswers', JSON.stringify(userAnswers));
    }
  }

  function clearLocalStorageState() {
    localStorage.removeItem('quiz_currentQuizId');
    localStorage.removeItem('quiz_currentIndex');
    localStorage.removeItem('quiz_userAnswers');
  }

  // Restore quiz from LocalStorage if exists on init
  const savedQuizId = localStorage.getItem('quiz_currentQuizId');
  if (savedQuizId) {
    const quiz = allQuizSets.find(q => q.id === savedQuizId);
    if (quiz) {
      const savedIndexStr = localStorage.getItem('quiz_currentIndex');
      const savedIndex = savedIndexStr ? parseInt(savedIndexStr, 10) : 0;
      
      let savedAnswers = null;
      try {
        const savedAnswersStr = localStorage.getItem('quiz_userAnswers');
        if (savedAnswersStr) {
          savedAnswers = JSON.parse(savedAnswersStr);
          if (!Array.isArray(savedAnswers) || savedAnswers.length !== quiz.questions.length) {
            savedAnswers = null;
          }
        }
      } catch (e) {
        console.error("Error parsing saved answers:", e);
      }
      
      startQuiz(quiz, savedAnswers, savedIndex);
    } else {
      clearLocalStorageState();
    }
  }
});
