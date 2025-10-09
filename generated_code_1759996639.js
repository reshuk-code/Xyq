```javascript
// Simple utility function: Debouncer

function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}


// Example usage (not part of the function itself, but shows how it's used)
/*
function logInput(input) {
  console.log("Input value:", input);
}

const debouncedLogInput = debounce(logInput, 300);


// Simulate user typing in an input field (using setTimeout)
setTimeout(() => debouncedLogInput("A"), 50);
setTimeout(() => debouncedLogInput("AB"), 100);
setTimeout(() => debouncedLogInput("ABC"), 200);
setTimeout(() => debouncedLogInput("ABCD"), 400);
setTimeout(() => debouncedLogInput("ABCDE"), 600);
*/
```