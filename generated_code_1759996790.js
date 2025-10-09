```javascript
// Utility function to format a number as currency
function formatCurrency(number, currency = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(number);
}

// Example usage (can be removed if not needed)
// console.log(formatCurrency(1234.56)); // Output: $1,234.56
// console.log(formatCurrency(9876543.21, 'EUR', 'de-DE')); // Output: 9.876.543,21 €
```