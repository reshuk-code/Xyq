```javascript
// Utility function to format a date into YYYY-MM-DD
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Example usage (can be run in a browser console)
// console.log(formatDate(new Date()));
```