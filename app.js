// App State
const state = {
  currentScreen: 'home',
  currentCards: [],
  currentIndex: 0,
  isFlipped: false
};

// DOM Elements
const screens = {
  home: document.getElementById('home-screen'),
  card: document.getElementById('card-screen')
};

const elements = {
  categoryGrid: document.getElementById('category-grid'),
  cardBackBtn: document.getElementById('card-back-btn'),
  homeBtn: document.getElementById('home-btn'),
  flashcard: document.getElementById('flashcard'),
  cardTerm: document.getElementById('card-term'),
  cardDefinition: document.getElementById('card-definition'),
  cardCategoryLabel: document.getElementById('card-category-label'),
  cardTermCount: document.getElementById('card-term-count'),
  cardPosition: document.getElementById('card-position'),
  progressFill: document.getElementById('progress-fill'),
  prevBtn: document.getElementById('prev-btn'),
  nextBtn: document.getElementById('next-btn')
};

// Category icons (SVG paths)
const categoryIcons = {
  "Random 20": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><rect x="14" y="14" width="8" height="8" rx="1"/><circle cx="6" cy="6" r="1" fill="currentColor"/><circle cx="18" cy="6" r="1" fill="currentColor"/><circle cx="16" cy="4" r="1" fill="currentColor"/><circle cx="20" cy="8" r="1" fill="currentColor"/><circle cx="4" cy="16" r="1" fill="currentColor"/><circle cx="8" cy="20" r="1" fill="currentColor"/><circle cx="18" cy="18" r="1" fill="currentColor"/></svg>`,
  "The Ship": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20l2-4h16l2 4"/><path d="M4 16l2-4h12l2 4"/><path d="M12 4v8"/><path d="M8 8h8"/></svg>`,
  "Sails": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L4 20h16L12 2z"/><line x1="12" y1="2" x2="12" y2="20"/></svg>`,
  "Rigging": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/><path d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>`,
  "Ship Structure": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="18" height="12" rx="1"/><path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2"/><line x1="12" y1="12" x2="12" y2="16"/></svg>`,
  "Safety": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l2 2"/></svg>`,
  "Navigation & Direction": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  "Sailing": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 20c2-1 4-3 6-3s4 2 6 2 4-2 6-3"/><path d="M12 4v12"/><path d="M12 4l6 6-6 6"/></svg>`,
  "Line Commands": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  "Sail Commands": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
  "Maneuvering": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/></svg>`,
  "Crew & Watches": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`
};

// Initialize
function init() {
  // Event listeners
  elements.cardBackBtn.addEventListener('click', () => showScreen('home'));
  elements.homeBtn.addEventListener('click', () => showScreen('home'));
  elements.flashcard.addEventListener('click', flipCard);
  elements.prevBtn.addEventListener('click', prevCard);
  elements.nextBtn.addEventListener('click', nextCard);

  // Keyboard navigation
  document.addEventListener('keydown', handleKeyboard);

  // Swipe detection
  setupSwipeDetection();

  // Populate categories
  populateCategories();
}

// Screen Navigation
function showScreen(screenName) {
  Object.keys(screens).forEach(key => {
    screens[key].classList.remove('active');
  });
  screens[screenName].classList.add('active');
  state.currentScreen = screenName;
}

