```javascript
function guessTheNumber() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let guess;
  let attempts = 0;

  while (parseInt(guess) !== secretNumber) {
    guess = prompt("Guess a number between 1 and 100:");

    if (guess === null) {
      alert("Game cancelled.");
      return;
    }

    if (isNaN(parseInt(guess))) {
      alert("Invalid input. Please enter a number.");
      continue;
    }

    attempts++;

    if (parseInt(guess) < secretNumber) {
      alert("Too low!");
    } else if (parseInt(guess) > secretNumber) {
      alert("Too high!");
    }
  }

  alert(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
}

//guessTheNumber(); //Uncomment to play the game when the script is loaded.
```