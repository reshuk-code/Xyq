```javascript
// Simple temperature converter

function convertTemperature(temperature, unit) {
  if (unit === 'C') {
    return (temperature * 9/5) + 32;
  } else if (unit === 'F') {
    return (temperature - 32) * 5/9;
  } else {
    return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
  }
}

// Example usage (for demonstration, you'd usually call this from elsewhere)
// console.log(convertTemperature(25, 'C')); // Output: 77
// console.log(convertTemperature(77, 'F')); // Output: 25
```