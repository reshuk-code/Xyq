```javascript
// Simple To-Do List

<!DOCTYPE html>
<html>
<head>
<title>Simple To-Do List</title>
<style>
  body { font-family: sans-serif; }
  ul { list-style-type: none; padding: 0; }
  li { padding: 5px; border-bottom: 1px solid #eee; }
  li:last-child { border-bottom: none; }
  .done { text-decoration: line-through; color: #888; }
</style>
</head>
<body>

<h1>To-Do List</h1>

<input type="text" id="new-task" placeholder="Add new task">
<button id="add-button">Add</button>

<ul id="task-list">
  <!-- Tasks will be added here -->
</ul>

<script>
  const newTaskInput = document.getElementById('new-task');
  const addButton = document.getElementById('add-button');
  const taskList = document.getElementById('task-list');

  addButton.addEventListener('click', addTask);

  newTaskInput.addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== "") {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      listItem.addEventListener('click', function() {
        this.classList.toggle('done');
      });

      taskList.appendChild(listItem);
      newTaskInput.value = "";
      newTaskInput.focus();
    }
  }
</script>

</body>
</html>
```