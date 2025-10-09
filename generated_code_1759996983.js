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
#todo-container {
  width: 300px;
  margin: 20px auto;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 8px;
  border-bottom: 1px solid #eee;
}
li:last-child {
  border-bottom: none;
}
button {
  padding: 5px 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
input[type="text"] {
  padding: 5px;
  width: 200px;
}
</style>
</head>
<body>

<div id="todo-container">
  <h1>To-Do List</h1>
  <input type="text" id="new-task" placeholder="Add a task">
  <button onclick="addTask()">Add</button>
  <ul id="task-list">
  </ul>
</div>

<script>
function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskList = document.getElementById("task-list");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
    taskInput.value = ""; // Clear the input
  }
}

document.getElementById("new-task").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
</script>

</body>
</html>
```