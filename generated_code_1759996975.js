```javascript
function simpleCalculator() {
  const operation = prompt("Enter operation (+, -, *, /):");
  const num1 = parseFloat(prompt("Enter first number:"));
  const num2 = parseFloat(prompt("Enter second number:"));

  if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid input. Please enter numbers.");
    return;
  }

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
        alert("Cannot divide by zero.");
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert("Invalid operation.");
      return;
  }

  alert("Result: " + result);
}

simpleCalculator();
```