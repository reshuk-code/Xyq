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

setInterval(changeBackgroundColor, 1000);


const element = document.createElement('h1');
element.textContent = "Random Background Color";
element.style.textAlign = "center";
element.style.color = "white";
document.body.prepend(element);
```