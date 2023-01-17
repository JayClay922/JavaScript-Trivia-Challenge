let highscoreInitials = localStorage.getItem("initials");
console.log(highscoreInitials)
document.getElementById("highscores").innerText = highscoreInitials;

let clearButton = document.getElementById("clear");

clearButton.addEventListener("click", clearHighscores);

function clearHighscores() {
  const highscoresList = document.getElementById("highscores");
  highscoresList.innerHTML = "";
  if(localStorage.getItem("highscores")){
    localStorage.removeItem("highscores");
  }
}

