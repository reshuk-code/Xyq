```javascript
// Utility function: Capitalize the first letter of each word in a string

function capitalizeWords(str) {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


// Small game:  Simple number guessing game (console-based)

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


// DOM Manipulation Script:  Add a button that changes the background color of the body

function addBackgroundColorButton() {
  const button = document.createElement('button');
  button.textContent = 'Change Background Color';
  button.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  });
  document.body.appendChild(button);
}

// Example usage:  Uncomment one of these lines to run the respective code.
// console.log(capitalizeWords("this is a test string"));
// numberGuessingGame();
// addBackgroundColorButton();
```