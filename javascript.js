
var questions = [{
    question: "1. What does HTML stand for?",
    choices: ["Hyper Text Markup Language", "How To Milk Lizards", "Harold Tony Marvin Larry"],
    correctAnswer: 0
}, {
    question: "1. Which one is responsible for page styling?",
    choices: ["CSS", "Javascript", "HTML"],
    correctAnswer: 0
}, {
    question: "1. What does CSS stand for?",
    choices: ["Carol Says Sayonara", "Can't Stand Shrimp", "Cascading Style Sheet"],
    correctAnswer: 2
}];


var score = 0;
var questionIndex = 0;



var time = document.querySelector("#time");
var timer = document.querySelector("#timer");
var begin = document.querySelector("#startBtn");
var highScore = document.querySelector("#highscore");
var saveScore = document.querySelector("#saveScore");
var secondsLeft = 60

var title = document.querySelector("#title");

function setTime() {
    let timer = setInterval(function () {
        secondsLeft --;
        timer.textContent = `Time:${secondsLeft}s`;
    })
}

begin.addEventListener("click", function(questions) {
    title.setAttribute("style", "display:none")
    for (var i=0; i < questions.length; i++);
});

