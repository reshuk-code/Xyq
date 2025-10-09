```javascript
// Simple utility function: capitalize the first letter of a string

function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example usage:
// console.log(capitalize("hello world")); // Output: Hello world
```