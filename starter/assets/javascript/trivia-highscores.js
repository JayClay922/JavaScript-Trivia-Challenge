let highscoreInitials = JSON.parse(localStorage.getItem("initialsEl"));



for (i = 0; i < highscoreInitials.length; i++) {
  let showScores = document.createElement("li")
  showScores.innerText = highscoreInitials[i].initialsEl.concat( "  " + highscoreInitials[i].score)
  document.getElementById("highscores").append(showScores)
}





let clearButton = document.getElementById("clear");

clearButton.addEventListener("click", clearHighscores);

function clearHighscores() {
  const highscoresList = document.getElementById("highscores");
  highscoresList.innerHTML = "";
  if(localStorage.getItem("highscores")){
    localStorage.removeItem("highscores");
  }
}

