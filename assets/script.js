var quizEl = document.querySelector("#quiz");
var startQuizEl = document.querySelector("#start-quiz");
var timerEL = document.querySelector("#timer");
var answersEl = document.querySelector("#answers")
var answer1El = document.querySelector("#answer1")
var answer2El = document.querySelector("#answer2")
var answer3El = document.querySelector("#answer3")
var answer4El = document.querySelector("#answer4")

var questions = ["Commonly used data types DO not Include:", "The condition in an if"]

var secondsLeft = 101;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEL.textContent = "Time: " + secondsLeft;
    
        if(secondsLeft === 0) {
        
        clearInterval(timerInterval);
        
        sendMessage();
        }
  
    }, 1000);
}

startQuizEl.addEventListener("click", function() {
    setTime();
    startQuizEl.style
});

