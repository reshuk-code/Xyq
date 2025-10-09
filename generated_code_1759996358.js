```javascript
function simpleCalculator(operation, num1, num2) {
  switch (operation) {
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
      return "Invalid operation";
  }
}
```