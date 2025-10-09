```javascript
// Utility function to convert a number to its ordinal form (1st, 2nd, 3rd, 4th...)
function getOrdinal(n) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

// Example Usage (in browser console)
// console.log(getOrdinal(1));  // Output: 1st
// console.log(getOrdinal(2));  // Output: 2nd
// console.log(getOrdinal(3));  // Output: 3rd
// console.log(getOrdinal(4));  // Output: 4th
// console.log(getOrdinal(11)); // Output: 11th
// console.log(getOrdinal(21)); // Output: 21st
```