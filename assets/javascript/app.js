// var answers = [
//     q1 = {a1: true, a2: false, a3: false},
//     q2 = {a1: false, a2: true, a3: false}
// ];

var triviaDatabase = [
    {
        question: "A is right",
        answers: [
            "first answer",
            "second answer",
            "third answer"
        ],
        correctAnswer: "a",
    },
    {
        question: "C is right",
        answers: [
            "first answer",
            "second answer",
            "third answer"
        ],
        correctAnswer: "c",
    }
]

// function createQuiz(){
//     for(i=0; i<questions.length; i++){
//         text =  questions[i].question;
//         $("#trivia").append(questions[i].question);
//         $("#trivia").append(text);
//         // $("#trivia").append("<p>" + questions[i].answers + "</p>");
//         console.log(questions[i].question);
//         console.log(text);
//     }
// }

// createQuiz();
$(document).ready(function () {

// var right = 0;

// var userChoiceOne;

// input[name="answerOne"]:checked

//$("allQuestions").append("<h4>" + triviaDatabase[i].question + "</h4>")

// for(i=0; i<triviaDatabase.length; i++){
//     var newQuestion = $("<h4>").append(triviaDatabase[i].question); // .append("<h4>" + triviaDatabase[i].question + "</h4>")
//     var newAnswer = $("<p>").append(triviaDatabase[i].answers[j]);//create loop for with j?
//     $("#allQuestions").append(newQuestion);
//     console.log(newQuestion);
// }

for(i=0; i<triviaDatabase.length; i++){
    var newQuestion = $("<h4>").append(triviaDatabase[i].question); // .append("<h4>" + triviaDatabase[i].question + "</h4>")
    $("#allQuestions").append(newQuestion);
    var newAnswer = $("<div>");

    for(j=0; j<3; j++){//replace 3 by a variable down the line
        
        newAnswer.append('<input type="radio" name="answer' + [i] + '" value="' + j + '">' + triviaDatabase[i].answers[j]);//create loop for with j?
        console.log(triviaDatabase[i].answers[j]);
        // console.log(newAnswer);
        
        $("#allQuestions").append(newAnswer);
    }

    // newQuestion.append($("<p>").textContent = triviaDatabase[i].answers[j]);
    console.log(newQuestion);
}

// $("#submit").on("click", function () {
//     var userAnswer = $('#questionOne').children("input:checked").val();
//     console.log(userAnswer);
//     console.log(triviaDatabase[0].correctAnswer);
//     if(userAnswer === triviaDatabase[0].correctAnswer){
//         right++;
//         console.log(right);
//     }

// });
    
console.log("test 2")

});
