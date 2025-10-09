```javascript
function calculateTip(billAmount, tipPercentage) {
  if (typeof billAmount !== 'number' || typeof tipPercentage !== 'number') {
    return "Invalid input. Please provide numbers.";
  }

  if (billAmount < 0 || tipPercentage < 0) {
    return "Amount and percentage cannot be negative.";
  }

  const tipAmount = billAmount * (tipPercentage / 100);
  const totalAmount = billAmount + tipAmount;

  return {
    tip: tipAmount.toFixed(2),
    total: totalAmount.toFixed(2)
  };
}
```