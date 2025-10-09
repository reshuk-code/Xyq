```javascript
// Simple DOM manipulation: creates a button and appends it to the body.
// Clicking the button changes the background color of the body.

(function() {
  const button = document.createElement('button');
  button.textContent = 'Change Background';
  document.body.appendChild(button);

  const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  let currentColorIndex = 0;

  button.addEventListener('click', function() {
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  });
})();
```