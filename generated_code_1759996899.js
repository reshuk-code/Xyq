```javascript
// Simple utility function: capitalize the first letter of a string

function capitalizeFirstLetter(str) {
  if (!str) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example usage (in a browser environment, requires an HTML element with id="output"):
// document.getElementById("output").textContent = capitalizeFirstLetter("hello world");

// Small DOM manipulation snippet:  add a button to the page that alerts "Hello!" when clicked

function createAlertButton() {
  const button = document.createElement("button");
  button.textContent = "Click Me!";
  button.addEventListener("click", () => {
    alert("Hello!");
  });
  document.body.appendChild(button);
}

// Call it once the DOM is loaded (example):
// document.addEventListener("DOMContentLoaded", createAlertButton);


// Small game snippet: Rock Paper Scissors (console based)

function rockPaperScissors() {
  const choices = ["rock", "paper", "scissors"];

  function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function determineWinner(playerChoice, computerChoice) {
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

  const playerChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();
  const computerChoice = getComputerChoice();

  if (!choices.includes(playerChoice)) {
    console.log("Invalid choice. Please choose rock, paper, or scissors.");
    return;
  }

  console.log("You chose: " + playerChoice);
  console.log("Computer chose: " + computerChoice);
  console.log(determineWinner(playerChoice, computerChoice));
}

// To play, call the function:  rockPaperScissors();
```