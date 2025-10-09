```javascript
// Utility function: Generate a random hexadecimal color code
function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Example Usage (in a browser environment):
// Change background color of the body on button click

const button = document.createElement('button');
button.textContent = 'Change Background Color';
document.body.appendChild(button);

button.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
});
```