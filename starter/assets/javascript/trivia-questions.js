let myTriviaQuestions = [{
    question: "Inside which HTML element do we put the Javascript?",
    answers: ["<scripting>", "<script>", "<js>", "<javascript>"]           
},
{
    question: "How do you write 'Hello World' in an alert box",
    answers: ["alert('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');", "msg('Hello World');"]
},
{
    question: "How do you write an IF statement in Javascript?",
    answers: ["if i == 5 then", "if i = 5", "if i = 5 then", "if(i == 5)"]
},
{
    question: "How does a FOR loop start?",
    answers: ["for i = 1 to 5", "for(i <= 5; i++", "for(i = 0; i <= 5)", "for(i = 0; i <= 5; i++)"]
},
{
    question: "How can you add a comment in Javascript?",
    answers: ["<!--This is a comment-->", "//This is a comment", "'This is a comment", "This is a comment"]
},
{
    question: "What is the correct way to write a Javascript array?",
    answers: ["let colors = 'red', 'green', 'blue'", "let colors = (1:'red', 2:'green', 3:'blue'", "let colors = ['red', 'green', 'blue'", "let colors = red, green, blue"]
},
{
    question: "Which operator is used to assign a value to a variable?",
    answers: ["=", "*", "-", "x"]
},
{
    question: "What will the following code return: Boolean(10 > 9)",
    answers: ["NaN", "True", "False", "None of the Above"]
},
{
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: ["onclick", "onmouseclick", "onmouseover", "onchange"]
},
{
    question: "How do you round the number 7.25, to the nearest integer?",
    answers: ["round(7.25)", "Math.round(7.25)", "Math.rnd(7.25)", "rnd(7.25)"]
}
];

let startButton = document.getElementById("start");
let timer = document.getElementById("time")
let questions = document.getElementById("questions")
questions.style.display = "block"

startButton.addEventListener("click", function () {
    let time = 200;
    timer.innerHTML = time;
    questions.innerHTML = myTriviaQuestions.question && myTriviaQuestions.answers
    console.log(questions.innerHTML)

    let interval = setInterval(function () {
        time--;
        timer.innerHTML = time;
        if(time === 0) {
            clearInterval(interval);
        }
    }, 1000)
}
)
