```javascript
// Simple Utility Function: Generate a random hex color

function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Example Usage (in a browser environment):

document.body.style.backgroundColor = getRandomHexColor();
```