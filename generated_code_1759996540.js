```javascript
// Simple utility function:  capitalizeFirstLetter
function capitalizeFirstLetter(string) {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Example usage:
// console.log(capitalizeFirstLetter("hello")); // Output: Hello
// console.log(capitalizeFirstLetter(""));      // Output: ""

// Small DOM manipulation snippet: adding a list item
function addListItem(text) {
  const ul = document.getElementById("myList");
  if (!ul) return; // Prevent errors if list doesn't exist
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
}

// Example usage (assuming you have <ul id="myList"></ul> in your HTML):
// addListItem("Item 1");
// addListItem("Item 2");

// A small number guessing game (in the console)
function numberGuessingGame() {
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  let guess;

  while (true) {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));

    if (isNaN(guess)) {
      alert("Invalid input. Please enter a number.");
      continue;
    }

    if (guess < 1 || guess > 10) {
      alert("Please enter a number between 1 and 10.");
      continue;
    }

    if (guess === secretNumber) {
      alert("Congratulations! You guessed the number!");
      break;
    } else if (guess < secretNumber) {
      alert("Too low. Try again.");
    } else {
      alert("Too high. Try again.");
    }
  }
}

//Example usage:
// numberGuessingGame();
```