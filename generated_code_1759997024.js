```javascript
// Simple utility function to capitalize the first letter of a string.
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Example DOM manipulation script (add a button that alerts "Hello World!")
document.addEventListener("DOMContentLoaded", function() {
  const button = document.createElement("button");
  button.textContent = "Say Hello";
  button.addEventListener("click", function() {
    alert("Hello World!");
  });
  document.body.appendChild(button);
});

// Small number guessing game in the console.
function numberGuessingGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let guess = 0;
  let attempts = 0;

  while (guess !== secretNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
    attempts++;

    if (isNaN(guess)) {
      console.log("Invalid input. Please enter a number.");
    } else if (guess < secretNumber) {
      console.log("Too low!");
    } else if (guess > secretNumber) {
      console.log("Too high!");
    } else {
      console.log(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
    }
  }
}

// To start the number guessing game (in a browser console):
// numberGuessingGame();
```