```javascript
// Utility function to generate a random hexadecimal color

function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Example usage (for a small DOM manipulation script)

document.addEventListener('DOMContentLoaded', () => {
  const colorButton = document.createElement('button');
  colorButton.textContent = 'Change Background Color';
  document.body.appendChild(colorButton);

  colorButton.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomHexColor();
  });
});
```