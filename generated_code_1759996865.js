```javascript
// Simple To-Do List

function createTodoList() {
  const container = document.createElement('div');
  const input = document.createElement('input');
  const addButton = document.createElement('button');
  const list = document.createElement('ul');

  container.style.maxWidth = '300px';
  input.style.width = '80%';
  addButton.textContent = 'Add';

  addButton.addEventListener('click', () => {
    if (input.value) {
      const listItem = document.createElement('li');
      listItem.textContent = input.value;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        listItem.remove();
      });

      listItem.appendChild(removeButton);
      list.appendChild(listItem);
      input.value = '';
    }
  });

  container.appendChild(input);
  container.appendChild(addButton);
  container.appendChild(list);

  return container;
}

// Example usage (append to body):
// document.body.appendChild(createTodoList());
```