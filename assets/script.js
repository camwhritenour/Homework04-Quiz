var quizEl = document.querySelector("#quiz");
var startQuizEl = document.querySelector("#start-quiz");
var timerEL = document.querySelector("#timer");

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

