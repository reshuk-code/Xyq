```javascript
// Simple utility function: format a number as currency

function formatCurrency(number, currencyCode = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  }).format(number);
}

// Example usage:
// console.log(formatCurrency(1234.56)); // Output: $1,234.56 (or equivalent based on browser locale)
// console.log(formatCurrency(1234.56, 'EUR', 'de-DE')); // Output: 1.234,56 €
```