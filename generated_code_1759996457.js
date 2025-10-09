```javascript
// Simple utility function: Capitalize the first letter of a string.
function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example usage:
// console.log(capitalize("hello")); // Output: Hello

// Small DOM manipulation snippet: Change the text of an element with id "myElement".
function changeText() {
  const element = document.getElementById("myElement");
  if (element) {
    element.textContent = "New Text!";
  }
}

// Example usage (requires an HTML element with id "myElement"):
// <p id="myElement">Original Text</p>
// <button onclick="changeText()">Change Text</button>

//Small Game: Simple Number Guessing Game in console
function numberGuessingGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let guess = 0;
  let attempts = 0;

  while (guess !== secretNumber) {
    attempts++;
    guess = parseInt(prompt("Guess a number between 1 and 100:"));

    if (isNaN(guess)) {
      console.log("Invalid input. Please enter a number.");
      continue;
    }

    if (guess < secretNumber) {
      console.log("Too low!");
    } else if (guess > secretNumber) {
      console.log("Too high!");
    } else {
      console.log(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
    }
  }
}

//numberGuessingGame(); //call the function to start game.
```