```javascript
function generateRandomColor() {
  const hexDigits = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexDigits[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = generateRandomColor();
}

setInterval(changeBackgroundColor, 1000);
```