```javascript
function generateRandomColor() {
  const hexValues = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexValues[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = generateRandomColor();
}

const button = document.createElement('button');
button.textContent = 'Change Background Color';
button.addEventListener('click', changeBackgroundColor);
document.body.appendChild(button);
```