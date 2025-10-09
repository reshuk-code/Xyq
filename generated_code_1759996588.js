```javascript
// Simple utility function: capitalize first letter of each word in a string

function capitalizeWords(str) {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage (for testing):
// console.log(capitalizeWords("hello world")); // Output: Hello World
// console.log(capitalizeWords("  multiple   spaces   ")); // Output: Multiple Spaces

// ------------------------------------------------------------

// Small DOM manipulation script: toggles visibility of an element

function toggleVisibility(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.display = element.style.display === 'none' ? 'block' : 'none';
  }
}

// Example usage (requires an HTML element with id 'myElement'):
// <button onclick="toggleVisibility('myElement')">Toggle</button>
// <div id="myElement" style="display: none;">This element can be toggled.</div>

// ------------------------------------------------------------

// Small game: simple number guessing game

function numberGuessingGame() {
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  let guess;

  do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));

    if (isNaN(guess)) {
      alert("Invalid input. Please enter a number.");
    } else if (guess < secretNumber) {
      alert("Too low!");
    } else if (guess > secretNumber) {
      alert("Too high!");
    }
  } while (guess !== secretNumber);

  alert("Congratulations! You guessed the number " + secretNumber + "!");
}

// Example usage:
// numberGuessingGame();
```