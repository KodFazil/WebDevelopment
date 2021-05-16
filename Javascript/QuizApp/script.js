function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;    
} 

Question.prototype.checkAnswer = function(answer) {
    return this.answer === answer;    
}

var q1 = new Question("which is one ?", ["0", "1", "2", "3"], "1");
var q2 = new Question("which is two ?", ["1", "2", "3", "4"], "2");
var q3 = new Question("which is three ?", ["0", "1", "2", "3"], "3");

/* check if check answer works correctly
console.log(q1.checkAnswer("1"));
console.log(q2.checkAnswer("3"));
console.log(q3.checkAnswer("3")); 
*/

function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

// get questions to questions to use in Quiz 
var questions = [q1, q2, q3];

// get question
Quiz.prototype.getQuestion = function() {
    return this.questions[this.questionIndex];
}

// is Quiz finished 
Quiz.prototype.isFinished = function() {
    return this.questions.length == this.questionIndex;
}

// is Correct
Quiz.prototype.isCorrect = function(answer) {
    var currentQuestion = this.getQuestion();
    if (currentQuestion.checkAnswer(answer)) {
        //console.log("given answer " + answer + " is correct");
        this.score++;
    } 
    this.questionIndex++;
}

// Quiz start
var quiz = new Quiz(questions);

/* if quiz works
console.log(quiz.getQuestion());
quiz.isCorrect("2");
console.log("score: " + quiz.score);
console.log("is quiz finished: " + quiz.isFinished());

console.log(quiz.getQuestion());
quiz.isCorrect("2");
console.log("score: " + quiz.score);
console.log("is quiz finished: " + quiz.isFinished());

console.log(quiz.getQuestion());
quiz.isCorrect("2");
console.log("score: " + quiz.score);
console.log("is quiz finished: " + quiz.isFinished());
*/

loadQuestion();

function loadQuestion() {
    if (quiz.isFinished()) {
        showScore();
        showProgress();
    }
    else {
        var question = quiz.getQuestion();
        var choices = question.choices;
        document.querySelector("#question").textContent = question.text;
        for (var i = 0; i < choices.length; i++) {
            var element = document.querySelector("#choice" + i);
            element.innerHTML = choices[i];
            next("btn"+i, choices[i]);
        }
        showProgress();
    }
}

function next(id, givenChoice) {
    var buton = document.getElementById(id);
    buton.onclick = function() {
        quiz.isCorrect(givenChoice);
        loadQuestion();
    } 
}  

function showScore() {
    var html = `<h5>Score: ${quiz.score} </h5> <hr color="gray">`;
    document.querySelector(".card-body").innerHTML = html;
}

function showProgress() {
    var html = "Question: " + (quiz.questionIndex + 1);
    if (quiz.questionIndex == quiz.questions.length) {
        document.getElementById("progress").innerHTML = "Quiz End";     
    } 
    else {
        document.getElementById("progress").innerHTML = html;    
    }
}








