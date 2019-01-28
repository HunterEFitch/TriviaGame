$("#start").on("click", function () {
   game.start();
})

$(document).on("click", "#end", function() {
    game.done();
})

var questions = [{
    question: "The MLB career leader in wins is:",
    answers: ["Christy Mathewson", "Walter Johnson", "Cy Young", "Warren Spahn"],
    correctAnswer: "Cy Young"

}, {
    question: "The MLB career leader in strikeouts (pitching) is:",
    answers: ["Nolan Ryan", "Randy Johnson", "Cy Young", "Roger Clemens"],
    correctAnswer: "Nolan Ryan"

}, {
    question: "The MLB career leader in times hit by pitch is:",
    answers: ["Don Baylor", "Chase Utley", "Craig Biggio", "Hughie Jennings"],
    correctAnswer: "Hughie Jennings"

}, {
    question: "The MLB career leader in RBI is:",
    answers: ["Barry Bonds", "Hank Aaron", "Jimmie Foxx", "Alex Rodriguez"],
    correctAnswer: "Hank Aaron"

}, {
    question: "The MLB career leader in hits is:",
    answers: ["Ty Cobb", "Pete Rose", "Hank Aaron", "Honus Wagner"],
    correctAnswer: "Pete Rose"

}, {
    question: "The MLB career leader Cy Young awards is:",
    answers: ["Greg Maddux", "Randy Johnson", "Roger Clemens", "Clayton Kershaw"],
    correctAnswer: "Roger Clemens"

}, {
    question: "The MLB career leader in saves is:",
    answers: ["Trevor Hoffman", "Dennis Eckersley", "Lee Smith", "Mariano Rivera"],
    correctAnswer: "Mariano Rivera"

}, {
    question: "The MLB career leader in Gold Glove awards is:",
    answers: ["Ozzie Smith", "Omar Vizquel", "Brooks Robinson", "Greg Maddux"],
    correctAnswer: "Greg Maddux"

},]

var game = {
    correct: 0,
    incorrect: 0,
    counter: 90,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            game.done();
        }
    },

    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#mainBox").prepend("<h2>Time Remaining: <span id='counter'> 90 </span> Seconds</h2>");
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#mainBox").append("<h3><hr>" + questions[i].question + "</h3>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#mainBox").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        $("#mainBox").append("<hr><button id='end'>Done</button>");
        $("#end").addClass("btn btn-primary");
    },

    done: function(){
        $.each($("input[name='question-0']:checked"), function(){
            if ($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function(){
            if ($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function(){
            if ($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function(){
            if ($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function(){
            if ($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function(){
            if ($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function(){
            if ($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function(){
            if ($(this).val()==questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },

    result: function(){
        clearInterval(timer);
        $("#subline").remove();
        
        $("#mainBox").html("<h2>Game Over!</h2>");
        $("#mainBox").append("<h3>Correct Answers: " + this.correct + "</h3>");
        $("#mainBox").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $("#mainBox").append("<h3>Unanswered: " +(questions.length-(this.incorrect+this.correct))+ "</h3>");

    }

}

