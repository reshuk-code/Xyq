```javascript
// Simple Utility Function: Generate Random Hex Color

function getRandomHexColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Example Usage (in a browser environment):

// document.body.style.backgroundColor = getRandomHexColor();


// ------------------------------------------------------
// Small DOM Manipulation Snippet: Adding List Items

function addListItem(text) {
  const ul = document.getElementById('myList'); // Assumes <ul id="myList"> exists
  if (!ul) return;

  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

// Example Usage (in a browser environment):

// addListItem("New Item!");


// ------------------------------------------------------
// Simple Game Snippet: Number Guessing

function numberGuessingGame(maxNumber = 100) {
  const secretNumber = Math.floor(Math.random() * maxNumber) + 1;
  let attempts = 0;

  return function guess(userGuess) {
    attempts++;
    userGuess = Number(userGuess);

    if (isNaN(userGuess)) {
      return "Invalid input. Please enter a number.";
    }

    if (userGuess === secretNumber) {
      return `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
    } else if (userGuess < secretNumber) {
      return "Too low. Try again.";
    } else {
      return "Too high. Try again.";
    }
  };
}

// Example Usage:

// const game = numberGuessingGame();
// console.log(game(50)); // Output: "Too low. Try again." or "Too high. Try again."
// console.log(game(75)); // Output: ...
// console.log(game(secretNumber)); // Output: Congratulations! ...

```