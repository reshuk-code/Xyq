```javascript
// Simple Rock Paper Scissors game

function rockPaperScissors(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  console.log("Player choice:", playerChoice);
  console.log("Computer choice:", computerChoice);

  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

// Example usage:
// console.log(rockPaperScissors("rock"));
```