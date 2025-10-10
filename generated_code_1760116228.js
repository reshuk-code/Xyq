```javascript
// Simple utility function: capitalize a string
function capitalizeString(str) {
  if (!str) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Small game snippet: simple number guessing game
function numberGuessingGame() {
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  let guess;
  let attempts = 0;

  while (guess !== secretNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
    attempts++;

    if (isNaN(guess)) {
      alert("Invalid input. Please enter a number.");
    } else if (guess < secretNumber) {
      alert("Too low!");
    } else if (guess > secretNumber) {
      alert("Too high!");
    }
  }

  alert(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
}


// DOM Manipulation Script: add a class to all p elements.
function addClassToParagraphs(className) {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => p.classList.add(className));
}


// Example usage (uncomment to run in appropriate environment):
// numberGuessingGame();
// addClassToParagraphs('highlighted');
```