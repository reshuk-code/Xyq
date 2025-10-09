```javascript
function generateRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function createColorBoxes(numBoxes) {
  const container = document.createElement('div');
  container.style.display = 'flex';

  for (let i = 0; i < numBoxes; i++) {
    const box = document.createElement('div');
    box.style.width = '50px';
    box.style.height = '50px';
    box.style.margin = '5px';
    box.style.backgroundColor = generateRandomColor();
    container.appendChild(box);
  }

  document.body.appendChild(container);
}

// Example usage:
createColorBoxes(10);

// Optional: Add a button to generate new boxes
const button = document.createElement('button');
button.textContent = 'Generate New Colors';
button.addEventListener('click', () => {
  document.body.innerHTML = ''; // Clear existing boxes
  createColorBoxes(10);
});
document.body.appendChild(button);
```