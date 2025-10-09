```javascript
// Simple utility function:  string capitalization

function capitalizeString(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example Usage (not part of the function itself, but for demonstration)
// console.log(capitalizeString("hello")); // Output: Hello
// console.log(capitalizeString("WORLD")); // Output: WORLD
// console.log(capitalizeString(""));      // Output:
// console.log(capitalizeString(null));    // Output: null
```