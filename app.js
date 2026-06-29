document.addEventListener('DOMContentLoaded', () => {
  // Check if quizQuestions data is loaded
  if (typeof quizQuestions === 'undefined' || !Array.isArray(quizQuestions)) {
    alert('Không tìm thấy dữ liệu câu hỏi!');
    return;
  }

  const TOTAL_QUESTIONS = quizQuestions.length;
  let currentIndex = 0;

  // Track state for all questions
  // userAnswers[i] = { answered: boolean, selected: number[], isCorrect: boolean }
  let userAnswers = Array.from({ length: TOTAL_QUESTIONS }, () => ({
    answered: false,
    selected: [],
    isCorrect: false
  }));

  // DOM Elements
  const navGridEl = document.getElementById('navigator-grid');
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
  const resetBtn = document.getElementById('reset-btn');

  // Stats Elements
  const statCompletedEl = document.getElementById('stat-completed');
  const statCorrectEl = document.getElementById('stat-correct');
  const statWrongEl = document.getElementById('stat-wrong');
  const statAccuracyEl = document.getElementById('stat-accuracy');

  // Initialize App
  initNavigatorGrid();
  loadQuestion(currentIndex);
  updateStats();

  // 1. Initialize 50 Question Navigation Buttons
  function initNavigatorGrid() {
    navGridEl.innerHTML = '';
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
      const btn = document.createElement('button');
      btn.className = 'nav-btn';
      btn.textContent = i + 1;
      btn.dataset.index = i;
      btn.addEventListener('click', () => {
        currentIndex = i;
        loadQuestion(currentIndex);
      });
      navGridEl.appendChild(btn);
    }
  }

  // Update Navigator Buttons Visual State
  function updateNavigatorState() {
    const buttons = navGridEl.querySelectorAll('.nav-btn');
    buttons.forEach((btn, idx) => {
      btn.classList.remove('current', 'correct', 'wrong');
      
      if (idx === currentIndex) {
        btn.classList.add('current');
      }

      const state = userAnswers[idx];
      if (state.answered) {
        if (state.isCorrect) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('wrong');
        }
      }
    });
  }

  // 2. Load Question View
  function loadQuestion(index) {
    const q = quizQuestions[index];
    const state = userAnswers[index];

    // Update Badges & Titles
    qNumberBadgeEl.textContent = `Câu ${q.id}`;
    qTitleEl.textContent = q.title;
    footerCounterEl.textContent = `${q.id} / ${TOTAL_QUESTIONS}`;

    if (q.isMultiple) {
      qTypeBadgeEl.textContent = 'Chọn nhiều đáp án';
      qTypeBadgeEl.classList.remove('single');
    } else {
      qTypeBadgeEl.textContent = 'Chọn 1 đáp án';
      qTypeBadgeEl.classList.add('single');
    }

    // Prev/Next buttons state
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === TOTAL_QUESTIONS - 1;

    // Render Options
    renderOptions(q, state);

    // Render Action Bar & Explanation
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

  // 3. Render Options List
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

      // If question is already answered, show correct/wrong feedback & disable inputs
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

        // Add status icon
        const statusIcon = document.createElement('span');
        statusIcon.className = 'option-status-icon';
        if (isTargetCorrect) {
          statusIcon.textContent = '✅';
        } else if (isUserSelected && !isTargetCorrect) {
          statusIcon.textContent = '❌';
        }
        optionItem.appendChild(statusIcon);
      } else {
        // Handle Option Click when not answered yet
        optionItem.addEventListener('click', (e) => {
          if (e.target !== input) {
            input.checked = q.isMultiple ? !input.checked : true;
          }
          handleOptionSelection(q, optIdx);
        });
      }

      const label = document.createElement('label');
      label.className = 'option-text';
      label.htmlFor = `opt_${q.id}_${optIdx}`;
      label.textContent = optText;

      optionItem.prepend(input);
      optionItem.insertBefore(label, optionItem.querySelector('.option-status-icon') || null);

      qOptionsEl.appendChild(optionItem);
    });
  }

  // 4. Handle Selection Logic
  function handleOptionSelection(q, optIdx) {
    const state = userAnswers[currentIndex];
    if (state.answered) return;

    if (q.isMultiple) {
      // Toggle selection in state
      const existsIdx = state.selected.indexOf(optIdx);
      if (existsIdx > -1) {
        state.selected.splice(existsIdx, 1);
      } else {
        state.selected.push(optIdx);
      }
      
      // Update UI selection classes
      const optionItems = qOptionsEl.querySelectorAll('.option-item');
      optionItems.forEach((item, idx) => {
        if (state.selected.includes(idx)) {
          item.classList.add('selected');
        } else {
          item.classList.remove('selected');
        }
      });
    } else {
      // Single choice -> set selected and validate immediately
      state.selected = [optIdx];
      validateAnswer(q);
    }
  }

  // 5. Submit Multiple Choice Answer
  submitCheckBtn.addEventListener('click', () => {
    const q = quizQuestions[currentIndex];
    const state = userAnswers[currentIndex];

    if (state.selected.length === 0) {
      alert('Vui lòng chọn ít nhất một đáp án trước khi kiểm tra!');
      return;
    }

    validateAnswer(q);
  });

  // 6. Validate Answer Correctness
  function validateAnswer(q) {
    const state = userAnswers[currentIndex];
    state.answered = true;

    // Check if user selected exact match of correct options
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

    // Reload active question to show evaluation and explanation
    loadQuestion(currentIndex);
    updateStats();
  }

  // 7. Update Dashboard Statistics
  function updateStats() {
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

    statCompletedEl.textContent = `${completed} / ${TOTAL_QUESTIONS}`;
    statCorrectEl.textContent = correct;
    statWrongEl.textContent = wrong;

    const accuracy = completed > 0 ? Math.round((correct / completed) * 100) : 0;
    statAccuracyEl.textContent = `${accuracy}%`;
  }

  // 8. Navigation Events
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      loadQuestion(currentIndex);
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < TOTAL_QUESTIONS - 1) {
      currentIndex++;
      loadQuestion(currentIndex);
    }
  });

  // 9. Reset Quiz Event
  resetBtn.addEventListener('click', () => {
    if (confirm('Bạn có chắc chắn muốn làm lại bài trắc nghiệm từ đầu? Tất cả kết quả sẽ bị xóa.')) {
      userAnswers = Array.from({ length: TOTAL_QUESTIONS }, () => ({
        answered: false,
        selected: [],
        isCorrect: false
      }));
      currentIndex = 0;
      loadQuestion(currentIndex);
      updateStats();
    }
  });
});
