```javascript
// Simple utility function: Palindrome checker

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}


// Small DOM manipulation snippet:  Adding a list item

function addListItem(listId, text) {
  const list = document.getElementById(listId);
  if (list) {
    const listItem = document.createElement('li');
    listItem.textContent = text;
    list.appendChild(listItem);
  }
}


//  Example of using the DOM manipulation:
// addListItem("myList", "New Item");



// Small game: Number Guessing Game (console-based)

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

// To start the game (console-based):
// numberGuessingGame();
```