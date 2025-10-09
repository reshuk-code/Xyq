```javascript
// Utility function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Example usage:
// console.log(celsiusToFahrenheit(25)); // Output: 77

// DOM Manipulation Snippet: Adding a new list item to a list
/*
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
*/

function addListItem(text) {
  const list = document.getElementById("myList");
  const newItem = document.createElement("li");
  newItem.textContent = text;
  list.appendChild(newItem);
}

// Example usage:
// addListItem("Item 3");

// Small Game:  Simple Number Guessing Game (console-based)

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

// Example usage:
// numberGuessingGame();
```