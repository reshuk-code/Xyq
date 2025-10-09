```javascript
// Utility function: Convert a number to a currency format

function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
}


// Small DOM manipulation snippet: Adds a class to all even list items

function highlightEvenListItems() {
  const listItems = document.querySelectorAll('li');

  listItems.forEach((item, index) => {
    if ((index + 1) % 2 === 0) {
      item.classList.add('even-item');
    }
  });
}

// Optional: Example of usage
// <style>.even-item { background-color: #f0f0f0; }</style>
// <ul id="myList"><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li></ul>
// <script> highlightEvenListItems(); </script>
```