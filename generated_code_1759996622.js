```javascript
// Simple utility function:  Calculate the average of an array of numbers

function calculateAverage(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}


// Example Usage (not part of the function, just demonstrating how to use it):
// const nums = [1, 2, 3, 4, 5];
// const average = calculateAverage(nums);
// console.log("Average:", average); // Output: Average: 3
```