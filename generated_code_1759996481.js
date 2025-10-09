```javascript
// Simple utility function:  capitalizeFirstLetter

function capitalizeFirstLetter(string) {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}


// Example usage (can be omitted if only the function is desired)
// console.log(capitalizeFirstLetter("hello")); // Output: Hello
// console.log(capitalizeFirstLetter("world")); // Output: World
// console.log(capitalizeFirstLetter(""));      // Output: 
```