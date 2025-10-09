```javascript
// Simple utility function: Generate a random integer within a range
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Small DOM manipulation snippet: Change a div's background color on click
document.addEventListener('DOMContentLoaded', function() {
  const myDiv = document.getElementById('myDiv');

  if (myDiv) {
    myDiv.addEventListener('click', function() {
      const randomColor = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
      myDiv.style.backgroundColor = randomColor;
    });
  } else {
    console.error("Element with ID 'myDiv' not found.");
  }
});
```