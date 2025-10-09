```javascript
// Simple utility function: string reversal

function reverseString(str) {
  return str.split("").reverse().join("");
}


// Small DOM manipulation snippet: add a paragraph

function addParagraph(text) {
  const p = document.createElement("p");
  p.textContent = text;
  document.body.appendChild(p);
}

// Small game snippet: Number guessing (browser console)

function numberGuessingGame() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let guess;
  let attempts = 0;

  while (guess !== randomNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
    attempts++;

    if (isNaN(guess)) {
      alert("Invalid input. Please enter a number.");
    } else if (guess < randomNumber) {
      alert("Too low!");
    } else if (guess > randomNumber) {
      alert("Too high!");
    }
  }

  alert(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
}

// Example usage (uncomment to run):
// numberGuessingGame();
```