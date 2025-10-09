```javascript
// Simple utility function:  Convert Kelvin to Celsius
function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

// Example Usage:
// console.log(kelvinToCelsius(293.15)); // Output: 20

// Small DOM manipulation snippet:  Add a class to all paragraphs

function highlightParagraphs() {
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(p => p.classList.add('highlighted'));
}

// To use, include in HTML:  <script> highlightParagraphs(); </script>
// And CSS:  .highlighted { background-color: yellow; }

// Very simple number guessing game:

function numberGuessingGame() {
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
    }
  }

  alert("Congratulations! You guessed the number " + secretNumber + "!");
}

// numberGuessingGame(); // uncomment to play
```