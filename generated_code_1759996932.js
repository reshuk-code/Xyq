```javascript
// Simple utility function: capitalizeFirstLetter

function capitalizeFirstLetter(string) {
  if (!string) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Example usage (demonstration - not part of the required function):
// console.log(capitalizeFirstLetter("hello")); // Output: Hello
// console.log(capitalizeFirstLetter(""));    // Output: ""
// console.log(capitalizeFirstLetter(null));  // Output: null
```