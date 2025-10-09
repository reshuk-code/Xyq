```javascript
// Utility function: format time (seconds to HH:MM:SS)
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Example usage:
// console.log(formatTime(3661)); // Output: 01:01:01

// DOM Manipulation: Simple Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Toggle Dark Mode';
  document.body.appendChild(toggleButton);

  toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });

  // Add CSS for dark mode (optional, but makes it work):
  const style = document.createElement('style');
  style.textContent = `
    body.dark-mode {
      background-color: #333;
      color: #fff;
    }
  `;
  document.head.appendChild(style);
});
```