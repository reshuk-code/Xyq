```javascript
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function createCounter() {
  let count = 0;

  return {
    increment: () => {
      count++;
      return count;
    },
    decrement: () => {
      count--;
      return count;
    },
    reset: () => {
      count = 0;
      return count;
    },
    getValue: () => count
  };
}

function addListItem(listId, text) {
  const list = document.getElementById(listId);
  if (list) {
    const listItem = document.createElement("li");
    listItem.textContent = text;
    list.appendChild(listItem);
  }
}
```