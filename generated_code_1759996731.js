```javascript
// Simple utility function: capitalize the first letter of a string

function capitalizeFirstLetter(string) {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Example usage (for demonstration purposes, not part of the function)
// const myString = "hello world";
// const capitalizedString = capitalizeFirstLetter(myString);
// console.log(capitalizedString); // Output: Hello world
```