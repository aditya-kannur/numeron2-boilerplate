var scoreBoard = document.getElementById("score-board");
var playAgainButton = document.getElementById("play-again-button");

var score = localStorage.getItem("score");
if (score === null) {
    score = 0;
}
scoreBoard.innerHTML = score;

playAgainButton.onclick = () => {
    localStorage.setItem("score", 0);
    location.href = "./game.html";
};
