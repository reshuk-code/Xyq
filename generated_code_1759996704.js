```javascript
function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = generateRandomColor();
}

// Example Usage (assuming an element with id 'changeButton' exists):
const button = document.getElementById('changeButton');
if (button) {
  button.addEventListener('click', changeBackgroundColor);
}
```