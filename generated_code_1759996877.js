```javascript
// Simple utility function: capitalize first letter of each word in a string

function capitalizeWords(str) {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage (for testing):
// console.log(capitalizeWords("this is a test string"));

// DOM manipulation snippet:  Adds a list item to a ul with id "myList"

function addListItem(text) {
  const ul = document.getElementById("myList");
  if (!ul) return; // Exit if the ul doesn't exist

  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
}

// Example usage (assuming a <ul> with id "myList" exists in the HTML):
// addListItem("New item added");

// Small Game:  Simple number guessing game logic (requires HTML input & feedback elements)

function guessNumber(secretNumber, guess) {
  guess = parseInt(guess);
  if (isNaN(guess)) {
    return "Invalid input. Please enter a number.";
  }

  if (guess === secretNumber) {
    return "Congratulations! You guessed it.";
  } else if (guess < secretNumber) {
    return "Too low. Try again.";
  } else {
    return "Too high. Try again.";
  }
}

// Example usage (assuming secretNumber is defined elsewhere, e.g., randomly generated)
// let secretNumber = 5;
// let userGuess = document.getElementById("guessInput").value; // Hypothetical input element
// let feedback = guessNumber(secretNumber, userGuess);
// document.getElementById("feedbackArea").textContent = feedback; // Hypothetical feedback element

```