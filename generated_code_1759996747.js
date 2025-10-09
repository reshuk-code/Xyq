```javascript
// Simple utility function: Random integer generator

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Small DOM manipulation script: Adding a list item to a UL.

function addListItem(listId, text) {
  const list = document.getElementById(listId);
  if (!list) return;

  const newItem = document.createElement('li');
  newItem.textContent = text;
  list.appendChild(newItem);
}

// Example usage (requires an HTML element with id "myList"):
// addListItem("myList", "New item!");

// Small game snippet: Number guessing game (minimal)

function guessNumber(secret, guess) {
  if (guess === secret) {
    return "You guessed it!";
  } else if (guess < secret) {
    return "Too low!";
  } else {
    return "Too high!";
  }
}

// Example Usage:
// console.log(guessNumber(5, 3)); // "Too low!"
// console.log(guessNumber(5, 7)); // "Too high!"
// console.log(guessNumber(5, 5)); // "You guessed it!"
```