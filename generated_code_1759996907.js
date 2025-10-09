```javascript
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createColorPalette(numColors) {
  const palette = [];
  for (let i = 0; i < numColors; i++) {
    const r = randomNumber(0, 255);
    const g = randomNumber(0, 255);
    const b = randomNumber(0, 255);
    palette.push(`rgb(${r}, ${g}, ${b})`);
  }
  return palette;
}

function updateBackgroundColor() {
  const palette = createColorPalette(3);
  document.body.style.backgroundColor = palette[0];
  document.getElementById('color-display').textContent = palette[0];
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.textContent = 'Change Background Color';
  button.addEventListener('click', updateBackgroundColor);

  const colorDisplay = document.createElement('div');
  colorDisplay.id = 'color-display';
  colorDisplay.textContent = 'Initial Color';

  document.body.appendChild(button);
  document.body.appendChild(colorDisplay);

  updateBackgroundColor();
});
```