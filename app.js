const state = {
  studentName: "",
  current: 0,
  answers: Array(QUESTIONS.length).fill(null),
  startedAt: null,
  finishedAt: null
};

const $ = (id) => document.getElementById(id);

$("question-count").textContent = QUESTIONS.length;
$("total-number").textContent = QUESTIONS.length;

function showScreen(screenId) {
  ["start-screen", "quiz-screen", "result-screen"].forEach(id => {
    $(id).classList.toggle("hidden", id !== screenId);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function shuffleQuestions() {
  // Keeps the question database order intact while randomizing the quiz session.
  // Each question object remains unchanged.
  for (let i = QUESTIONS.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [QUESTIONS[i], QUESTIONS[j]] = [QUESTIONS[j], QUESTIONS[i]];
  }
}

function renderQuestion() {
  const q = QUESTIONS[state.current];
  const selected = state.answers[state.current];

  $("quiz-student").textContent = state.studentName;
  $("current-number").textContent = state.current + 1;
  $("total-number").textContent = QUESTIONS.length;
  $("question-topic").textContent = q.topic;
  $("question-text").textContent = q.question;

  const percent = ((state.current + 1) / QUESTIONS.length) * 100;
  $("progress-bar").style.width = `${percent}%`;

  const options = $("options");
  options.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option" + (selected === index ? " selected" : "");
    btn.innerHTML = `<span class="option-key">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(option)}</span>`;
    btn.addEventListener("click", () => selectAnswer(index));
    options.appendChild(btn);
  });

  $("prev-btn").disabled = state.current === 0;
  $("next-btn").disabled = selected === null;
  $("next-btn").textContent = state.current === QUESTIONS.length - 1 ? "Finish Quiz" : "Next";
  $("selection-note").textContent = selected === null
    ? "Select one answer to continue."
    : "Answer selected. You can change it before continuing.";
}

function selectAnswer(index) {
  state.answers[state.current] = index;
  renderQuestion();
}

function nextQuestion() {
  if (state.answers[state.current] === null) return;

  if (state.current === QUESTIONS.length - 1) {
    finishQuiz();
    return;
  }

  state.current++;
  renderQuestion();
}

function previousQuestion() {
  if (state.current > 0) {
    state.current--;
    renderQuestion();
  }
}

function calculateResults() {
  let correct = 0;
  let unanswered = 0;

  const topicStats = {};

  QUESTIONS.forEach((q, i) => {
    if (!topicStats[q.topic]) {
      topicStats[q.topic] = { total: 0, correct: 0 };
    }

    topicStats[q.topic].total++;

    if (state.answers[i] === null) {
      unanswered++;
    } else if (state.answers[i] === q.answer) {
      correct++;
      topicStats[q.topic].correct++;
    }
  });

  const incorrect = QUESTIONS.length - correct - unanswered;
  const percentage = Math.round((correct / QUESTIONS.length) * 100);

  return { correct, incorrect, unanswered, percentage, topicStats };
}

function getPerformanceLabel(percentage) {
  if (percentage >= 90) return "Excellent foundation";
  if (percentage >= 75) return "Good foundation";
  if (percentage >= 60) return "Developing foundation";
  return "Needs more practice";
}

function finishQuiz() {
  state.finishedAt = new Date();
  const results = calculateResults();

  $("result-title").textContent = `${state.studentName}'s Performance Report`;
  $("result-summary").textContent =
    `${getPerformanceLabel(results.percentage)} — ${results.correct} of ${QUESTIONS.length} questions answered correctly.`;

  $("score-percent").textContent = `${results.percentage}%`;
  $("correct-count").textContent = results.correct;
  $("incorrect-count").textContent = results.incorrect;
  $("unanswered-count").textContent = results.unanswered;
  $("result-total").textContent = QUESTIONS.length;

  renderTopicBreakdown(results.topicStats);
  renderReviewList();

  savePerformance(results);
  showScreen("result-screen");
}

function renderTopicBreakdown(topicStats) {
  const container = $("topic-breakdown");
  container.innerHTML = "";

  Object.entries(topicStats).forEach(([topic, stats]) => {
    const percent = Math.round((stats.correct / stats.total) * 100);

    const row = document.createElement("div");
    row.className = "breakdown-row";
    row.innerHTML = `
      <div class="breakdown-meta">
        <strong>${escapeHtml(topic)}</strong>
        <span>${stats.correct}/${stats.total} (${percent}%)</span>
      </div>
      <div class="meter">
        <div class="meter-fill" style="width:${percent}%"></div>
      </div>
    `;
    container.appendChild(row);
  });
}

function renderReviewList() {
  const container = $("review-list");
  const missed = QUESTIONS
    .map((q, i) => ({ q, i }))
    .filter(({ q, i }) => state.answers[i] !== q.answer);

  $("review-intro").textContent = missed.length
    ? `${missed.length} question(s) should be reviewed before moving to the next lesson.`
    : "No questions were missed. Great work.";

  container.innerHTML = "";

  if (!missed.length) {
    container.innerHTML = `<div class="empty-review">All questions were answered correctly.</div>`;
    return;
  }

  missed.forEach(({ q, i }) => {
    const yourAnswer = state.answers[i] === null
      ? "Not answered"
      : q.options[state.answers[i]];

    const item = document.createElement("div");
    item.className = "review-item";
    item.innerHTML = `
      <strong>Q${i + 1}. ${escapeHtml(q.question)}</strong>
      <p class="your-answer"><b>Your answer:</b> ${escapeHtml(yourAnswer)}</p>
      <p class="correct-answer"><b>Correct answer:</b> ${escapeHtml(q.options[q.answer])}</p>
      <p><b>Topic:</b> ${escapeHtml(q.topic)}</p>
    `;
    container.appendChild(item);
  });
}

function buildReportText() {
  const results = calculateResults();
  const date = state.finishedAt
    ? state.finishedAt.toLocaleString()
    : new Date().toLocaleString();

  let text = "";
  text += "JLABS STUDENT QUIZ PERFORMANCE REPORT\n";
  text += "=====================================\n\n";
  text += `Student: ${state.studentName}\n`;
  text += `Quiz: Week 1 — OS Task Management & Intro to Web Development\n`;
  text += `Date: ${date}\n\n`;
  text += `SCORE: ${results.correct}/${QUESTIONS.length} (${results.percentage}%)\n`;
  text += `Correct: ${results.correct}\n`;
  text += `Incorrect: ${results.incorrect}\n`;
  text += `Unanswered: ${results.unanswered}\n`;
  text += `Performance: ${getPerformanceLabel(results.percentage)}\n\n`;

  text += "TOPIC BREAKDOWN\n";
  text += "---------------\n";
  Object.entries(results.topicStats).forEach(([topic, stats]) => {
    const pct = Math.round((stats.correct / stats.total) * 100);
    text += `${topic}: ${stats.correct}/${stats.total} (${pct}%)\n`;
  });

  text += "\nQUESTIONS TO REVIEW\n";
  text += "-------------------\n";
  QUESTIONS.forEach((q, i) => {
    if (state.answers[i] !== q.answer) {
      const yourAnswer = state.answers[i] === null ? "Not answered" : q.options[state.answers[i]];
      text += `Q${i + 1}: ${q.question}\n`;
      text += `Your answer: ${yourAnswer}\n`;
      text += `Correct answer: ${q.options[q.answer]}\n`;
      text += `Topic: ${q.topic}\n\n`;
    }
  });

  text += "INSTRUCTION: Share this report with your JLABS tutor via WhatsApp.\n";
  return text;
}

function savePerformance(results) {
  const key = "jlabsQuizPerformance";
  const history = JSON.parse(localStorage.getItem(key) || "[]");

  history.push({
    studentName: state.studentName,
    quiz: "Week 1 — OS Task Management & Intro to Web Development",
    date: new Date().toISOString(),
    score: results.correct,
    total: QUESTIONS.length,
    percentage: results.percentage,
    topics: results.topicStats
  });

  localStorage.setItem(key, JSON.stringify(history));
}

function downloadReport() {
  const blob = new Blob([buildReportText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const safeName = state.studentName.replace(/[^a-z0-9]+/gi, "_").replace(/^_|_$/g, "");
  a.href = url;
  a.download = `JLABS_${safeName || "student"}_quiz_result.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function copyReport() {
  const text = buildReportText();

  try {
    await navigator.clipboard.writeText(text);
    $("copy-status").textContent = "Result copied. Paste it into WhatsApp.";
  } catch {
    $("copy-status").textContent = "Copy is unavailable in this browser. Use Download TXT instead.";
  }
}

function shareWhatsApp() {
  const text = buildReportText();
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function resetForSameStudent() {
  state.current = 0;
  state.answers = Array(QUESTIONS.length).fill(null);
  state.startedAt = new Date();
  state.finishedAt = null;
  $("copy-status").textContent = "";
  shuffleQuestions();
  showScreen("quiz-screen");
  renderQuestion();
}

function resetForNewStudent() {
  state.studentName = "";
  state.current = 0;
  state.answers = Array(QUESTIONS.length).fill(null);
  state.startedAt = null;
  state.finishedAt = null;
  $("student-name").value = "";
  $("start-error").textContent = "";
  $("copy-status").textContent = "";
  showScreen("start-screen");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

$("start-btn").addEventListener("click", () => {
  const name = $("student-name").value.trim();

  if (!name) {
    $("start-error").textContent = "Please enter the student's name before starting.";
    $("student-name").focus();
    return;
  }

  state.studentName = name;
  state.startedAt = new Date();
  state.current = 0;
  state.answers = Array(QUESTIONS.length).fill(null);

  shuffleQuestions();
  showScreen("quiz-screen");
  renderQuestion();
});

$("student-name").addEventListener("keydown", (event) => {
  if (event.key === "Enter") $("start-btn").click();
});

$("next-btn").addEventListener("click", nextQuestion);
$("prev-btn").addEventListener("click", previousQuestion);
$("copy-btn").addEventListener("click", copyReport);
$("download-btn").addEventListener("click", downloadReport);
$("whatsapp-btn").addEventListener("click", shareWhatsApp);
$("retake-btn").addEventListener("click", resetForSameStudent);
$("new-student-btn").addEventListener("click", resetForNewStudent);
