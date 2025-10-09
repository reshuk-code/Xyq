```javascript
// Utility function to convert a number to its ordinal representation (1st, 2nd, 3rd, 4th, etc.)
function ordinalSuffix(i) {
  var j = i % 10,
      k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
}

//Example usage (can be removed)
// for (let i = 1; i <= 25; i++) {
//   console.log(ordinalSuffix(i));
// }
```