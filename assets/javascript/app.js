$(document).ready(function () {

var triviaDatabase = [
    {
        question: "A is right",
        answers: [
            "first answer",
            "second answer",
            "third answer"
        ],
        correctAnswer: "0",
    },
    {
        question: "C is right",
        answers: [
            "first answer",
            "second answer",
            "third answer"
        ],
        correctAnswer: "2",
    },
    {
        question: "B is right",
        answers: [
            "first answer",
            "second answer",
            "third answer"
        ],
        correctAnswer: "1",
    },
    {
        question: "C is right",
        answers: [
            "first answer",
            "second answer",
            "third answer"
        ],
        correctAnswer: "2",
    },
    {
        question: "B is right",
        answers: [
            "first answer",
            "second answer",
            "third answer"
        ],
        correctAnswer: "1",
    }
]

var right = 0; //need to reset this after the result is presented //tried to only create it inside the function and it didn't work
var time = 60; //maybe I have to reset it somewhere?
var intervalId;
var clockRunning = false;

//creating the html for the trivia
function generateHtml(){
    $("#score").html("");
    for(i=0; i<triviaDatabase.length; i++){
        var newQuestion = $("<h4>").append(triviaDatabase[i].question);
        $("#allQuestions").append(newQuestion);
        var newAnswer = $('<div id=question' + i + '>');

        for(j=0; j<3; j++){//replace 3 by a variable down the line
            
            newAnswer.append('<input type=radio name=answer' + i + ' value=' + j + '>' + triviaDatabase[i].answers[j]);
            console.log(triviaDatabase[i].answers[j]);
            
            $("#allQuestions").append(newAnswer);
        }

        console.log(newQuestion);
    }
}

//check if user answers are right
function calculateScore (){
    for(i=0; i<triviaDatabase.length; i++){
        var userAnswer = $('#question' + i).children("input:checked").val();
        console.log("userAnswer: " + userAnswer);
        console.log("trivia[i].answer: " + triviaDatabase[i].correctAnswer);
        if(userAnswer === triviaDatabase[i].correctAnswer){
            right++;
            console.log("right: " + right);
        }
    }
    $("#score").html("You got " + right + " right answers!")
    right = 0;
}

function run() {
    if (!clockRunning) {// prevents multiple instances of the clock running at the same time
        clockRunning = true;
        $("#timeLeft").html("60");
        intervalId = setInterval(decrement, 1000);
    }
}

function decrement() {
    time--;
    $("#timeLeft").html(time);

    if (time === 0) {
        stop();
        calculateScore();
    }
}

function stop() {
    clearInterval(intervalId);
    clockRunning = false;
}

//start. set for timer now. might have to call function that makes the html trivia
$("#start").on("click", function () {
    $("#allQuestions").html("");
    generateHtml();
    run();
    // $("#submit").html('<button id=submitButton>Submit</button>'); //not working for some reason
});

// make a function to check and count "right" and just call it with .click
$("#submitButton").on("click", function () {
    stop();
    calculateScore();

});

});
