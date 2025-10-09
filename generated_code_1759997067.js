```javascript
function simpleCalculator() {
  const num1 = parseFloat(prompt("Enter first number:"));
  const num2 = parseFloat(prompt("Enter second number:"));
  const operator = prompt("Enter operator (+, -, *, /):");

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
        result = "Division by zero error!";
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = "Invalid operator!";
  }

  alert("Result: " + result);
}

// simpleCalculator(); // Uncomment to run.  Remember to open your browser console.
```