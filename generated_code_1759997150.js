```javascript
// Utility function to generate a random hex color

function getRandomHexColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

// Example DOM manipulation script: Change background color on button click

document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.textContent = 'Change Background Color';
  document.body.appendChild(button);

  button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomHexColor();
  });
});
```