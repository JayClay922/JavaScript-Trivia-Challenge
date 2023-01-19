let highscoreInitials = JSON.parse(localStorage.getItem("initialsEl"));
let scores = JSON.parse(localStorage.getItem("score"))
console.log(highscoreInitials)
console.log(scores)

document.getElementById("highscores").innerText.push() = highscoreInitials.concat(scores)




let clearButton = document.getElementById("clear");

clearButton.addEventListener("click", clearHighscores);

function clearHighscores() {
  const highscoresList = document.getElementById("highscores");
  highscoresList.innerHTML = "";
  if(localStorage.getItem("highscores")){
    localStorage.removeItem("highscores");
  }
}

