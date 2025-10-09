```javascript
// Simple utility function: generate a random hex color

function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Example usage (optional):
// console.log(getRandomHexColor());

// Small DOM manipulation script: change background color on click

document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomHexColor();
  });
});
```