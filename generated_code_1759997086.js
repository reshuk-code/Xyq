```javascript
// Simple DOM manipulation: changing text on a button click

function changeButtonText() {
  const button = document.getElementById('myButton');
  if (button) {
    button.textContent = (button.textContent === 'Click Me!') ? 'Clicked!' : 'Click Me!';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('myButton');
  if (button) {
    button.addEventListener('click', changeButtonText);
  }
});
```
```html
<!DOCTYPE html>
<html>
<head>
  <title>Button Text Changer</title>
</head>
<body>
  <button id="myButton">Click Me!</button>

  <script>
    function changeButtonText() {
      const button = document.getElementById('myButton');
      if (button) {
        button.textContent = (button.textContent === 'Click Me!') ? 'Clicked!' : 'Click Me!';
      }
    }

    document.addEventListener('DOMContentLoaded', function() {
      const button = document.getElementById('myButton');
      if (button) {
        button.addEventListener('click', changeButtonText);
      }
    });
  </script>
</body>
</html>
```