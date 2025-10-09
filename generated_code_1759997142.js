```javascript
// Simple utility function: string reversal
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example usage:
// console.log(reverseString("hello")); // Output: olleh


// Small DOM manipulation script: change background color on click
document.addEventListener("DOMContentLoaded", function() {
  const body = document.body;
  body.addEventListener("click", function() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = randomColor;
  });
});


// Small game snippet: simple number guessing game
function guessNumberGame(secretNumber) {
  let attempts = 5;
  while (attempts > 0) {
    const guess = parseInt(prompt(`Guess a number between 1 and 10. Attempts left: ${attempts}`));

    if (isNaN(guess) || guess < 1 || guess > 10) {
      alert("Invalid input. Please enter a number between 1 and 10.");
      continue;
    }

    if (guess === secretNumber) {
      alert("Congratulations! You guessed the number!");
      return;
    } else if (guess < secretNumber) {
      alert("Too low!");
    } else {
      alert("Too high!");
    }

    attempts--;
  }

  alert(`You ran out of attempts. The number was ${secretNumber}.`);
}

// Example usage:
// guessNumberGame(Math.floor(Math.random() * 10) + 1);
```