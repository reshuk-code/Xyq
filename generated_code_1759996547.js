```javascript
// Utility function to generate a random hexadecimal color code
function getRandomHexColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Small DOM manipulation script to change background color on button click
const button = document.createElement('button');
button.textContent = 'Change Background';
document.body.appendChild(button);

button.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
});
```