var quizEl = document.querySelector("#quiz");
var startQuizEl = document.querySelector("#start-quiz");
var timerEL = document.querySelector("#timer");
var quizDescEl = document.querySelector('#quiz-description');
var submitbtnEl = document.querySelector('#submitbtn');
var submitline = document.querySelector('#submitline');

var quizHeaderEl = document.querySelector('#quiz-header');
var answersEl = document.querySelector("#answers");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");
var indicatorEl = document.querySelector("#indicator");


var secondsLeft = 101;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEL.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {

            clearInterval(timerInterval);

            endQuiz();
        }

    }, 1000);
}

var questionSet1 = ["What color is the sky?", "Red", "Blue", "Green", "Yellow", "Blue"];
var questionSet2 = ["Who built the pyramids?", "Slaves", "Egyptians", "Aliens", "Dinosaurs", "Aliens"];
var questionSet3 = ["Where is Atlantis?", "Africa", "Under the Atlantic", "Under the Pacific", "Does not Exist", "Africa"];
var questionSet4 = ["Who Discover Electricity?", "Ben Franklin", "Nikola Tesla", "Thomas Edison", "George Washington", "Ben Franklin"];
var questionSet5 = ["What is the oldest college in Texas?", "Baylor", "University of Texas", "SMU", "Texas A&M", "Baylor"];
var questionSet6 = ["What color is the sky?", "Red", "Blue", "Green", "Yellow"];
var questionSet7 = ["What color is the sky?", "Red", "Blue", "Green", "Yellow"];
var questionSet8 = ["What color is the sky?", "Red", "Blue", "Green", "Yellow"];
var questionSet9 = ["What color is the sky?", "Red", "Blue", "Green", "Yellow"];
var questionSet10 = ["What color is the sky?", "Red", "Blue", "Green", "Yellow"];

var questionSets = [questionSet1, questionSet2, questionSet3, questionSet4, questionSet5, questionSet6, questionSet7, questionSet8, questionSet9, questionSet10]

var setSelector = 0




function startQuiz() {
    var correctAnswer = questionSets[setSelector][5];
    quizHeaderEl.textContent = questionSets[setSelector][0];
    answer1El.textContent = questionSets[setSelector][1];
    answer2El.textContent = questionSets[setSelector][2];
    answer3El.textContent = questionSets[setSelector][3];
    answer4El.textContent = questionSets[setSelector][4];
    console.log(correctAnswer)
}

function nextQuestion() {
    setSelector++;
    var correctAnswer = questionSets[setSelector][5];
    quizHeaderEl.textContent = questionSets[setSelector][0];
    answer1El.textContent = questionSets[setSelector][1];
    answer2El.textContent = questionSets[setSelector][2];
    answer3El.textContent = questionSets[setSelector][3];
    answer4El.textContent = questionSets[setSelector][4];
    console.log(correctAnswer)
}

startQuizEl.addEventListener("click", function (event) {
    var element = event.target;

    if (element.matches("#start-quiz")) {
        var state = element.getAttribute("data-state");

        if (state === "visible") {
            element.dataset.state = "hidden";
            quizDescEl.setAttribute("style", "display: none;");
            element.setAttribute("style", "display: none;");

        };

        quizEl.setAttribute("style", "height: 500px");
        answer1El.setAttribute("style", "display: block;");
        answer2El.setAttribute("style", "display: block;");
        answer3El.setAttribute("style", "display: block;");
        answer4El.setAttribute("style", "display: block;");
        submitline.setAttribute("style", "display: block;");
        indicatorEl.setAttribute("style", "display: block;");
        startQuiz();
        

    };

    setTime();
});



answer1El.addEventListener("click", function (event) {
    var element = event.target;
    var correctAnswer = questionSets[setSelector][5];
    
    if (element.textContent === correctAnswer) {
        indicatorEl.textContent = "Correct"
    } else { indicatorEl.textContent = "Incorrect" }
    nextQuestion()
})

answer2El.addEventListener("click", function (event) {
    var element = event.target;
    var correctAnswer = questionSets[setSelector][5];
    
    if (element.textContent === correctAnswer) {
        indicatorEl.textContent = "Correct"
    } else { indicatorEl.textContent = "Incorrect" }
    nextQuestion()
})

answer3El.addEventListener("click", function (event) {
    var element = event.target;
    var correctAnswer = questionSets[setSelector][5];
    
    if (element.textContent === correctAnswer) {
        indicatorEl.textContent = "Correct"
    } else { indicatorEl.textContent = "Incorrect" }
    nextQuestion()
})

answer4El.addEventListener("click", function (event) {
    var element = event.target;
    var correctAnswer = questionSets[setSelector][5];
    
    if (element.textContent === correctAnswer) {
        indicatorEl.textContent = "Correct"
    } else { indicatorEl.textContent = "Incorrect" }
    nextQuestion()
})




/* submitbtnEl.addEventListener("click", function(event) {
    var element = event.target;
    if(element.matches("#answer1")) {
        if(answer1El.text === questionSet1[5].text) {

        }
    }
    if(element.matches("#answer2")) {

    }
    if(element.matches("#answer3")) {

    }
    if(element.matches("#answer4")) {

    }
})
*/
