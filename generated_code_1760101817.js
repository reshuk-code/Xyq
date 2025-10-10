```javascript
// Utility function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Example usage (optional)
// console.log(celsiusToFahrenheit(25));

// Simple DOM manipulation script to add a red border to the first paragraph

function addRedBorderToFirstParagraph() {
  const firstParagraph = document.querySelector("p");
  if (firstParagraph) {
    firstParagraph.style.border = "2px solid red";
  }
}

// Example usage (optional - needs to be called after DOM is loaded)
// document.addEventListener('DOMContentLoaded', addRedBorderToFirstParagraph);

// Small game: Simple number guessing game

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

// Example usage (optional)
// numberGuessingGame();
```