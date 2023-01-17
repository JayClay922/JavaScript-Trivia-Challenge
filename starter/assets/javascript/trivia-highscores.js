let highscoreInitials = JSON.parse(localStorage.getItem("initials"));
let scores = JSON.parse(localStorage.getItem("score"))

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

