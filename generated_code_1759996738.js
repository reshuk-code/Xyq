```javascript
// Utility function to shuffle an array in place.
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Example Usage (Can be run in browser console)
// const myArray = [1, 2, 3, 4, 5];
// console.log(shuffleArray(myArray));
```