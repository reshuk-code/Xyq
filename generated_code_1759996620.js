```javascript
// Simple Rock Paper Scissors game

function rockPaperScissors(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  return `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}

// Example usage (in a browser environment or with node if you install prompt-sync):
// const prompt = require('prompt-sync')();
// const playerInput = prompt("Choose rock, paper, or scissors: ");
// console.log(rockPaperScissors(playerInput));

// DOM manipulation example (needs to be in an HTML file with an element with id "output"):

function displayResult(playerChoice) {
  const result = rockPaperScissors(playerChoice);
  document.getElementById("output").textContent = result;
}
```