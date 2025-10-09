```javascript
// Simple Utility Function:  Capitalize first letter of each word in a string.
function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage (can be removed for pure function snippet):
// console.log(capitalizeWords("hello world this is a test")); // Output: Hello World This Is A Test



//  Small DOM Manipulation Snippet:  Adds a list of items to a ul element.
function addListItems(listId, items) {
  const list = document.getElementById(listId);
  if (!list) return; // Prevent errors if list doesn't exist.

  items.forEach(itemText => {
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
  });
}

// Example usage (can be removed for pure function snippet):
// addListItems('myList', ['Item 1', 'Item 2', 'Item 3']); // Assuming you have a <ul id="myList"> in your HTML.




// Simple Game Snippet:  Guessing game.
function guessingGame() {
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  let guess;

  while (guess !== secretNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));

    if (isNaN(guess) || guess < 1 || guess > 10) {
      alert("Invalid input. Please enter a number between 1 and 10.");
      continue;
    }

    if (guess < secretNumber) {
      alert("Too low!");
    } else if (guess > secretNumber) {
      alert("Too high!");
    } else {
      alert("Congratulations! You guessed the number!");
    }
  }
}

// Example usage (can be removed for pure function snippet):
// guessingGame();
```