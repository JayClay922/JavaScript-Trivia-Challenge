let highscoreInitials = JSON.parse(localStorage.getItem("initialsEl"));



for (i = 0; i < highscoreInitials.length; i++) {
  console.log(highscoreInitials[i])
  document.getElementById("highscores").innerText += highscoreInitials[i].initialsEl.concat(highscoreInitials[i].score)
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

