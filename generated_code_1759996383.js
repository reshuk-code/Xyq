```javascript
// Simple utility function to format a number as currency.
function formatCurrency(amount, currencySymbol = '$', decimalPlaces = 2) {
  const formattedAmount = amount.toFixed(decimalPlaces);
  return `${currencySymbol}${formattedAmount}`;
}
```