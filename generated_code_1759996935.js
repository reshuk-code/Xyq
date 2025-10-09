```javascript
// Utility function to capitalize the first letter of each word in a string
function capitalizeWords(str) {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage (run this in the browser console or a JS environment)
// console.log(capitalizeWords("this is a test string")); // Output: This Is A Test String


// Small DOM manipulation script - adds a list of items to a ul element.
function addListItems(listItems, listId = "myList") {
  const list = document.getElementById(listId);
  if (!list) {
    console.error("List element with id '" + listId + "' not found.");
    return;
  }

  listItems.forEach(itemText => {
    const listItem = document.createElement("li");
    listItem.textContent = itemText;
    list.appendChild(listItem);
  });
}

// Example usage (ensure you have a <ul id="myList"></ul> in your HTML)
// addListItems(["Item 1", "Item 2", "Item 3"]);

// Simple number guessing game snippet
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

//To Run numberGuessingGame()
```