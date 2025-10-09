```javascript
// Simple utility function: Capitalize the first letter of a string.
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Example usage (can be run in a browser console or Node.js):
// console.log(capitalizeFirstLetter("hello")); // Output: Hello

// Small DOM manipulation script: Change the background color of the body on button click.
/*
<button id="myButton">Change Background</button>
*/

document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("myButton");

  if (button) {
    button.addEventListener("click", function() {
      document.body.style.backgroundColor = "lightblue";
    });
  }
});

// Simple number guessing game snippet:

function numberGuessingGame() {
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  let guess;

  do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));

    if (isNaN(guess) || guess < 1 || guess > 10) {
      alert("Invalid input. Please enter a number between 1 and 10.");
    } else if (guess < secretNumber) {
      alert("Too low!");
    } else if (guess > secretNumber) {
      alert("Too high!");
    } else {
      alert("Congratulations! You guessed the number " + secretNumber + "!");
    }
  } while (guess !== secretNumber);
}

// To run the game, call the function:
// numberGuessingGame();
```