```javascript
// Simple utility function:  Capitalizes the first letter of a string

function capitalizeFirstLetter(str) {
  if (!str) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
```