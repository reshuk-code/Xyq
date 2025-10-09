```javascript
// Simple utility function: capitalize first letter of each word in a string

function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example Usage (in browser or with node)
// console.log(capitalizeWords("this is a test string")); // Output: This Is A Test String


// Small DOM manipulation snippet:  Adds a numbered list of items to a given element ID

function addNumberedList(elementId, items) {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with ID "${elementId}" not found.`);
    return;
  }

  const ol = document.createElement('ol');
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    ol.appendChild(li);
  });

  element.appendChild(ol);
}

// Example usage (in browser after DOM is loaded)
// addNumberedList('myListContainer', ['Item 1', 'Item 2', 'Item 3']);

// Simple Game: Number guessing game

function numberGuessingGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let guess;
  let attempts = 0;

  while (guess !== secretNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
    attempts++;

    if (isNaN(guess)) {
      alert("Please enter a valid number.");
    } else if (guess < secretNumber) {
      alert("Too low!");
    } else if (guess > secretNumber) {
      alert("Too high!");
    }
  }

  alert(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
}

// To play the game, call the function:
// numberGuessingGame();

```