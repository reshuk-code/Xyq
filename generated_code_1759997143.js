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

// Add a button to the page to trigger the color change.
const button = document.createElement('button');
button.textContent = 'Change Background Color';
button.onclick = changeBackgroundColor;
document.body.appendChild(button);
```