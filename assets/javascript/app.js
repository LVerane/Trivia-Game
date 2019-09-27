$(document).ready(function () {

    var triviaDatabase = [
        {
            question: "Who is the strongest green hero?",
            answers: [
                "Shrek",
                "Hulk",
                "Green Lantern"
            ],
            correctAnswer: "0",
        },
        {
            question: "When asking for a favor, which phrasing should be used?",
            answers: [
                "Could you please?",
                "Do you mind?",
                "Would you kindly?"
            ],
            correctAnswer: "2",
        },
        {
            question: "What is the property of a Poring?",
            answers: [
                "Fire",
                "Water",
                "Wind"
            ],
            correctAnswer: "1",
        },
        {
            question: "Who is the Rickest Rick?",
            answers: [
                "J-22",
                "D-716",
                "C-137"
            ],
            correctAnswer: "2",
        },
        {
            question: "Fish are ___",
            answers: [
                "Food",
                "Friends",
                "Holograms"
            ],
            correctAnswer: "1",
        }
    ];

    var unanswered = 0;
    var right = 0;
    var wrong = 0;
    var time = 60;
    var intervalId;
    var clockRunning = false;

    function reset() {
        time = 60;
        unanswered = 0;
        wrong = 0;
        right = 0;
        $("#allQuestions").html('');
        $("#score").html('');
        $("#timeLeft").html('');
    }

    //creating the html for the trivia
    function generateHtml() {
        $("#instruction").html('Select the right answers and click Submit');
        $("#score").html("");
        for (i = 0; i < triviaDatabase.length; i++) {
            var newQuestion = $("<h2>").append(triviaDatabase[i].question);
            $("#allQuestions").append(newQuestion);
            var newAnswer = $('<div class=answerOption id=question' + i + '>');

            for (j = 0; j < triviaDatabase[i].answers.length; j++) {
                newAnswer.append('<input type=radio name=answer' + i + ' value=' + j + '>' + triviaDatabase[i].answers[j]);
                $("#allQuestions").append(newAnswer);
            }
        }
    }

    function calculateScore() {
        for (i = 0; i < triviaDatabase.length; i++) {
            var userAnswer = $('#question' + i).children("input:checked").val();
            if (userAnswer === triviaDatabase[i].correctAnswer) {
                right++;
            } else if (typeof userAnswer === 'undefined') {
                unanswered++;
            } else {
                wrong++;
            }
        }
        $("#score").append('<h4> You got ' + right + ' right answers! </h4>')
        $("#score").append('<h4> You got ' + wrong + ' wrong answers! </h4>')
        if (unanswered > 0) {
            $("#score").append('<h4> You failed to answer ' + unanswered + ' questions!</h4>');
        }
        $("#allQuestions").html('');
        $("#start").html('Start');
        $("#instruction").html('Press Start to Begin the Quizz!');
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
            $("#submit").hide();
            stop();
            calculateScore();
        }
    }

    function stop() {
        clearInterval(intervalId);
        clockRunning = false;
    }

    $("#start").on("click", function () {
        reset();
        $("#start").html('Restart');
        $("#allQuestions").html("");
        generateHtml();
        $("#submit").show();
        run();
    });

    $("#submit").on("click", function () {
        $("#submit").hide();
        $("#timeLeft").html('');
        stop();
        calculateScore();

    });

});
