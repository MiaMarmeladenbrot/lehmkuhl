// Requires data.js to be loaded first (getCategoryGroups, getTerms, getAllTerms, shuffle, getShipDiagramQuiz)

// App State
const state = {
  currentScreen: "home",
  currentCards: [],
  currentIndex: 0,
  isFlipped: false,
};

// DOM Elements
const screens = {
  home: document.getElementById("home-screen"),
  card: document.getElementById("card-screen"),
  shipQuiz: document.getElementById("ship-quiz-screen"),
};

const elements = {
  categoryGrid: document.getElementById("category-grid"),
  cardBackBtn: document.getElementById("card-back-btn"),
  homeBtn: document.getElementById("home-btn"),
  flashcard: document.getElementById("flashcard"),
  cardTerm: document.getElementById("card-term"),
  cardDefinition: document.getElementById("card-definition"),
  cardCategoryLabel: document.getElementById("card-category-label"),
  cardTermCount: document.getElementById("card-term-count"),
  cardPosition: document.getElementById("card-position"),
  progressFill: document.getElementById("progress-fill"),
  prevBtn: document.getElementById("prev-btn"),
  nextBtn: document.getElementById("next-btn"),
  // Ship quiz elements
  quizBackBtn: document.getElementById("quiz-back-btn"),
  quizHomeBtn: document.getElementById("quiz-home-btn"),
  quizInputs: document.getElementById("quiz-inputs"),
  checkAnswersBtn: document.getElementById("check-answers-btn"),
  resetQuizBtn: document.getElementById("reset-quiz-btn"),
  toggleInputsBtn: document.getElementById("toggle-inputs-btn"),
  quizScore: document.getElementById("quiz-score"),
  quizTermCount: document.getElementById("quiz-term-count"),
};

// Category icons (SVG paths)
const categoryIcons = {
  "Ship Diagram Quiz": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20l2-4h16l2 4"/><path d="M4 16l2-4h12l2 4"/><path d="M12 4v8"/><path d="M8 8h8"/><circle cx="18" cy="6" r="2"/><path d="M18 8v4"/></svg>`,
  "Random 20": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><rect x="14" y="14" width="8" height="8" rx="1"/><circle cx="6" cy="6" r="1" fill="currentColor"/><circle cx="18" cy="6" r="1" fill="currentColor"/><circle cx="16" cy="4" r="1" fill="currentColor"/><circle cx="20" cy="8" r="1" fill="currentColor"/><circle cx="4" cy="16" r="1" fill="currentColor"/><circle cx="8" cy="20" r="1" fill="currentColor"/><circle cx="18" cy="18" r="1" fill="currentColor"/></svg>`,
  "The Ship": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 17h18l-2 4H5z"/><path d="M7 17V8"/><path d="M4.5 10.5h5"/><path d="M12 17V4"/><path d="M9 6.5h6"/><path d="M17 17V9"/><path d="M14.5 11.5h5"/></svg>`,
  Sails: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="22"/><line x1="6" y1="5" x2="18" y2="5"/><path d="M8 5v4c1.5 1 6.5 1 8 0V5"/><line x1="4" y1="12" x2="20" y2="12"/><path d="M6 12v5c2 1.2 10 1.2 12 0V12"/></svg>`,
  Rigging: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3 5 21"/><path d="M15 3l4 18"/><line x1="7.9" y1="8" x2="16.1" y2="8"/><line x1="6.8" y1="13" x2="17.2" y2="13"/><line x1="5.7" y1="18" x2="18.3" y2="18"/></svg>`,
  "Ship Structure": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9h18v3c0 3.3-2.7 6-6 6H9c-3.3 0-6-2.7-6-6V9z"/><line x1="9" y1="9" x2="9" y2="17.5"/><line x1="15" y1="9" x2="15" y2="17.5"/></svg>`,
  "Navigation & Direction": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  Sailing: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 20c2-1 4-3 6-3s4 2 6 2 4-2 6-3"/><path d="M12 4v12"/><path d="M12 4l6 6-6 6"/></svg>`,
  "Line Handling": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3C6 7 18 7 18 12s-12 5-12 9"/><path d="M18 3C18 7 6 7 6 12s12 5 12 9"/></svg>`,
  "Sail Handling": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="5" x2="21" y2="5"/><path d="M6 5v9c2.5 1.5 9.5 1.5 12 0V5"/><line x1="12" y1="2.5" x2="12" y2="5"/></svg>`,
  Maneuvering: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/></svg>`,
  Watches: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
};

