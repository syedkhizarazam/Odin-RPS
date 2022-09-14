console.log("Hello World");

let compOptions = ["Rock", "Paper", "Scissors"];
function getComputerChoice(x) {
  return compOptions[Math.floor(Math.random() * compOptions.length)];
}

console.log(getComputerChoice());
