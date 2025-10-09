```javascript
// Simple Number Guessing Game

function numberGuessingGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let guess;
  let attempts = 0;

  while (true) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
    attempts++;

    if (isNaN(guess)) {
      alert("Invalid input. Please enter a number.");
      continue;
    }

    if (guess === secretNumber) {
      alert(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
      break;
    } else if (guess < secretNumber) {
      alert("Too low. Try again.");
    } else {
      alert("Too high. Try again.");
    }
  }
}

numberGuessingGame();

```