// Initialize
function init() {
  // Event listeners
  elements.cardBackBtn.addEventListener("click", () => showScreen("home"));
  elements.homeBtn.addEventListener("click", () => showScreen("home"));
  elements.flashcard.addEventListener("click", flipCard);
  elements.prevBtn.addEventListener("click", prevCard);
  elements.nextBtn.addEventListener("click", () => {
    // On the last card the button acts as a "Done" button → back home
    if (state.currentIndex === state.currentCards.length - 1) {
      showScreen("home");
    } else {
      nextCard();
    }
  });

  // Ship quiz event listeners
  elements.quizBackBtn.addEventListener("click", () => showScreen("home"));
  elements.quizHomeBtn.addEventListener("click", () => showScreen("home"));
  elements.checkAnswersBtn.addEventListener("click", checkQuizAnswers);
  elements.resetQuizBtn.addEventListener("click", resetQuiz);
  elements.toggleInputsBtn.addEventListener("click", toggleQuizInputs);

  // Keyboard navigation
  document.addEventListener("keydown", handleKeyboard);

  // Swipe detection
  setupSwipeDetection();

  // Populate categories
  populateCategories();
}

// Screen Navigation
function showScreen(screenName) {
  Object.keys(screens).forEach((key) => {
    screens[key].classList.remove("active");
  });
  screens[screenName].classList.add("active");
  state.currentScreen = screenName;
}

// Populate Category Grid
function populateCategories() {
  const groups = getCategoryGroups();
  const allTerms = getAllTerms();
  elements.categoryGrid.innerHTML = "";

  // Add Ship Diagram Quiz card first
  const quizData = getShipDiagramQuiz();
  const shipQuizCard = document.createElement("div");
  shipQuizCard.className = "category-card category-card-featured";
  shipQuizCard.addEventListener("click", startShipQuiz);
  shipQuizCard.innerHTML = `
    <div class="category-card-header">
      <div class="category-icon category-icon-featured">${categoryIcons["Ship Diagram Quiz"]}</div>
      <h3 class="category-card-title">Ship Diagram Quiz</h3>
    </div>
    <span class="category-term-count">${quizData.labels.length} labels</span>
    <p class="category-description">Label the parts of the ship on an interactive diagram.</p>
  `;
  elements.categoryGrid.appendChild(shipQuizCard);

  // Add regular category cards
  groups.forEach((group) => {
    const totalTerms = group.categories.reduce(
      (sum, cat) => sum + getTerms(cat).length,
      0,
    );

    const card = document.createElement("div");
    card.className = "category-card";

    const icon = categoryIcons[group.name] || categoryIcons["The Ship"];
    const visibleCategories = group.categories.slice(0, 3);
    const moreCount = group.categories.length - 3;

    // Build subcategory list HTML
    const subcategoryHTML = group.categories
      .map((cat) => {
        const termCount = getTerms(cat).length;
        return `<div class="subcategory-item" data-category="${cat}">
        <span class="subcategory-name">${cat}</span>
        <span class="subcategory-count">${termCount}</span>
      </div>`;
      })
      .join("");

    card.innerHTML = `
      <svg class="expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 9l6 6 6-6"/>
      </svg>
      <div class="category-card-header">
        <div class="category-icon">${icon}</div>
        <h3 class="category-card-title">${group.name}</h3>
      </div>
      <span class="category-term-count">${totalTerms} terms</span>
      <ul class="category-list">
        ${visibleCategories.map((cat) => `<li>${cat}</li>`).join("")}
      </ul>
      ${moreCount > 0 ? `<span class="category-more">+ ${moreCount} more</span>` : ""}
      <div class="subcategory-list">
        ${subcategoryHTML}
        <button class="study-all-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          Study All ${totalTerms}
        </button>
      </div>
    `;

    // Toggle accordion on card click (but not on subcategory/button clicks)
    card.addEventListener("click", (e) => {
      // Don't toggle if clicking subcategory or study all button
      if (
        e.target.closest(".subcategory-item") ||
        e.target.closest(".study-all-btn")
      ) {
        return;
      }

      const wasExpanded = card.classList.contains("expanded");

      // Collapse all other cards first
      document.querySelectorAll(".category-card.expanded").forEach((c) => {
        c.classList.remove("expanded");
      });

      // Toggle this card (open if it wasn't already open)
      if (!wasExpanded) {
        card.classList.add("expanded");
      }
    });

    // Handle subcategory clicks
    card.querySelectorAll(".subcategory-item").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const categoryName = item.dataset.category;
        startCategoryMode(categoryName);
      });
    });

    // Handle Study All button click
    card.querySelector(".study-all-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      startGroupMode(group);
    });

    elements.categoryGrid.appendChild(card);
  });

  // Add Random 20 card at the end
  const randomCard = document.createElement("div");
  randomCard.className = "category-card category-card-featured";
  randomCard.addEventListener("click", startRandomMode);
  randomCard.innerHTML = `
    <div class="category-card-header">
      <div class="category-icon category-icon-featured">${categoryIcons["Random 20"]}</div>
      <h3 class="category-card-title">Random 20</h3>
    </div>
    <span class="category-term-count">${allTerms.length} total</span>
    <p class="category-description">Test yourself with 20 randomly selected terms from all categories.</p>
  `;
  elements.categoryGrid.appendChild(randomCard);
}

