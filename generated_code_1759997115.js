```javascript
function createCalculator() {
  let result = 0;

  return {
    add: (num) => { result += num; return result; },
    subtract: (num) => { result -= num; return result; },
    multiply: (num) => { result *= num; return result; },
    divide: (num) => {
      if (num === 0) {
        return "Division by zero error";
      }
      result /= num; return result;
    },
    clear: () => { result = 0; return result; },
    getResult: () => result
  };
}
```