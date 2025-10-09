```javascript
// Simple utility function to capitalize the first letter of a string.
const capitalizeFirstLetter = (string) => {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Example usage (optional):
// console.log(capitalizeFirstLetter("hello")); // Output: Hello

// Small DOM manipulation script: change the background color on button click.

// HTML (example):
// <button id="colorButton">Change Color</button>
// <style>
// body {
//   transition: background-color 0.5s ease;
// }
// </style>

//JavaScript:
const colorButton = document.getElementById("colorButton");

if (colorButton) {
  colorButton.addEventListener("click", () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  });
}

// Tiny number guessing game:
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

// To start the game uncomment the line below:
// numberGuessingGame();
```