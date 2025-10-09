```javascript
// Simple utility function: Capitalize first letter of each word in a string

function capitalizeWords(str) {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
```