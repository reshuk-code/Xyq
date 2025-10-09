```javascript
// Simple DOM Manipulation Script: Add a new paragraph to the body

function addParagraph(text) {
  const p = document.createElement('p');
  p.textContent = text;
  document.body.appendChild(p);
}

// Example usage:
addParagraph("This is a new paragraph added by JavaScript.");


// Utility function: Capitalize the first letter of each word in a string

function capitalizeWords(str) {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example Usage:
// console.log(capitalizeWords("this is a test string")); // Output: This Is A Test String


// Small Game: Number Guessing Game (console-based)
function numberGuessingGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let guess;
  let attempts = 0;

  while (guess !== secretNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
    attempts++;

    if (isNaN(guess)) {
      alert("Invalid input. Please enter a number.");
    } else if (guess < secretNumber) {
      alert("Too low!");
    } else if (guess > secretNumber) {
      alert("Too high!");
    } else {
      alert(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
    }
  }
}

// To start the game:
// numberGuessingGame();
```