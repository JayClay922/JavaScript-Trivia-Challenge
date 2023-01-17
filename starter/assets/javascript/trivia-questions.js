let myTriviaQuestions = [{
    question: "1. Inside which HTML element do we put the Javascript?",
    answers: ["<scripting>", "<script>", "<js>", "<javascript>"]           
},
{
    question: "2. How do you write 'Hello World' in an alert box",
    answers: ["alert('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');", "msg('Hello World');"]
},
{
    question: "3. How do you write an IF statement in Javascript?",
    answers: ["if i == 5 then", "if i = 5", "if i = 5 then", "if(i == 5)"]
},
{
    question: "4. How does a FOR loop start?",
    answers: ["for i = 1 to 5", "for(i <= 5; i++", "for(i = 0; i <= 5)", "for(i = 0; i <= 5; i++)"]
},
{
    question: "5. How can you add a comment in Javascript?",
    answers: ["<!--This is a comment-->", "//This is a comment", "'This is a comment", "This is a comment"]
},
{
    question: "6. What is the correct way to write a Javascript array?",
    answers: ["let colors = 'red', 'green', 'blue'", "let colors = (1:'red', 2:'green', 3:'blue'", "let colors = ['red', 'green', 'blue']", "let colors = red, green, blue"]
},
{
    question: "7. Which operator is used to assign a value to a variable?",
    answers: ["=", "*", "-", "x"]
},
{
    question: "8. What will the following code return: Boolean(10 > 9)",
    answers: ["NaN", "True", "False", "None of the Above"]
},
{
    question: "9. Which event occurs when the user clicks on an HTML element?",
    answers: ["onclick", "onmouseclick", "onmouseover", "onchange"]
},
{
    question: "10. How do you round the number 7.25, to the nearest integer?",
    answers: ["round(7.25)", "Math.round(7.25)", "Math.rnd(7.25)", "rnd(7.25)"]
}
];

correctAnswers = ["<script>", "alert('Hello World');", "if(i == 5)", "for(i = 0; i <= 5; i++)", "//This is a comment", "let colors = ['red', 'green', 'blue']", "=", "True", "onclick", "Math.round(7.25)"]

let index = 0
let time = 100
let interval;

let startButton = document.getElementById("start");
let timer = document.getElementById("time")
let questions = document.getElementById("questions")
let questionTitle = document.getElementById("question-title")
let choices = document.getElementById("choices")
let initialsEl = document.getElementById("initials")
let submitBtn = document.getElementById("submit")


function showQuestions() {
    questions.innerHTML = myTriviaQuestions[index].question;
    choices.innerHTML = "";
    for(let i = 0; i < myTriviaQuestions[index].answers.length; i++) {
        let btn = document.createElement("button")
        btn.textContent = myTriviaQuestions[index].answers[i]
        btn.onclick = answerClickHandler;
        choices.appendChild(btn)
    };

}


function answerClickHandler() {
    if(this.textContent !== correctAnswers[index]) {
        time -= 10
        let message = document.createElement("div");
        message.classList.add("wrongMessage");
        message.style.borderTop = "2px solid red";
        message.innerHTML = "Wrong!!";
        document.body.appendChild(message);
        setTimeout(() => {
            message.remove();
        }, 400);
    
    if(time < 0) {
        time = 0
    }
    timer.innerHTML = time
} else {
    let message = document.createElement("div");
    message.classList.add("correctMessage");
    message.style.borderTop = "2px solid green";
    message.innerHTML = "Correct!!";
    document.body.appendChild(message);
    setTimeout(() => {
        message.remove();
    }, 400);

}
index++;
if(index === myTriviaQuestions.length) {
    endQuiz();
} else {
    showQuestions();
}
}


function endQuiz() {
    choices.innerHTML = "";
    clearInterval(interval);
    let endDiv = document.getElementById("end-screen");
    endDiv.removeAttribute("class");
    let finalScore = document.getElementById("final-score");
    finalScore.textContent = time;
    questions.setAttribute("class", "hide")
}

let score = time

submitBtn.addEventListener("click", function (event) {
    location.href = "trivia-highscores.html"
    let initialsEl = []
    let time = []
    console.log(time)
    localStorage.setItem("initials", JSON.stringify(initialsEl.value));
    localStorage.setItem("score", JSON.stringify(time))

})


startButton.addEventListener("click", function () {
    let startDiv = document.getElementById("start-screen");
    startDiv.setAttribute("class", "hide");
    questions.removeAttribute("class")
    timer.innerHTML = time;
    
    showQuestions()

    interval = setInterval(function () {
        time--;
        timer.innerHTML = time;
        if(time === 0) {
            clearInterval(interval);
            endQuiz()
        }
    }, 1000)
}
)

