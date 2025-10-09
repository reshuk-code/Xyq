```javascript
// Simple utility function to convert a string to title case.
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

// Small DOM manipulation script to add a button that alerts "Hello World!"
document.addEventListener('DOMContentLoaded', function() {
  const button = document.createElement('button');
  button.textContent = 'Click Me';
  button.addEventListener('click', function() {
    alert('Hello World!');
  });
  document.body.appendChild(button);
});

// Very basic number guessing game
function guessTheNumber() {
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

//guessTheNumber(); // Uncomment to play the game
```