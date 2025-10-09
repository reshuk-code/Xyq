```javascript
// Simple utility function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Small DOM manipulation snippet: adding a list item to an existing list
function addListItem(listId, itemText) {
  const list = document.getElementById(listId);
  if (list) {
    const listItem = document.createElement("li");
    listItem.textContent = itemText;
    list.appendChild(listItem);
  }
}

// Example usage (needs an HTML page with <ul id="myList"></ul>)
// addListItem("myList", "New Item");

// Simple number guessing game (console-based)
function numberGuessingGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let guess;
  let attempts = 0;

  while (guess !== secretNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
    attempts++;

    if (isNaN(guess)) {
      alert("Invalid input. Please enter a number.");
    } else if (guess < secretNumber) {
      alert("Too low!");
    } else if (guess > secretNumber) {
      alert("Too high!");
    } else {
      alert(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
    }
  }
}

// numberGuessingGame(); // Uncomment to play

// A function to generate a random hex color code
function getRandomHexColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
```