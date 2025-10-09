```javascript
// Utility function to shuffle an array in place (Fisher-Yates shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Example usage (if running in a browser environment)
/*
document.addEventListener('DOMContentLoaded', function() {
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const shuffledArray = shuffleArray(myArray.slice()); // Create a copy to avoid modifying the original
  
  const resultElement = document.createElement('p');
  resultElement.textContent = "Original: " + myArray.join(", ") + " | Shuffled: " + shuffledArray.join(", ");
  document.body.appendChild(resultElement);
});
*/

//Example for Node.js (remove comments to run)

/*
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffledArray = shuffleArray(myArray.slice()); // Create a copy to avoid modifying the original

console.log("Original: ", myArray);
console.log("Shuffled: ", shuffledArray);
*/
```