// Populate Category Grid
function populateCategories() {
  const groups = getCategoryGroups();
  const allTerms = getAllTerms();
  elements.categoryGrid.innerHTML = '';

  // Create 3 columns for independent card heights
  const columns = [
    document.createElement('div'),
    document.createElement('div'),
    document.createElement('div')
  ];
  columns.forEach(col => {
    col.className = 'category-column';
    elements.categoryGrid.appendChild(col);
  });

  // Add Random 20 card first (to column 0)
  const randomCard = document.createElement('div');
  randomCard.className = 'category-card category-card-featured';
  randomCard.addEventListener('click', startRandomMode);
  randomCard.innerHTML = `
    <div class="category-card-header">
      <div class="category-icon category-icon-featured">${categoryIcons["Random 20"]}</div>
      <h3 class="category-card-title">Random 20</h3>
    </div>
    <span class="category-term-count">${allTerms.length} total</span>
    <p class="category-description">Test yourself with 20 randomly selected terms from all categories.</p>
  `;
  columns[0].appendChild(randomCard);
  let cardIndex = 1; // Start at 1 since Random card is index 0

  groups.forEach(group => {
    const totalTerms = group.categories.reduce((sum, cat) => sum + getTerms(cat).length, 0);

    const card = document.createElement('div');
    card.className = 'category-card';

    const icon = categoryIcons[group.name] || categoryIcons["The Ship"];
    const visibleCategories = group.categories.slice(0, 3);
    const moreCount = group.categories.length - 3;

    // Build subcategory list HTML
    const subcategoryHTML = group.categories.map(cat => {
      const termCount = getTerms(cat).length;
      return `<div class="subcategory-item" data-category="${cat}">
        <span class="subcategory-name">${cat}</span>
        <span class="subcategory-count">${termCount}</span>
      </div>`;
    }).join('');

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
        ${visibleCategories.map(cat => `<li>${cat}</li>`).join('')}
      </ul>
      ${moreCount > 0 ? `<span class="category-more">+ ${moreCount} more</span>` : ''}
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
    card.addEventListener('click', (e) => {
      // Don't toggle if clicking subcategory or study all button
      if (e.target.closest('.subcategory-item') || e.target.closest('.study-all-btn')) {
        return;
      }

      const wasExpanded = card.classList.contains('expanded');

      // Collapse all other cards first
      document.querySelectorAll('.category-card.expanded').forEach(c => {
        c.classList.remove('expanded');
      });

      // Toggle this card (open if it wasn't already open)
      if (!wasExpanded) {
        card.classList.add('expanded');
      }
    });

    // Handle subcategory clicks
    card.querySelectorAll('.subcategory-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const categoryName = item.dataset.category;
        startCategoryMode(categoryName);
      });
    });

    // Handle Study All button click
    card.querySelector('.study-all-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      startGroupMode(group);
    });

    // Distribute cards across columns (round-robin)
    columns[cardIndex % 3].appendChild(card);
    cardIndex++;
  });
}

// Learning Modes
function startCategoryMode(categoryName) {
  state.currentCards = getTerms(categoryName).map(item => ({
    ...item,
    category: categoryName
  }));
  state.currentIndex = 0;
  state.isFlipped = false;
  elements.cardTermCount.textContent = `${state.currentCards.length} terms to learn`;
  showCardScreen();
}

function startGroupMode(group) {
  state.currentCards = [];
  group.categories.forEach(category => {
    const terms = getTerms(category).map(item => ({
      ...item,
      category
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
  elements.cardTermCount.textContent = '20 random terms';
  showCardScreen();
}

// Card Screen
function showCardScreen() {
  showScreen('card');
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
  elements.flashcard.classList.remove('flipped');

  // Update nav buttons
  elements.prevBtn.disabled = state.currentIndex === 0;
  elements.nextBtn.disabled = state.currentIndex === state.currentCards.length - 1;
}

function flipCard() {
  state.isFlipped = !state.isFlipped;
  elements.flashcard.classList.toggle('flipped', state.isFlipped);
}

function nextCard() {
  if (state.currentIndex < state.currentCards.length - 1) {
    animateCardTransition('left', () => {
      state.currentIndex++;
      updateCard();
    });
  }
}

function prevCard() {
  if (state.currentIndex > 0) {
    animateCardTransition('right', () => {
      state.currentIndex--;
      updateCard();
    });
  }
}

function animateCardTransition(direction, callback) {
  const exitClass = direction === 'left' ? 'swipe-left' : 'swipe-right';
  const enterClass = direction === 'left' ? 'enter-left' : 'enter-right';

  elements.flashcard.classList.add(exitClass);

  setTimeout(() => {
    elements.flashcard.classList.remove(exitClass, 'flipped');
    callback();
    elements.flashcard.classList.add(enterClass);

    setTimeout(() => {
      elements.flashcard.classList.remove(enterClass);
    }, 300);
  }, 250);
}

// Keyboard Navigation
function handleKeyboard(e) {
  if (state.currentScreen !== 'card') return;

  switch (e.key) {
    case 'ArrowLeft':
    case 'ArrowUp':
      prevCard();
      break;
    case 'ArrowRight':
    case 'ArrowDown':
      nextCard();
      break;
    case ' ':
    case 'Enter':
      e.preventDefault();
      flipCard();
      break;
    case 'Escape':
      showScreen('home');
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

  elements.flashcard.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  elements.flashcard.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
  }, { passive: true });

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
    } else {
      if (Math.abs(deltaY) > minSwipeDistance) {
        if (deltaY < 0) {
          showScreen('home');
        }
      }
    }
  }
}

// Start the app
init();
