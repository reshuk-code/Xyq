```javascript
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createColorPalette(numColors) {
  const palette = [];
  for (let i = 0; i < numColors; i++) {
    const red = getRandomNumber(0, 255);
    const green = getRandomNumber(0, 255);
    const blue = getRandomNumber(0, 255);
    palette.push(`rgb(${red}, ${green}, ${blue})`);
  }
  return palette;
}

function applyColorToElements(selector, colors) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    element.style.backgroundColor = colors[index % colors.length];
  });
}

// Example usage:
// const colors = createColorPalette(5);
// applyColorToElements('div', colors);
```