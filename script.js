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
