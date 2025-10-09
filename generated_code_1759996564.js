```javascript
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createColorBoxes(numBoxes) {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexWrap = 'wrap';
  document.body.appendChild(container);

  for (let i = 0; i < numBoxes; i++) {
    const box = document.createElement('div');
    box.style.width = '50px';
    box.style.height = '50px';
    box.style.margin = '5px';
    box.style.backgroundColor = getRandomColor();
    box.addEventListener('click', function() {
      this.style.backgroundColor = getRandomColor();
    });
    container.appendChild(box);
  }
}

createColorBoxes(20);
```