// Learning Modes
function startCategoryMode(categoryName) {
  state.currentCards = getTerms(categoryName).map((item) => ({
    ...item,
    category: categoryName,
  }));
  state.currentIndex = 0;
  state.isFlipped = false;
  elements.cardTermCount.textContent = `${state.currentCards.length} terms to learn`;
  showCardScreen();
}

function startGroupMode(group) {
  state.currentCards = [];
  group.categories.forEach((category) => {
    const terms = getTerms(category).map((item) => ({
      ...item,
      category,
    }));
    state.currentCards.push(...terms);
  });
  state.currentIndex = 0;
  state.isFlipped = false;
  elements.cardTermCount.textContent = `${state.currentCards.length} terms to learn`;
  showCardScreen();
}

function startRandomMode() {
  state.currentCards = shuffle(getAllTerms()).slice(0, 20);
  state.currentIndex = 0;
  state.isFlipped = false;
  elements.cardTermCount.textContent = "20 random terms";
  showCardScreen();
}

// Card Screen
function showCardScreen() {
  showScreen("card");
  updateCard();
}

function updateCard() {
  const card = state.currentCards[state.currentIndex];
  elements.cardTerm.textContent = card.term;
  elements.cardDefinition.textContent = card.definition;
  elements.cardCategoryLabel.textContent = card.category;
  elements.cardPosition.textContent = `Card ${state.currentIndex + 1} of ${state.currentCards.length}`;

  // Update progress bar
  const progress = ((state.currentIndex + 1) / state.currentCards.length) * 100;
  elements.progressFill.style.width = `${progress}%`;

  // Reset flip state
  state.isFlipped = false;
  elements.flashcard.classList.remove("flipped");

  // Update nav buttons
  elements.prevBtn.disabled = state.currentIndex === 0;

  // On the last card, turn the "Next" button into a "Done" button
  // that returns to the home screen instead of just disabling it.
  const isLastCard = state.currentIndex === state.currentCards.length - 1;
  elements.nextBtn.disabled = false;
  elements.nextBtn.textContent = isLastCard ? "Fertig ✓" : "Next";
  elements.nextBtn.classList.toggle("nav-btn-finish", isLastCard);
}

function flipCard() {
  state.isFlipped = !state.isFlipped;
  elements.flashcard.classList.toggle("flipped", state.isFlipped);
}

function nextCard() {
  if (state.currentIndex < state.currentCards.length - 1) {
    animateCardTransition("left", () => {
      state.currentIndex++;
      updateCard();
    });
  }
}

function prevCard() {
  if (state.currentIndex > 0) {
    animateCardTransition("right", () => {
      state.currentIndex--;
      updateCard();
    });
  }
}

function animateCardTransition(direction, callback) {
  const exitClass = direction === "left" ? "swipe-left" : "swipe-right";
  const enterClass = direction === "left" ? "enter-left" : "enter-right";

  elements.flashcard.classList.add(exitClass);

  setTimeout(() => {
    elements.flashcard.classList.remove(exitClass, "flipped");
    callback();
    elements.flashcard.classList.add(enterClass);

    setTimeout(() => {
      elements.flashcard.classList.remove(enterClass);
    }, 300);
  }, 250);
}

