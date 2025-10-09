```javascript
// Simple utility function:  Capitalize the first letter of a string

function capitalizeFirstLetter(str) {
  if (!str) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example usage (for testing, not part of the required code):
// console.log(capitalizeFirstLetter("hello")); // Output: Hello
// console.log(capitalizeFirstLetter(""));    // Output: 
```