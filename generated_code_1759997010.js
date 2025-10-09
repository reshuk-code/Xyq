```javascript
// Simple utility function: Generate a random hex color

function getRandomHexColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Example usage (DOM manipulation): Change the background color of the body.
document.body.style.backgroundColor = getRandomHexColor();


// Small game snippet: Number guessing game
// (Requires an HTML element with id="guessInput" and id="result")

/*
function numberGuessingGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let guessCount = 0;

  return function(guess) {
    guessCount++;

    if (guess === secretNumber) {
      return `Congratulations! You guessed the number in ${guessCount} tries.`;
    } else if (guess < secretNumber) {
      return "Too low!";
    } else {
      return "Too high!";
    }
  };
}

const playGame = numberGuessingGame();

document.getElementById("guessInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    const guess = parseInt(document.getElementById("guessInput").value);
    const result = playGame(guess);
    document.getElementById("result").textContent = result;
    document.getElementById("guessInput").value = "";
  }
});
*/


//Small utility function:  Capitalize the first letter of each word in a string.

function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}


// Example use:
// console.log(capitalizeWords("hello world"));  // Outputs: Hello World
```