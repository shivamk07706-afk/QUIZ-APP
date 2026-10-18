
"use strict";

// ==================== QUIZ DATA ====================
const quizData = window.questionBank || {};

// ==================== HTML ELEMENTS ====================
const homeSection = document.getElementById("home");
const quizSection = document.getElementById("quiz");
const resultSection = document.getElementById("result");

const subjectTitle = document.getElementById("subjectTitle");
const questionCount = document.getElementById("questionCount");
const questionText = document.getElementById("questionText");
const optionsBox = document.getElementById("options");
const feedback = document.getElementById("feedback");
const statusText = document.getElementById("status");
const scoreText = document.getElementById("scoreText");

const nextBtn = document.getElementById("nextBtn");
const homeBtn = document.getElementById("homeBtn");
const resultHomeBtn = document.getElementById("resultHomeBtn");
const retryBtn = document.getElementById("retryBtn");

// ==================== SUBJECT NAMES ====================
const subjectNames = {
  GK: "सामान्य ज्ञान (GK)",
  Science: "विज्ञान",
  History: "इतिहास",
  Geography: "भूगोल",
  Math: "गणित",
  Computer: "कंप्यूटर"
};

// ==================== QUIZ STATE ====================
let currentSubject = "";
let currentQuestions = [];
let questionIndex = 0;
let score = 0;
let answered = false;
let timerInterval = null;
let timeLeft = 30;
let resultSaved = false;

// ==================== SAVE KEYS ====================
const BEST_KEY = "shivamQuizBestScores_v1";
const BOARD_KEY = "shivamQuizLeaderboard_v1";
const PLAYER_KEY = "shivamQuizPlayerName_v1";

// ==================== SAFE STORAGE ====================
function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn("Storage unavailable:", error);
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("Could not save quiz data:", error);
  }
}

function getPlayerName() {
  try {
    return (localStorage.getItem(PLAYER_KEY) || "Player").trim() || "Player";
  } catch (error) {
    return "Player";
  }
}

function setPlayerName(name) {
  try {
    localStorage.setItem(PLAYER_KEY, name.trim() || "Player");
  } catch (error) {
    console.warn("Could not save player name:", error);
  }
}

// ==================== SOUND SYSTEM ====================
let audioContext = null;

function playSound(kind) {
  try {
    const AudioClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioClass) return;

    if (!audioContext) {
      audioContext = new AudioClass();
    }

    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    let notes;

    if (kind === "correct") {
      notes = [660, 880];
    } else if (kind === "wrong") {
      notes = [260, 190];
    } else {
      notes = [timeLeft <= 3 ? 1100 : 800];
    }

    notes.forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const start = audioContext.currentTime + index * 0.12;

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency, start);

      gain.gain.setValueAtTime(0.001, start);
      gain.gain.exponentialRampToValueAtTime(0.12, start + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.13);

      oscillator.connect(gain);
      gain.connect(audioContext.destination);

      oscillator.start(start);
      oscillator.stop(start + 0.14);
    });
  } catch (error) {
    console.log("Sound unavailable:", error);
  }
}

