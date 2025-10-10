```javascript
// Simple utility function: format a number as currency

function formatCurrency(number, currency = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(number);
}

// Example usage (can be removed for just the function):
// console.log(formatCurrency(1234.56)); // Output: $1,234.56 (or locale equivalent)
// console.log(formatCurrency(987.65, 'EUR', 'de-DE')); // Output: 987,65 €

// -------------------------------------------------------------
// Small DOM manipulation snippet:  Adding a class to a button

function highlightButton(buttonId, className = 'highlight') {
  const button = document.getElementById(buttonId);
  if (button) {
    button.classList.add(className);
  }
}

// Example usage (can be removed for just the function):
//  <button id="myButton">Click Me</button>
//  <style>.highlight { background-color: yellow; }</style>
//  highlightButton("myButton");
// -------------------------------------------------------------
//Small Game Snippet: Simple Number Guessing Game

function numberGuessingGame(maxNumber = 10) {
  const secretNumber = Math.floor(Math.random() * maxNumber) + 1;
  let guessCount = 0;

  return function guess(userGuess) {
    guessCount++;
    if (userGuess < secretNumber) {
      return "Too low!";
    } else if (userGuess > secretNumber) {
      return "Too high!";
    } else {
      return `You guessed it in ${guessCount} tries!  The number was ${secretNumber}.`;
    }
  };
}

// Example Usage (Can be removed for just the game function):
// const game = numberGuessingGame(20);
// console.log(game(5)); // e.g., "Too low!"
// console.log(game(15)); // e.g., "Too high!"
// console.log(game(10)); // e.g., "You guessed it in 3 tries! The number was 10."

```