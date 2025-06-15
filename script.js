const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const taskCount = document.getElementById('task-count');
const toast = document.getElementById('toast');

addBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = input.value.trim();
  if (taskText === '') {
    showToast("Please enter a task");
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
    updateCounter();
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  deleteBtn.onclick = (e) => {
    e.stopPropagation(); // Prevent toggling "completed"
    if (confirm("Are you sure you want to delete this task?")) {
      li.remove();
      updateCounter();
      showToast("Task deleted");
    }
  };

  li.appendChild(deleteBtn);
  todoList.appendChild(li);
  input.value = '';
  updateCounter();
  showToast("Task added!");
}

function updateCounter() {
  const tasks = todoList.querySelectorAll("li");
  taskCount.textContent = `Tasks: ${tasks.length}`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}
