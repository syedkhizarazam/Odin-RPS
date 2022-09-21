const buttons = document.querySelectorAll("input");
const main = document.querySelector("main");
let compScore = 0;
let playerScore = 0;
let compOptions = ["Rock", "Paper", "Scissors"];

function startAnimation() {
  welcomePost.classList.add("drop-down");
}

function getComputerChoice() {
  return compOptions[Math.floor(Math.random() * compOptions.length)];
}

function disableButton() {
  buttons.forEach((elem) => {
    elem.disabled = true;
  });
}

let computerPlay = getComputerChoice();

function playRound(playerSelection) {
  let result = "";
  let computerPlay = getComputerChoice();

  if (
    (playerSelection == "Rock" && computerPlay == "Scissors") ||
    (playerSelection == "Paper" && computerPlay == "Rock") ||
    (playerSelection == "Scissors" && computerPlay == "Paper")
  ) {
    playerScore += 1;

    result =
      "You win! " +
      playerSelection +
      " beats " +
      computerPlay +
      "  <br> Player: " +
      playerScore +
      "    Computer: " +
      compScore;

    if (playerScore == 5) {
      result += "      You won!";
      disableButton();
    }
  } else if (playerSelection == computerPlay) {
    result =
      "Draw! You both chose " +
      playerSelection +
      "  <br> Player: " +
      playerScore +
      "    Computer: " +
      compScore;
  } else {
    compScore += 1;

    result =
      "You lose! " +
      computerPlay +
      " beats " +
      playerSelection +
      "  <br> Player: " +
      playerScore +
      "    Computer: " +
      compScore;

    if (compScore == 5) {
      result += "      You lost!";
      disableButton();
    }
  }
  document.getElementById("result").innerHTML = result;
  return;
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.value);
  });
});
