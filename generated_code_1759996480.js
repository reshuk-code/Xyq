```javascript
// Simple To-Do List

function createTodoApp(containerId) {
  const container = document.getElementById(containerId);
  const input = document.createElement('input');
  const addButton = document.createElement('button');
  const list = document.createElement('ul');

  input.type = 'text';
  addButton.textContent = 'Add';

  container.appendChild(input);
  container.appendChild(addButton);
  container.appendChild(list);

  addButton.addEventListener('click', () => {
    const text = input.value.trim();
    if (text) {
      const listItem = document.createElement('li');
      listItem.textContent = text;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        list.removeChild(listItem);
      });

      listItem.appendChild(deleteButton);
      list.appendChild(listItem);
      input.value = '';
    }
  });
}


// Example Usage (assumes a <div id="todo-app"> exists in the HTML)
// createTodoApp('todo-app');
```