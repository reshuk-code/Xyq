```javascript
// Simple utility function to generate a random RGB color
function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Example DOM manipulation: Change body background color on button click
const button = document.createElement('button');
button.textContent = 'Change Background Color';
document.body.appendChild(button);

button.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomRgbColor();
});
```