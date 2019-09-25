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

var right = 0; //need to reset this after the result is presented

//creating the html for the trivia
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

//checking if user answers are right
$("#submit").on("click", function () {
    for(i=0; i<triviaDatabase.length; i++){
        var userAnswer = $('#question' + i).children("input:checked").val();
        console.log("userAnswer: " + userAnswer);
        console.log("trivia[i].answer: " + triviaDatabase[i].correctAnswer);
        if(userAnswer === triviaDatabase[i].correctAnswer){
            right++;
            console.log("right: " + right);
        }
    }

});

// test code
// $("#submit").on("click", function () {
//     var userAnswer = $("#questionOne").children("input:checked").val();
//     console.log(userAnswer);
//     console.log(triviaDatabase[0].correctAnswer);
//     if(userAnswer === triviaDatabase[0].correctAnswer){
//         right++;
//         console.log(right);
// }
// });
    
console.log("test 2")

});
