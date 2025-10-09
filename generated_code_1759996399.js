```javascript
// Simple utility function: capitalize the first letter of a string

function capitalizeFirstLetter(str) {
  if (!str) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}


// Example usage (optional):
// console.log(capitalizeFirstLetter("hello")); // Output: Hello


// Alternatively, a small DOM manipulation snippet:

function addListItem(text) {
  const list = document.getElementById('myList'); // Assuming an element with id 'myList' exists
  if (!list) {
      console.error("Element with id 'myList' not found.");
      return;
  }
  const newItem = document.createElement('li');
  newItem.textContent = text;
  list.appendChild(newItem);
}

// Example usage (optional):
// addListItem("New Item");
```