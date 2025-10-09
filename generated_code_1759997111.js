```javascript
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createColorSquares(numSquares) {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexWrap = 'wrap';
  container.style.width = '500px';
  container.style.border = '1px solid black';

  for (let i = 0; i < numSquares; i++) {
    const square = document.createElement('div');
    square.style.width = '50px';
    square.style.height = '50px';
    square.style.backgroundColor = getRandomColor();
    square.style.margin = '5px';
    container.appendChild(square);
  }

  document.body.appendChild(container);
}

createColorSquares(25);
```