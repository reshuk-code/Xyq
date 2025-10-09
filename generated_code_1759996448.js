```javascript
// Utility function: Capitalize the first letter of a string

function capitalizeFirstLetter(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example usage (can be run in a browser's console or Node.js)
// console.log(capitalizeFirstLetter("hello")); // Output: Hello
// console.log(capitalizeFirstLetter("world")); // Output: World
// console.log(capitalizeFirstLetter(""));      // Output:
```