```javascript
// Utility function to format a number as currency
function formatCurrency(number, currencySymbol = '$', decimalPlaces = 2) {
  return currencySymbol + number.toFixed(decimalPlaces);
}

// Example usage (in a browser environment):
// const price = 12.99;
// const formattedPrice = formatCurrency(price);
// document.getElementById("priceDisplay").textContent = formattedPrice;


//Small DOM manipulation project snippet:

// Assuming an HTML structure like this:
// <ul id="myList"></ul>
// <button id="addButton">Add Item</button>

document.addEventListener("DOMContentLoaded", function() {
  const list = document.getElementById("myList");
  const addButton = document.getElementById("addButton");

  addButton.addEventListener("click", function() {
    const newItem = document.createElement("li");
    newItem.textContent = "New List Item";
    list.appendChild(newItem);
  });
});
```