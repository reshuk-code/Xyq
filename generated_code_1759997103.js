```javascript
// Simple utility function: capitalize the first letter of a string

function capitalizeFirstLetter(str) {
  if (!str) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example Usage (in a browser environment):

function updateTitle() {
  const titleElement = document.getElementById('myTitle');
  if (titleElement) {
    titleElement.textContent = capitalizeFirstLetter(titleElement.textContent);
  }
}

// If you have an element with id="myTitle", you can call updateTitle()
// to capitalize its text.  Example HTML: <h1 id="myTitle">hello world</h1>

// Simple game (number guessing game) - console-based

function numberGuessingGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let guess = 0;
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

//numberGuessingGame(); // Call to start the game (console based)
```