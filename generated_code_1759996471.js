```javascript
// Utility function: simple calculator

function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return "Division by zero!";
      }
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}
```