// ==================== LEADERBOARD UI ====================
function ensureLeaderboardUI() {
  if (!homeSection || document.getElementById("leaderboardPanel")) return;

  const panel = document.createElement("section");
  panel.id = "leaderboardPanel";

  panel.innerHTML = `
    <h2>🏆 Leaderboard</h2>
    <p>इस डिवाइस पर सेव हुए टॉप स्कोर</p>

    <div class="sq-player-row">
      <label for="sqPlayerName">खिलाड़ी का नाम:</label>
      <input id="sqPlayerName" maxlength="24" placeholder="अपना नाम लिखें">
    </div>

    <h3>💾 Subject High Scores</h3>
    <div id="sqBestScores"></div>

    <h3>🏆 Top 10 Scores</h3>
    <ol id="sqLeaderboardList"></ol>

    <p class="sq-board-note">
      नोट: यह leaderboard इसी डिवाइस पर सेव होता है।
      सभी खिलाड़ियों की online ranking के लिए server/database चाहिए।
    </p>
  `;

  const style = document.createElement("style");

  style.textContent = `
    #leaderboardPanel {
      margin: 24px auto 10px;
      max-width: 900px;
      padding: 20px;
      background: linear-gradient(145deg,#08142b,#10102b);
      border: 1px solid #244675;
      border-radius: 18px;
      color: #eaf4ff;
      box-shadow: 0 10px 35px #0003;
    }

    #leaderboardPanel h2 {
      margin: 0 0 8px;
      font-size: 1.4rem;
    }

    #leaderboardPanel h3 {
      margin-top: 20px;
      font-size: 1rem;
    }

    #leaderboardPanel p {
      color: #a8bbd9;
      font-size: .9rem;
    }

    .sq-player-row {
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
      margin: 15px 0;
    }

    .sq-player-row input {
      background: #030817;
      color: white;
      border: 1px solid #31578a;
      border-radius: 9px;
      padding: 10px 12px;
      min-width: 180px;
      max-width: 100%;
    }

    #sqBestScores {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .sq-best-chip {
      padding: 10px 12px;
      background: #0a2341;
      border: 1px solid #1b5480;
      border-radius: 10px;
      margin: 5px 0;
    }

    #sqLeaderboardList {
      padding-left: 28px;
    }

    #sqLeaderboardList li {
      padding: 10px;
      margin: 6px 0;
      background: #071b33;
      border-radius: 9px;
    }

    .sq-board-note {
      font-size: .8rem !important;
    }
  `;

  document.head.appendChild(style);
  homeSection.appendChild(panel);

  const nameInput = panel.querySelector("#sqPlayerName");
  nameInput.value = getPlayerName() === "Player" ? "" : getPlayerName();

  nameInput.addEventListener("change", () => {
    setPlayerName(nameInput.value);
    renderLeaderboard();
  });

  renderLeaderboard();
}

// ==================== DISPLAY SCORES ====================
function renderLeaderboard() {
  const bestBox = document.getElementById("sqBestScores");
  const listBox = document.getElementById("sqLeaderboardList");

  if (!bestBox || !listBox) return;

  const bestScores = readStorage(BEST_KEY, {});
  const board = readStorage(BOARD_KEY, []);

  bestBox.replaceChildren();

  const bestEntries = Object.entries(bestScores);

  if (bestEntries.length === 0) {
    const chip = document.createElement("div");
    chip.className = "sq-best-chip";
    chip.textContent = "अभी कोई high score सेव नहीं है।";
    bestBox.appendChild(chip);
  } else {
    bestEntries.forEach(([subject, data]) => {
      const chip = document.createElement("div");
      chip.className = "sq-best-chip";
      chip.textContent =
        `⭐ ${subjectNames[subject] || subject}: ` +
        `${data.score}/${data.total} (${data.percentage}%)`;

      bestBox.appendChild(chip);
    });
  }

  listBox.replaceChildren();

  if (board.length === 0) {
    const item = document.createElement("li");
    item.textContent = "पहला quiz पूरा करो और leaderboard में आओ!";
    listBox.appendChild(item);
  } else {
    board.slice(0, 10).forEach((entry, index) => {
      const item = document.createElement("li");

      const medal = ["🥇", "🥈", "🥉"][index] || `${index + 1}.`;

      item.textContent =
        `${medal} ${entry.name} — ${entry.score}/${entry.total} ` +
        `(${entry.percentage}%) · ` +
        `${subjectNames[entry.subject] || entry.subject}`;

      listBox.appendChild(item);
    });
  }
}

// ==================== SAVE QUIZ RESULT ====================
function saveQuizResult(total, percentage) {
  if (resultSaved) return;
  resultSaved = true;

  const bestScores = readStorage(BEST_KEY, {});
  const previous = bestScores[currentSubject];

  if (
    !previous ||
    percentage > previous.percentage ||
    (percentage === previous.percentage && score > previous.score)
  ) {
    bestScores[currentSubject] = {
      score,
      total,
      percentage,
      date: new Date().toISOString()
    };

    writeStorage(BEST_KEY, bestScores);
  }

  const board = readStorage(BOARD_KEY, []);

  board.push({
    name: getPlayerName(),
    subject: currentSubject,
    score,
    total,
    percentage,
    date: new Date().toISOString()
  });

  board.sort((a, b) =>
    b.percentage - a.percentage ||
    b.score - a.score ||
    b.total - a.total
  );

  writeStorage(BOARD_KEY, board.slice(0, 50));
  renderLeaderboard();
}

