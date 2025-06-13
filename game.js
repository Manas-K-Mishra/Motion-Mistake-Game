const questions = [
  {
    question: "Which animation has the motion design mistake?",
    options: ["images/q1_a.gif", "images/q1_b.gif", "images/q1_c.gif", "images/q1_d.gif"],
    answer: 2
  },
  {
    question: "Spot the odd one out in motion fluidity:",
    options: ["images/q2_a.gif", "images/q2_b.gif", "images/q2_c.gif", "images/q2_d.gif"],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const quizDiv = document.getElementById("quiz");
  const q = questions[currentQuestion];
  quizDiv.innerHTML = `
    <h2>Q${currentQuestion + 1}: ${q.question}</h2>
    <div class="options">
      ${q.options.map((opt, i) => `
        <button onclick="selectOption(${i})">
          <img src="${opt}" alt="Option ${i + 1}">
        </button>
      `).join("")}
    </div>
  `;
}

function selectOption(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  document.getElementById("quiz").classList.add("hidden");
  const scoreSection = document.getElementById("score-section");
  scoreSection.classList.remove("hidden");
  document.getElementById("score").textContent = `You scored ${score} out of ${questions.length}`;
}

function restartGame() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("score-section").classList.add("hidden");
  showQuestion();
}

window.onload = showQuestion;
