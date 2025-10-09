```javascript
// Simple DOM manipulation script: Creates a button and displays a message when clicked.
(function() {
  const button = document.createElement('button');
  button.textContent = 'Click Me!';
  button.style.padding = '10px 20px';
  button.style.fontSize = '16px';
  button.style.backgroundColor = '#4CAF50';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';

  const messageDiv = document.createElement('div');
  messageDiv.style.marginTop = '10px';
  messageDiv.style.fontSize = '18px';

  button.addEventListener('click', function() {
    messageDiv.textContent = 'Button Clicked!';
  });

  document.body.appendChild(button);
  document.body.appendChild(messageDiv);
})();
```