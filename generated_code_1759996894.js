```javascript
function createColorPalette(numColors) {
  const palette = [];
  for (let i = 0; i < numColors; i++) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    palette.push(`rgb(${r}, ${g}, ${b})`);
  }
  return palette;
}

function renderPalette(palette, targetElementId) {
  const target = document.getElementById(targetElementId);
  if (!target) {
    console.error("Target element not found.");
    return;
  }

  target.innerHTML = ""; // Clear existing content

  palette.forEach(color => {
    const colorBox = document.createElement("div");
    colorBox.style.backgroundColor = color;
    colorBox.style.width = "50px";
    colorBox.style.height = "50px";
    colorBox.style.margin = "5px";
    colorBox.title = color;
    target.appendChild(colorBox);
  });
}

// Example Usage (assuming a div with id "paletteContainer" exists in your HTML)
const myPalette = createColorPalette(10);
renderPalette(myPalette, "paletteContainer");


// Add a button to generate a new palette
const button = document.createElement('button');
button.textContent = 'Generate New Palette';
button.onclick = () => {
    const newPalette = createColorPalette(10);
    renderPalette(newPalette, "paletteContainer");
}
document.body.appendChild(button);
```