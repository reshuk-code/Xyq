```javascript
// Simple To-Do List

(() => {
  const input = document.createElement('input');
  const button = document.createElement('button');
  const list = document.createElement('ul');

  input.type = 'text';
  button.textContent = 'Add';

  document.body.appendChild(input);
  document.body.appendChild(button);
  document.body.appendChild(list);

  button.addEventListener('click', () => {
    const text = input.value.trim();
    if (text) {
      const listItem = document.createElement('li');
      listItem.textContent = text;
      list.appendChild(listItem);
      input.value = '';

      listItem.addEventListener('click', () => {
        listItem.remove();
      });
    }
  });
})();
```