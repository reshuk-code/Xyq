```javascript
// Simple utility function: random hex color generator

function getRandomHexColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Example usage (for a small DOM manipulation script):

// document.body.style.backgroundColor = getRandomHexColor();
```