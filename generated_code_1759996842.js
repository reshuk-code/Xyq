```javascript
// Simple utility function: Random password generator

function generatePassword(length = 12) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;<>,.?/-=";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}

// Small DOM manipulation script: Toggling dark mode

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

// Simple game snippet: Number guessing game (minimal)

function guessNumber() {
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  let guess = parseInt(prompt("Guess a number between 1 and 10:"));

  if (guess === secretNumber) {
    alert("Congratulations! You guessed it!");
  } else {
    alert("Sorry, the number was " + secretNumber + ".");
  }
}
```