// Keyboard Navigation
function handleKeyboard(e) {
  // Handle Escape to go home from any screen
  if (e.key === "Escape" && state.currentScreen !== "home") {
    showScreen("home");
    return;
  }

  if (state.currentScreen !== "card") return;

  switch (e.key) {
    case "ArrowLeft":
    case "ArrowUp":
      prevCard();
      break;
    case "ArrowRight":
    case "ArrowDown":
      nextCard();
      break;
    case " ":
    case "Enter":
      e.preventDefault();
      flipCard();
      break;
  }
}

// Swipe Detection
function setupSwipeDetection() {
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  const minSwipeDistance = 50;

  elements.flashcard.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    },
    { passive: true },
  );

  elements.flashcard.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    },
    { passive: true },
  );

  function handleSwipe() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
          prevCard();
        } else {
          nextCard();
        }
      }
    }
  }
}

// Ship Diagram Quiz Functions
function startShipQuiz() {
  initShipQuiz();
  showScreen("shipQuiz");
}

function initShipQuiz() {
  const quizData = getShipDiagramQuiz();
  elements.quizInputs.innerHTML = "";
  elements.quizInputs.classList.remove("inputs-hidden");
  elements.toggleInputsBtn.textContent = "Show Answers";
  elements.quizScore.textContent = "";
  elements.quizTermCount.textContent = `${quizData.labels.length} labels to identify`;

  quizData.labels.forEach((label) => {
    const input = document.createElement("input");
    input.type = "text";
    input.className = "quiz-input";
    input.id = `quiz-${label.id}`;
    input.placeholder = "?";
    input.style.left = `${label.x}%`;
    input.style.top = `${label.y}%`;
    input.dataset.answer = label.answer;
    input.autocomplete = "off";
    input.spellcheck = false;

    input.addEventListener("input", () => {
      // Remove correct/incorrect classes when user types
      input.classList.remove("correct", "incorrect");
    });

    elements.quizInputs.appendChild(input);
  });
}

function normalizeAnswer(str) {
  return str.toLowerCase().trim().replace(/\s+/g, " ");
}

// Extract accepted answers from a string like "Main course (mainsail)"
// Returns the base name, any parenthetical alternative, and the full form without parens
function getAcceptedAnswers(raw) {
  const normalized = normalizeAnswer(raw);
  const match = normalized.match(/^(.+?)\s*\((.+?)\)$/);
  if (match) {
    return [
      match[1].trim(),
      match[2].trim(),
      normalized.replace(/[()]/g, "").replace(/\s+/g, " "),
    ];
  }
  return [normalized];
}

function checkQuizAnswers() {
  const inputs = elements.quizInputs.querySelectorAll(".quiz-input");
  let correct = 0;
  let total = inputs.length;

  inputs.forEach((input) => {
    const userAnswer = normalizeAnswer(input.value);
    const accepted = getAcceptedAnswers(input.dataset.answer);
    const isCorrect = accepted.includes(userAnswer);

    input.classList.remove("correct", "incorrect");

    if (userAnswer === "") {
      input.classList.add("incorrect");
    } else if (isCorrect) {
      input.classList.add("correct");
      correct++;
    } else {
      input.classList.add("incorrect");
    }
  });

  const percentage = Math.round((correct / total) * 100);
  elements.quizScore.textContent = `${correct}/${total} correct (${percentage}%)`;
}

function resetQuiz() {
  const inputs = elements.quizInputs.querySelectorAll(".quiz-input");
  inputs.forEach((input) => {
    input.value = "";
    input.classList.remove("correct", "incorrect");
  });
  elements.quizScore.textContent = "";

  // Focus first input
  if (inputs.length > 0) {
    inputs[0].focus();
  }
}

// Toggle visibility of all input fields to view the diagram on its own
function toggleQuizInputs() {
  const hidden = elements.quizInputs.classList.toggle("inputs-hidden");
  // Hiding the input fields reveals the labels printed on the diagram (the answers)
  elements.toggleInputsBtn.textContent = hidden ? "Hide Answers" : "Show Answers";
}

// Start the app
init();