// ==================== TIMER DISPLAY ====================
const timerDisplay = document.createElement("div");

timerDisplay.id = "quizTimer";
timerDisplay.textContent = "⏱️ समय: 30 सेकंड";

Object.assign(timerDisplay.style, {
  textAlign: "center",
  fontSize: "20px",
  fontWeight: "bold",
  color: "#22d3ee",
  background: "#0b1d3d",
  border: "1px solid #1c4070",
  borderRadius: "14px",
  padding: "13px",
  margin: "18px 0",
  transition: "color .2s, border-color .2s"
});

const timerStyle = document.createElement("style");

timerStyle.textContent = `
  #quizTimer.timer-warning {
    color: #ff526f !important;
    border-color: #ff526f !important;
    animation: timerPulse 0.7s infinite;
  }

  @keyframes timerPulse {
    50% { opacity: 0.55; }
  }
`;

document.head.appendChild(timerStyle);

if (questionCount && questionCount.parentNode) {
  questionCount.parentNode.insertBefore(timerDisplay, questionCount);
} else if (quizSection) {
  quizSection.prepend(timerDisplay);
}

// ==================== TIMER FUNCTIONS ====================
function stopTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateTimerDisplay() {
  timerDisplay.textContent = `⏱️ समय: ${timeLeft} सेकंड`;

  if (timeLeft <= 10) {
    timerDisplay.classList.add("timer-warning");
  } else {
    timerDisplay.classList.remove("timer-warning");
  }
}

function startTimer() {
  stopTimer();

  timeLeft = 30;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    if (answered) {
      stopTimer();
      return;
    }

    timeLeft--;
    updateTimerDisplay();

    // आखिरी 10 सेकंड में हर सेकंड beep
    if (timeLeft <= 10 && timeLeft > 0) {
      playSound("timer");
    }

    if (timeLeft <= 0) {
      stopTimer();
      checkAnswer(-1);
    }
  }, 1000);
}

// ==================== SHUFFLE QUESTIONS ====================
function shuffleQuestions(list) {
  const questions = [...list];

  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }

  return questions;
}

// ==================== START QUIZ ====================
function startQuiz(subject) {
  if (
    !quizData[subject] ||
    !Array.isArray(quizData[subject]) ||
    quizData[subject].length === 0
  ) {
    if (statusText) {
      statusText.textContent =
        "इस विषय के सवाल नहीं मिले। question_bank.js जाँचें।";
    }
    return;
  }

  stopTimer();

  currentSubject = subject;
  currentQuestions = shuffleQuestions(quizData[subject]);

  questionIndex = 0;
  score = 0;
  answered = false;
  resultSaved = false;

  homeSection.hidden = true;
  resultSection.hidden = true;
  quizSection.hidden = false;

  statusText.textContent = "";
  subjectTitle.textContent = subjectNames[subject] || subject;

  // पहला क्लिक ऑडियो शुरू करने की अनुमति देता है
  try {
    const AudioClass = window.AudioContext || window.webkitAudioContext;
    if (AudioClass && !audioContext) audioContext = new AudioClass();
    if (audioContext && audioContext.state === "suspended") audioContext.resume();
  } catch (error) {
    console.log("Audio initialization unavailable:", error);
  }

  showQuestion();
}

// ==================== SHOW QUESTION ====================
function showQuestion() {
  const question = currentQuestions[questionIndex];

  if (!question) {
    showResult();
    return;
  }

  stopTimer();

  answered = false;
  feedback.textContent = "";
  feedback.className = "";

  nextBtn.disabled = true;
  nextBtn.textContent = "अगला सवाल ➜";

  questionCount.textContent =
    `सवाल ${questionIndex + 1} / ${currentQuestions.length}`;

  questionText.textContent = question.q;
  optionsBox.replaceChildren();

  question.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "option-btn";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

    button.addEventListener("click", () => {
      checkAnswer(index);
    });

    optionsBox.appendChild(button);
  });

  startTimer();
}

