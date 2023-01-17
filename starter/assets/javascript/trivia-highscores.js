let highscoreInitials = localStorage.getItem("initials");
let scores = localStorage.getItem("score")
console.log(highscoreInitials)

document.getElementById("highscores").innerText = highscoreInitials.concat("  ", scores);


let clearButton = document.getElementById("clear");

clearButton.addEventListener("click", clearHighscores);

function clearHighscores() {
  const highscoresList = document.getElementById("highscores");
  highscoresList.innerHTML = "";
  if(localStorage.getItem("highscores")){
    localStorage.removeItem("highscores");
  }
}

