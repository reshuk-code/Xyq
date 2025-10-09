```javascript
// Simple To-Do List

<!DOCTYPE html>
<html>
<head>
<title>To-Do List</title>
<style>
body {
  font-family: sans-serif;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
li:last-child {
  border-bottom: none;
}
input[type="text"] {
  padding: 8px;
  width: 70%;
}
button {
  padding: 8px 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
.completed {
  text-decoration: line-through;
  color: #888;
}
</style>
</head>
<body>

<h1>To-Do List</h1>

<input type="text" id="new-task" placeholder="Add a new task...">
<button id="add-button">Add</button>

<ul id="task-list">
</ul>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const newTaskInput = document.getElementById('new-task');
    const addButton = document.getElementById('add-button');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', addTask);

    function addTask() {
      const taskText = newTaskInput.value.trim();
      if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        li.addEventListener('click', function() {
          li.classList.toggle('completed');
        });

        taskList.appendChild(li);
        newTaskInput.value = '';
      }
    }
  });
</script>

</body>
</html>
```