// ==================== CHECK ANSWER ====================
function checkAnswer(selected) {
  if (answered) return;

  answered = true;
  stopTimer();

  const question = currentQuestions[questionIndex];

  optionsBox.querySelectorAll("button").forEach((button, index) => {
    button.disabled = true;

    if (index === question.answer) {
      button.classList.add("correct");
    }

    if (index === selected && index !== question.answer) {
      button.classList.add("wrong");
    }
  });

  if (selected === question.answer) {
    score++;
    playSound("correct");

    feedback.textContent = "✅ सही जवाब!";
    feedback.className = "correct-message";
  } else if (selected === -1) {
    playSound("wrong");

    feedback.textContent =
      `⏰ समय समाप्त! सही उत्तर: ${question.options[question.answer]}`;

    feedback.className = "wrong-message";
  } else {
    playSound("wrong");

    feedback.textContent =
      `❌ गलत जवाब। सही उत्तर: ${question.options[question.answer]}`;

    feedback.className = "wrong-message";
  }

  timerDisplay.classList.remove("timer-warning");
  timerDisplay.textContent =
    selected === -1 ? "⏰ समय समाप्त!" : "✓ जवाब दर्ज हो गया";

  nextBtn.disabled = false;
  nextBtn.textContent =
    questionIndex === currentQuestions.length - 1
      ? "रिजल्ट देखें 🏆"
      : "अगला सवाल ➜";
}

// ==================== NEXT QUESTION ====================
function nextQuestion() {
  if (!answered) return;

  questionIndex++;

  if (questionIndex >= currentQuestions.length) {
    showResult();
  } else {
    showQuestion();
  }
}

// ==================== RESULT ====================
function showResult() {
  stopTimer();

  quizSection.hidden = true;
  homeSection.hidden = true;
  resultSection.hidden = false;

  const total = currentQuestions.length;
  const percentage = total ? Math.round((score / total) * 100) : 0;

  scoreText.textContent =
    `तुम्हारा स्कोर: ${score} / ${total} (${percentage}%)` +
    (
      percentage >= 80
        ? " — शानदार! 🎉"
        : percentage >= 50
          ? " — अच्छा प्रयास! 👍"
          : " — फिर से कोशिश करो! 💪"
    );

  saveQuizResult(total, percentage);
}

// ==================== GO HOME ====================
function goHome() {
  stopTimer();

  quizSection.hidden = true;
  resultSection.hidden = true;
  homeSection.hidden = false;

  timerDisplay.textContent = "⏱️ समय: 30 सेकंड";
  timerDisplay.classList.remove("timer-warning");

  statusText.textContent =
    `Shivam Quiz तैयार है — ${Object.keys(quizData).length} विषय उपलब्ध हैं।`;

  renderLeaderboard();
}

// ==================== BUTTON EVENTS ====================
document.querySelectorAll(".subject-btn").forEach(button => {
  button.addEventListener("click", () => {
    startQuiz(button.dataset.subject);
  });
});

if (nextBtn) {
  nextBtn.addEventListener("click", nextQuestion);
}

if (homeBtn) {
  homeBtn.addEventListener("click", goHome);
}

if (resultHomeBtn) {
  resultHomeBtn.addEventListener("click", goHome);
}

if (retryBtn) {
  retryBtn.addEventListener("click", () => {
    if (currentSubject) startQuiz(currentSubject);
  });
}

// ==================== INITIALIZE ====================
ensureLeaderboardUI();

if (statusText) {
  const totalQuestions = Object.values(quizData).reduce(
    (total, list) => total + (Array.isArray(list) ? list.length : 0),
    0
  );

  statusText.textContent =
    `Shivam Quiz तैयार है — ${Object.keys(quizData).length} विषय, ` +
    `कुल ${totalQuestions} सवाल।`;
}

console.log(
  "Shivam Quiz question counts:",
  Object.fromEntries(
    Object.entries(quizData).map(([name, list]) => [
      name,
      Array.isArray(list) ? list.length : 0
    ])
  )
);
