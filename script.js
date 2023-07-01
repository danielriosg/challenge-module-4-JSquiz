const questions = [
  {
    question:
      "Which function is used to display a message box with a warning icon and an OK button?",
    choices: ["alert()", "confirm()", "prompt()", "warning()"],
    correctAnswer: "alert()",
  },
  {
    question: "What is the correct syntax to declare a variable in JavaScript?",
    choices: ["var = myVar;", "variable myVar;", "v myVar;", "var myVar;"],
    correctAnswer: "var myVar;",
  },
  {
    question: "What is the result of the following expression: 5 + '2'?",
    choices: ["52", "7", "'52'", "'7'"],
    correctAnswer: "'52'",
  },
  {
    question:
      "Which method is used to remove the last element from an array in JavaScript?",
    choices: ["pop()", "removeLast()", "deleteLast()", "slice()"],
    correctAnswer: "pop()",
  },
];

const quizContainer = document.getElementById("quiz");
const startButton = document.getElementById("start");
const timerElement = document.getElementById("time-remaining");
const resultsContainer = document.getElementById("results");
const highScoresList = document.getElementById("high-scores");
let currentQuestionIndex = 0;
let timeRemaining = 60;
let timer;

function startQuiz() {
  startButton.style.display = "none";
  quizContainer.style.display = "block";
  timerElement.textContent = timeRemaining;

  timer = setInterval(updateTimer, 1000);

  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;
  const choices = currentQuestion.choices;
  for (let i = 0; i < choices.length; i++) {
    document.getElementById("choice" + (i + 1)).textContent = choices[i];
  }
}

function checkAnswer(event) {
  const selectedAnswer = event.target.textContent;
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedAnswer === currentQuestion.correctAnswer) {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  } else {
    timeRemaining -= 10;
    if (timeRemaining <= 0) {
      timeRemaining = 0;
      endQuiz();
    }
    timerElement.textContent = timeRemaining;
  }
}

function endQuiz() {
  clearInterval(timer);
  quizContainer.style.display = "none";
  resultsContainer.style.display = "block";
  displayHighScores();
}
