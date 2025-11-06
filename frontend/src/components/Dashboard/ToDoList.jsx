import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { text: "Update hero banner", done: false },
    { text: "Add new subcategory", done: false },
    { text: "Review pending product requests", done: true },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask, done: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  return (
    <div className="glass-card">
      <h3 style={{ color: "var(--brand-blue)", marginBottom: "10px" }}>
        To-Do List
      </h3>

      <div className="todo-list">
        {tasks.map((task, i) => (
          <div
            key={i}
            className={`todo-item ${task.done ? "done" : ""}`}
            onClick={() => toggleTask(i)}
          >
            {task.text}
          </div>
        ))}
      </div>

      <div className="todo-add">
        <input
          type="text"
          placeholder="Add new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="admin-btn" onClick={addTask}>
          Add
        </button>
      </div>
    </div>
  );
};

export default ToDoList;

const css = `
.todo-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
}

.todo-item {
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid var(--light-border);
  border-radius: 8px;
  cursor: pointer;
  transition: 0.25s ease;
}

.todo-item:hover {
  background: rgba(209, 117, 4, 0.08);
}

.todo-item.done {
  text-decoration: line-through;
  color: var(--neutral-gray);
  opacity: 0.7;
}

.todo-add {
  display: flex;
  gap: 8px;
}

.todo-add input {
  flex: 1;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid var(--light-border);
  font-family: "Outfit", sans-serif;
  font-size: 14px;
}

`;

const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);