```javascript
// Utility function to convert a number to its ordinal string representation
function toOrdinal(n) {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

// Example usage (optional):
// console.log(toOrdinal(1));   // Output: 1st
// console.log(toOrdinal(2));   // Output: 2nd
// console.log(toOrdinal(3));   // Output: 3rd
// console.log(toOrdinal(4));   // Output: 4th
// console.log(toOrdinal(11));  // Output: 11th
// console.log(toOrdinal(12));  // Output: 12th
// console.log(toOrdinal(13));  // Output: 13th
// console.log(toOrdinal(21));  // Output: 21st
// console.log(toOrdinal(102)); // Output: 102nd
```