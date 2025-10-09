```javascript
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessTheNumber() {
  const secretNumber = randomNumber(1, 100);
  let guess = 0;
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
    }
  }

  alert(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
}

// guessTheNumber();

function createRandomColorBox() {
  const box = document.createElement('div');
  box.style.width = '100px';
  box.style.height = '100px';
  box.style.backgroundColor = `rgb(${randomNumber(0,255)}, ${randomNumber(0,255)}, ${randomNumber(0,255)})`;
  box.style.border = '1px solid black';
  box.style.margin = '10px';
  box.style.cursor = 'pointer';

  box.addEventListener('click', () => {
      box.remove();
  });

  document.body.appendChild(box);
}

// for (let i = 0; i < 5; i++) {
//     createRandomColorBox();
// }

function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString("hello"));

function simpleCalculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operator = prompt("Enter an operator (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter numbers.");
        return;
    }

    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operator.");
            return;
    }

    alert(`Result: ${num1} ${operator} ${num2} = ${result}`);
}

// simpleCalculator();
```