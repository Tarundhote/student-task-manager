// Backend API URL
const api = "https://student-task-manager-23ls.onrender.com/";

// HTML elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Page load hote hi tasks dikhao
window.onload = function () {
  getTasks();
};

// Get all tasks
function getTasks() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      taskList.innerHTML = "";

      data.forEach((item) => {
        const li = document.createElement("li");

        const text = document.createElement("span");
        text.className = "task-text";
        text.innerText = item.task;

        const actions = document.createElement("div");
        actions.className = "task-actions";

        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.innerText = "Edit";
        editBtn.onclick = function () {
          updateTask(item.id, item.task);
        };

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = function () {
          removeTask(item.id);
        };

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(text);
        li.appendChild(actions);

        taskList.appendChild(li);
      });
    });
}

// Add new task
addBtn.onclick = function () {
  const task = taskInput.value;

  if (task === "") {
    alert("Please enter task");
    return;
  }

  fetch(api, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: task }),
  }).then(() => {
    taskInput.value = "";
    getTasks();
  });
};

// Update task
function updateTask(id, oldTask) {
  const newTask = prompt("Edit task", oldTask);

  if (newTask === "" || newTask === null) return;

  fetch(api + "/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: newTask }),
  }).then(() => {
    getTasks();
  });
}

// Delete task
function removeTask(id) {
  if (!confirm("Delete this task?")) return;

  fetch(api + "/" + id, {
    method: "DELETE",
  }).then(() => {
    getTasks();
  });
}
