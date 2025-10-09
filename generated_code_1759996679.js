```javascript
function simpleCalculator() {
  const num1 = parseFloat(prompt("Enter the first number:"));
  const operator = prompt("Enter the operator (+, -, *, /):");
  const num2 = parseFloat(prompt("Enter the second number:"));

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
        result = "Cannot divide by zero!";
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = "Invalid operator!";
  }

  alert(`Result: ${result}`);
}

//simpleCalculator(); // Uncomment to run in a browser environment that supports prompt and alert
```