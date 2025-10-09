```javascript
function simpleCalculator() {
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));
  const operation = prompt("Enter the operation (+, -, *, /):");

  let result;

  switch (operation) {
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
        result = "Cannot divide by zero.";
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = "Invalid operation.";
  }

  alert("Result: " + result);
}

//simpleCalculator(); // Call the function to execute
```