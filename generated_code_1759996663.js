```javascript
// Simple utility function:  Camel case to kebab case

function camelToKebab(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

// Example usage (can be tested in a browser console):
// console.log(camelToKebab("myVariableName")); // Output: my-variable-name

// Small DOM Manipulation snippet:  Adds a new list item to an existing list.

function addListItem(listId, itemText) {
  const list = document.getElementById(listId);
  if (list) {
    const newItem = document.createElement("li");
    newItem.textContent = itemText;
    list.appendChild(newItem);
  } else {
    console.error("List element with ID '" + listId + "' not found.");
  }
}

// Example usage (requires an HTML file with <ul id="myList"></ul>):
// addListItem("myList", "New List Item");
```