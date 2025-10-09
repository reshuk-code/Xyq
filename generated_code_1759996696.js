```javascript
// Simple utility function:  Format a number as currency

function formatCurrency(amount, currencyCode = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  }).format(amount);
}

// Example usage:
// console.log(formatCurrency(1234.56));       // Output: $1,234.56 (depending on browser locale)
// console.log(formatCurrency(1234.56, 'EUR'));  // Output: €1,234.56 (depending on browser locale)
// console.log(formatCurrency(1234.56, 'JPY'));  // Output: ¥1,235
// console.log(formatCurrency(1234.56, 'GBP', 'en-GB')); // Output: £1,234.56
```