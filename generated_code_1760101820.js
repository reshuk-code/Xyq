```javascript
// Simple Utility Function: Random Color Generator

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Example usage in the DOM (optional, remove if not needed)
// document.body.style.backgroundColor = getRandomColor();
```