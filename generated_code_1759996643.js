```javascript
// Simple utility function: capitalize the first letter of a string

function capitalizeFirstLetter(string) {
  if (!string) {
    return "";
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
```