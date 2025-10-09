```javascript
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

// Simple DOM manipulation:  Add a button and attach the function.
const button = document.createElement('button');
button.textContent = 'Change Background';
button.addEventListener('click', changeBackgroundColor);
document.body.appendChild(button);
```