import { DB } from "./data.js";
import { QUESTIONS } from "./questions.js";
import { getRoute, go } from "./router.js";

const app = document.getElementById("app");
const title = document.getElementById("title");
const back = document.querySelector(".back");

const HIGH_SCORE_KEY = "cleaningQuizHighScore";

const quizState = {
  questions: [],
  currentIndex: 0,
  correctCount: 0,
  checked: false,
  selectedIndexes: new Set(),
};

function setHeader(text) {
  title.textContent = text;
  const parts = getRoute();
  back.style.visibility = parts.length ? "visible" : "hidden";
  back.onclick = (e) => {
    e.preventDefault();
    if (!parts.length) return;
    if (parts.length === 1) go("/");
    else go("/" + parts.slice(0, -1).join("/"));
  };
}

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function shuffleArray(array) {
  const clone = [...array];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function normalizeQuestion(question) {
  // Shuffle answers and remap the indexes of correct answers.
  const withOriginalIndex = question.answers.map((answerText, originalIndex) => ({
    answerText,
    originalIndex,
  }));

  const shuffledAnswers = shuffleArray(withOriginalIndex);

  const answers = shuffledAnswers.map((item) => item.answerText);
  const correct = shuffledAnswers
    .map((item, newIndex) => ({ item, newIndex }))
    .filter(({ item }) => question.correct.includes(item.originalIndex))
    .map(({ newIndex }) => newIndex)
    .sort((a, b) => a - b);

  return {
    question: question.question,
    answers,
    correct,
    explanation: question.explanation || "",
  };
}

function loadHighScore() {
  const value = Number.parseInt(localStorage.getItem(HIGH_SCORE_KEY), 10);
  return Number.isNaN(value) ? 0 : value;
}

function saveHighScore(score) {
  const previous = loadHighScore();
  if (score > previous) {
    localStorage.setItem(HIGH_SCORE_KEY, String(score));
    return score;
  }
  return previous;
}

function isSelectionCorrect(selectedIndexes, correctIndexes) {
  if (selectedIndexes.size !== correctIndexes.length) {
    return false;
  }

  for (const correctIndex of correctIndexes) {
    if (!selectedIndexes.has(correctIndex)) {
      return false;
    }
  }

  return true;
}

function renderHome() {
  setHeader(DB.appTitle);

  const card = el(`
    <section class="card">
      <p class="p note">Opslagsværk til rengøringspersonale - hurtigt overblik pr. emne.</p>
    </section>
  `);

  const list = el(`<section class="list"></section>`);
  for (const item of DB.home.items) {
    const a = el(`
      <a class="btn" href="#/${item.id}">
        <div class="btn-left">
          <img src="assets/icons/${item.icon}.svg" class="icon" alt="">
          <div class="btn-text">
            <div class="btn-title">${item.title}</div>
            <small>${item.subtitle ?? ""}</small>
          </div>
        </div>
        <div class="chevron">›</div>
      </a>
    `);

    list.appendChild(a);
  }

  app.replaceChildren(card, list);
}

function renderQuizSection(section) {
  setHeader(section.title);

  const intro = el(`
    <section class="card">
      <p class="p">${section.intro ?? ""}</p>
    </section>
  `);

  const progressCard = el(`
    <section class="card quiz-progress" aria-live="polite">
      <div class="quiz-progress-row">
        <span id="quiz-question-counter">Spørgsmål 0/0</span>
        <span id="quiz-score-counter">Korrekte: 0</span>
      </div>
      <p class="quiz-highscore" id="quiz-high-score">High score: 0</p>
    </section>
  `);

  const quizCard = el(`<section class="card" id="quiz-card"></section>`);

  app.replaceChildren(intro, progressCard, quizCard);

  quizState.questions = shuffleArray(QUESTIONS).map(normalizeQuestion);
  quizState.currentIndex = 0;
  quizState.correctCount = 0;
  quizState.checked = false;
  quizState.selectedIndexes = new Set();

  renderQuizQuestion();
}

function updateQuizHeader() {
  const total = quizState.questions.length;
  const index = Math.min(quizState.currentIndex + 1, total);

  const questionCounter = document.getElementById("quiz-question-counter");
  const scoreCounter = document.getElementById("quiz-score-counter");
  const highScore = document.getElementById("quiz-high-score");

  questionCounter.textContent = `Spørgsmål ${index}/${total}`;
  scoreCounter.textContent = `Korrekte: ${quizState.correctCount}`;
  highScore.textContent = `High score: ${loadHighScore()}`;
}

function renderQuizQuestion() {
  updateQuizHeader();

  const question = quizState.questions[quizState.currentIndex];
  const neededAnswers = question.correct.length;
  const selectedCount = quizState.selectedIndexes.size;
  const quizCard = document.getElementById("quiz-card");
  const correctAnswerText = neededAnswers === 1
    ? "Denne opgave har 1 korrekt svar."
    : `Denne opgave har ${neededAnswers} korrekte svar.`;

  const optionsHtml = question.answers
    .map((answerText, answerIndex) => {
      const isSelected = quizState.selectedIndexes.has(answerIndex);
      let classes = "quiz-option";

      if (quizState.checked) {
        const isCorrect = question.correct.includes(answerIndex);
        if (isCorrect) classes += " quiz-option-correct";
        if (isSelected && !isCorrect) classes += " quiz-option-wrong";
      } else if (isSelected) {
        classes += " quiz-option-selected";
      }

      return `
        <button
          type="button"
          class="${classes}"
          data-answer-index="${answerIndex}"
          ${quizState.checked ? "disabled" : ""}
        >
          <span class="quiz-option-index">${answerIndex + 1}</span>
          <span>${answerText}</span>
        </button>
      `;
    })
    .join("");

  const resultBanner = quizState.checked
    ? `<p class="quiz-feedback-label">${isSelectionCorrect(quizState.selectedIndexes, question.correct) ? "Korrekt svar" : "Forkert svar"}</p>`
    : "";

  const explanation = quizState.checked && question.explanation
    ? `<p class="p quiz-explanation">${question.explanation}</p>`
    : "";

  const nextLabel = quizState.currentIndex === quizState.questions.length - 1
    ? "Vis resultat"
    : "Næste spørgsmål";

  quizCard.innerHTML = `
    <h3 class="quiz-question">${question.question}</h3>
    <p class="quiz-help"><strong>${correctAnswerText}</strong></p>
    <p class="quiz-help quiz-help-muted">Valgt: ${selectedCount} af ${neededAnswers}</p>
    <div class="quiz-options">${optionsHtml}</div>
    ${resultBanner}
    ${explanation}
    <div class="quiz-actions">
      <button id="quiz-check" class="btn quiz-btn" type="button" ${quizState.checked ? "hidden" : ""}>Check answer</button>
      <button id="quiz-next" class="btn quiz-btn" type="button" ${quizState.checked ? "" : "hidden"}>${nextLabel}</button>
    </div>
  `;

  quizCard.querySelectorAll("[data-answer-index]").forEach((button) => {
    button.addEventListener("click", () => {
      if (quizState.checked) return;
      const answerIndex = Number.parseInt(button.dataset.answerIndex, 10);

      if (quizState.selectedIndexes.has(answerIndex)) {
        quizState.selectedIndexes.delete(answerIndex);
      } else {
        quizState.selectedIndexes.add(answerIndex);
      }

      renderQuizQuestion();
    });
  });

  const checkBtn = document.getElementById("quiz-check");
  if (checkBtn) checkBtn.addEventListener("click", checkQuizAnswer);

  const nextBtn = document.getElementById("quiz-next");
  if (nextBtn) nextBtn.addEventListener("click", nextQuizStep);
}

function checkQuizAnswer() {
  if (quizState.checked) return;

  const question = quizState.questions[quizState.currentIndex];
  const neededAnswers = question.correct.length;

  if (quizState.selectedIndexes.size !== neededAnswers) {
    window.alert(`Du skal vælge præcis ${neededAnswers} svar.`);
    return;
  }

  quizState.checked = true;

  if (isSelectionCorrect(quizState.selectedIndexes, question.correct)) {
    quizState.correctCount += 1;
  }

  renderQuizQuestion();
}

function nextQuizStep() {
  if (!quizState.checked) return;

  if (quizState.currentIndex === quizState.questions.length - 1) {
    renderQuizResult();
    return;
  }

  quizState.currentIndex += 1;
  quizState.checked = false;
  quizState.selectedIndexes = new Set();
  renderQuizQuestion();
}

function renderQuizResult() {
  const total = quizState.questions.length;
  const highScore = saveHighScore(quizState.correctCount);
  const quizCard = document.getElementById("quiz-card");

  document.getElementById("quiz-question-counter").textContent = `Spørgsmål ${total}/${total}`;
  document.getElementById("quiz-score-counter").textContent = `Korrekte: ${quizState.correctCount}`;
  document.getElementById("quiz-high-score").textContent = `High score: ${highScore}`;

  quizCard.innerHTML = `
    <h3 class="quiz-question">Quiz faerdig</h3>
    <p class="p">Din score: ${quizState.correctCount} / ${total}</p>
    <p class="p">Bedste score: ${highScore}</p>
    <button id="quiz-restart" class="btn quiz-btn" type="button">Start quiz igen</button>
  `;

  document.getElementById("quiz-restart").addEventListener("click", () => {
    const section = DB.sections.quiz;
    renderQuizSection(section);
  });
}

function renderSection(sectionId) {
  const section = DB.sections[sectionId];
  if (!section) return renderNotFound();

  if (sectionId === "quiz") {
    renderQuizSection(section);
    return;
  }

  setHeader(section.title);

  const intro = el(`
    <section class="card">
      <p class="p">${section.intro ?? ""}</p>
    </section>
  `);

  const infoBoxes = section.infoBoxes?.map((box) => el(`
    <section class="card info-box">
      <h3>${box.title}</h3>
      <p class="p">${box.text}</p>
    </section>
  `)) ?? [];

  const list = el(`<section class="list"></section>`);
  for (const item of section.items) {
    const a = el(`
      <a class="btn" href="#/${sectionId}/${item.id}">
        <div class="btn-left">
          <div class="btn-title">
            <img src="assets/icons/${item.icon}.svg" class="icon" alt="">
            <span>${item.title}</span>
          </div>
          <small>${item.subtitle ?? ""}</small>
        </div>
        <div>›</div>
      </a>
    `);

    list.appendChild(a);
  }

  app.replaceChildren(intro, ...infoBoxes, list);
}

function renderDetail(sectionId, itemId) {
  const section = DB.sections[sectionId];
  const item = section?.items?.find((x) => x.id === itemId);
  if (!section || !item) return renderNotFound();

  setHeader(item.title);

  const blocks = [];
  const textHtml = (item.text ?? "").replace(/\n/g, "<br>");

  blocks.push(el(`
    <section class="card">
      <p class="p">${textHtml}</p>
    </section>
  `));

  if (item.image) {
    blocks.push(el(`
      <section class="card">
        <img src="${item.image}" alt="${item.title}" />
      </section>
    `));
  }

  app.replaceChildren(...blocks);
}

function renderNotFound() {
  setHeader("Ikke fundet");
  app.replaceChildren(el(`
    <section class="card">
      <p class="p">Siden findes ikke. Gå tilbage og vælg et emne.</p>
    </section>
  `));
}

function render() {
  const parts = getRoute();

  if (parts.length === 0) return renderHome();
  if (parts.length === 1) return renderSection(parts[0]);
  if (parts.length === 2) return renderDetail(parts[0], parts[1]);

  return renderNotFound();
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("./sw.js");
    } catch {}
  });
}

window.addEventListener("hashchange", render);
render();
