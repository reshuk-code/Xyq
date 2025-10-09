```javascript
// Utility function to capitalize the first letter of a string
const capitalizeFirstLetter = (string) => {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Example usage:
// console.log(capitalizeFirstLetter("hello world")); // Output: Hello world

// Small DOM manipulation script: Adds a new list item to a UL with a specific ID

function addListItem(listId, text) {
  const list = document.getElementById(listId);
  if (!list) return;

  const newListItem = document.createElement("li");
  newListItem.textContent = text;
  list.appendChild(newListItem);
}

// Example usage (assuming you have a <ul id="myList"></ul> in your HTML):
// addListItem("myList", "New item added by script!");

// Simple number guessing game (console-based)
function numberGuessingGame() {
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  let guess;

  while (guess !== secretNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));

    if (isNaN(guess)) {
      alert("Invalid input. Please enter a number.");
    } else if (guess < secretNumber) {
      alert("Too low!");
    } else if (guess > secretNumber) {
      alert("Too high!");
    }
  }

  alert("Congratulations! You guessed the number " + secretNumber + "!");
}

//To start the game call
//numberGuessingGame();
```