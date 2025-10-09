```javascript
function createRandomRectangle(containerId, numRectangles) {
  const container = document.getElementById(containerId);
  if (!container) return;

  for (let i = 0; i < numRectangles; i++) {
    const rect = document.createElement('div');
    const width = Math.floor(Math.random() * 100) + 20;
    const height = Math.floor(Math.random() * 100) + 20;
    const x = Math.floor(Math.random() * (container.offsetWidth - width));
    const y = Math.floor(Math.random() * (container.offsetHeight - height));
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);

    rect.style.width = width + 'px';
    rect.style.height = height + 'px';
    rect.style.position = 'absolute';
    rect.style.left = x + 'px';
    rect.style.top = y + 'px';
    rect.style.backgroundColor = color;
    rect.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    container.appendChild(rect);
  }
}

// Example usage (requires an element with id="rectContainer" in your HTML):
// createRandomRectangle('rectContainer', 10);
```