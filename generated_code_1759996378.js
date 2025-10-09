```javascript
// Simple Utility Function: String Reverser

function reverseString(str) {
  return str.split("").reverse().join("");
}


// Small Game Snippet: Number Guessing Game (console-based)

function numberGuessingGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let guess;
  let attempts = 0;

  while (guess !== secretNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
    attempts++;

    if (isNaN(guess)) {
      alert("Invalid input. Please enter a number.");
      continue;
    }

    if (guess < secretNumber) {
      alert("Too low!");
    } else if (guess > secretNumber) {
      alert("Too high!");
    } else {
      alert(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
    }
  }
}


// DOM Manipulation Snippet: Simple Toggle

function toggleVisibility(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.display = (element.style.display === "none") ? "block" : "none";
  }
}
```