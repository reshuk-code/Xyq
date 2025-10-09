```javascript
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

// Simple example:  Change background every 2 seconds
setInterval(changeBackgroundColor, 2000);


// Alternatively, a simple utility function:

function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example Usage (commented out, since there's no HTML to render):
// console.log(capitalize("hello world")); // Outputs: Hello world

// DOM Manipulation Example (needs HTML)
/*
<!DOCTYPE html>
<html>
<head>
<title>DOM Example</title>
</head>
<body>
  <button id="myButton">Click Me</button>
  <p id="myParagraph">Initial Text</p>

  <script>
    document.getElementById('myButton').addEventListener('click', function() {
      document.getElementById('myParagraph').textContent = "Button was clicked!";
    });
  </script>
</body>
</html>
*/
```