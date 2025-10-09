```javascript
// Simple DOM manipulation script: adds a list item to an unordered list.

function addListItem(listId, itemText) {
  const list = document.getElementById(listId);
  if (!list) {
    console.error("List element with ID '" + listId + "' not found.");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

// Example usage (requires an HTML element with id "myList"):
// addListItem("myList", "New item 1");
// addListItem("myList", "Another item");

// Example HTML
/*
<!DOCTYPE html>
<html>
<head>
  <title>List Example</title>
</head>
<body>
  <ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>

  <script>
    function addListItem(listId, itemText) {
      const list = document.getElementById(listId);
      if (!list) {
        console.error("List element with ID '" + listId + "' not found.");
        return;
      }

      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    addListItem("myList", "New item 1");
    addListItem("myList", "Another item");
  </script>
</body>
</html>
*/
```