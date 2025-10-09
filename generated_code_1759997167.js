```javascript
// Simple utility function: Capitalize first letter of a string

function capitalizeFirstLetter(string) {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Example usage:
// console.log(capitalizeFirstLetter("hello")); // Output: Hello

// Small DOM manipulation script: Toggle visibility of an element

function toggleVisibility(elementId) {
  const element = document.getElementById(elementId);
  if (!element) return;

  element.style.display = (element.style.display === "none" ? "block" : "none");
}

// HTML snippet for toggleVisibility example:
// <button onclick="toggleVisibility('myElement')">Toggle</button>
// <div id="myElement" style="display: none;">This is the element to toggle.</div>

// Simple Game: Number Guessing

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

// To play: numberGuessingGame();
```