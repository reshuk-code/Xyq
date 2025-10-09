```javascript
// Utility function to capitalize the first letter of each word in a string
function capitalizeWords(str) {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example Usage (can be run in a browser console)
// console.log(capitalizeWords("this is a test string")); // Output: "This Is A Test String"

// DOM Manipulation Snippet: Simple Toggle Dark Mode

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Optional: Store preference in localStorage
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
}

// Initialization (called on page load, for example)
(function() {
  const body = document.body;
  const storedDarkMode = localStorage.getItem('darkMode');

  if (storedDarkMode === 'true') {
    body.classList.add('dark-mode');
  }

  //Example Button
  // let darkModeButton = document.createElement("button");
  // darkModeButton.textContent = "Toggle Dark Mode";
  // darkModeButton.onclick = toggleDarkMode;
  // document.body.appendChild(darkModeButton);
})();

//Simple Number Guessing Game in Console

function numberGuessingGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let guess;
  let attempts = 0;

  while (guess !== secretNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
    attempts++;

    if (isNaN(guess)) {
      console.log("Invalid input. Please enter a number.");
    } else if (guess < secretNumber) {
      console.log("Too low!");
    } else if (guess > secretNumber) {
      console.log("Too high!");
    } else {
      console.log(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
    }
  }
}

//To start the game
//numberGuessingGame();
```