```javascript
// Simple utility function: titleCase
const titleCase = (str) => {
  return str.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};

// Small DOM manipulation snippet: add a list item
function addListItem(listId, text) {
  const list = document.getElementById(listId);
  if (list) {
    const newItem = document.createElement('li');
    newItem.textContent = text;
    list.appendChild(newItem);
  }
}

// Small game snippet: Coin flipper
function coinFlip() {
  return Math.random() < 0.5 ? "Heads" : "Tails";
}
```