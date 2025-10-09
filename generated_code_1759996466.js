```javascript
// Utility function:  Capitalize the first letter of each word in a string.
function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


// Small game:  Simple number guessing game (console-based)

function numberGuessingGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let guess;
  let attempts = 0;

  while (guess !== secretNumber) {
    attempts++;
    guess = parseInt(prompt("Guess a number between 1 and 100:"));

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



// DOM manipulation: Add a class to all paragraphs on the page.
function addClassToParagraphs(className) {
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(p => p.classList.add(className));
}



// Example usage (comment out if not needed for testing in a browser)
// console.log(capitalizeWords("hello world"));
// numberGuessingGame();
// addClassToParagraphs("highlighted");
```