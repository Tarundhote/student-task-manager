const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const filePath = "./tasks.json";

// Read tasks from file
function readData() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

// Write tasks to file
function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Get all tasks
app.get("/tasks", (req, res) => {
  const tasks = readData();
  res.send(tasks);
});

// Add task
app.post("/tasks", (req, res) => {
  const tasks = readData();

  const newTask = {
    id: Date.now(),
    task: req.body.task,
  };

  tasks.push(newTask);
  writeData(tasks);

  res.send(newTask);
});

// Update task
app.put("/tasks/:id", (req, res) => {
  const tasks = readData();
  const id = Number(req.params.id);

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks[i].task = req.body.task;
    }
  }

  writeData(tasks);
  res.send({ message: "Task updated" });
});

// Delete task
app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  let tasks = readData();

  tasks = tasks.filter((t) => t.id !== id);
  writeData(tasks);

  res.send({ message: "Task deleted" });
});

// Start server
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
