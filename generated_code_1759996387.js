```javascript
// Simple To-Do List

<!DOCTYPE html>
<html>
<head>
<title>Simple To-Do List</title>
<style>
body {
  font-family: sans-serif;
}
#todo-list {
  list-style: none;
  padding: 0;
}
#todo-list li {
  padding: 8px;
  border-bottom: 1px solid #eee;
}
#todo-list li:last-child {
  border-bottom: none;
}
</style>
</head>
<body>
<h1>To-Do List</h1>
<input type="text" id="new-task" placeholder="Add new task">
<button id="add-button">Add</button>
<ul id="todo-list"></ul>

<script>
  const newTaskInput = document.getElementById('new-task');
  const addButton = document.getElementById('add-button');
  const todoList = document.getElementById('todo-list');

  addButton.addEventListener('click', function() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== "") {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
      todoList.appendChild(listItem);
      newTaskInput.value = ""; // Clear the input
    }
  });

  newTaskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addButton.click(); // Simulate button click
    }
  });
</script>
</body>
</html>
```