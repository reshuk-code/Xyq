```javascript
// Utility function: Capitalize the first letter of each word in a string
function capitalizeWords(str) {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage (in a browser environment):
document.addEventListener('DOMContentLoaded', function() {
  const inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.placeholder = 'Enter text';
  document.body.appendChild(inputElement);

  const outputElement = document.createElement('p');
  document.body.appendChild(outputElement);

  inputElement.addEventListener('input', function() {
    outputElement.textContent = capitalizeWords(inputElement.value);
  });
});
```