```javascript
function createCounter(initialValue = 0) {
  let count = initialValue;

  return {
    increment: () => {
      count++;
      return count;
    },
    decrement: () => {
      count--;
      return count;
    },
    getValue: () => count,
    reset: () => {
      count = initialValue;
      return count;
    }
  };
}
```