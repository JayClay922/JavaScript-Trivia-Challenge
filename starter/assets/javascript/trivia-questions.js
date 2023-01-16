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
    answers: ["let colors = 'red', 'green', 'blue'", "let colors = (1:'red', 2:'green', 3:'blue'", "let colors = ['red', 'green', 'blue'", "let colors = red, green, blue"]
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

let startButton = document.getElementById("start");
let timer = document.getElementById("time")
let questions = document.getElementById("questions")
let questionTitle = document.getElementById("question-title")
let choices = document.getElementById("choices")
questions.style.display = "block"

function answerClickHandler() {
    if(this.textContent !== correctAnswers[index]) {
        time -= 15
    
    if(time < 0) {
        time = 0
    }
    timer.innerHTML = time
    alert("wrong answer press OK to continue");
} else {
    alert("right asnwer press OK  to continue")
}
index++;
if(index === questions.length) {
    endQuiz();
} else {
    showQuestions();
}
}

function endQuiz() {
    //to be completed
    clearInterval(interval);
    let endDiv = document.getElementById("end-screen");
    endDiv.removeAttribute("class");
    let finalScore = document.getElementById("final-score");
    finalScore.textContent = time;
    questions.setAttribute("class", "hide")
}
function showQuestions() {
    questions.innerHTML = myTriviaQuestions[index].question;
    choices.innerHTML = "";
    for(let i = 0; i < myTriviaQuestions[index].answers.length; i++) {
        let btn = document.createElement("button")
        btn.textContent = myTriviaQuestions[index].answers[i]
        btn.onclick = answerClickHandler;
        choices.appendChild(btn)



        // btn.addEventListener("click", function () {
        //     if(btn.textContent === correctAnswers[i]) {
        //        let nextQuestion = questions.innerHTML[i]++
        //     }
        // })
    };

}
let time = 200
let interval;
startButton.addEventListener("click", function () {
    // time = 200;
    timer.innerHTML = time;
    
    showQuestions()

    interval = setInterval(function () {
        time--;
        timer.innerHTML = time;
        if(time === 0) {
            clearInterval(interval);
        }
    }, 1000)
}
)

