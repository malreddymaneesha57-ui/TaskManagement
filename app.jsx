import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
import "./task.css";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [filters, setFilters] = useState({
    status: "all",
    priority: "all",
    sort: "none",
    search: "  "
  });
  const handleSubmit = (task) => {
    if (editTask) {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
      setEditTask(null);
    } else {
      setTasks([...tasks, {...task, id: Date.now() }]);
    }
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };
  const toggleStatus = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id
           { -t,
              status: t.status === "completed" ? "todo" : "completed"
            } : t
      )
    );
  };
  const getFilteredTasks = () => {
    let filtered = [tasks];
    if (filters.status!== "all") {
      filtered = filtered.filter((t) => t.status === filters.status);
    }
    if (filters.priority!== "all") {
      filtered = filtered.filter((t) => t.priority === filters.priority);
    }
    if (filters.search) {
      filtered = filtered.filter((t) =>
        t.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    if (filters.sort === "date") {
      filtered.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }
    if (filters.sort === "priority") {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      filtered.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
    }
    return filtered;
  };
  return (
    <div className="container">
      <h1>Task Manager</h1>
      <Filters filters={filters} setFilters={setFilters} />
      <TaskForm onSubmit={handleSubmit} editTask={editTask} />
      <TaskList
        tasks={getFilteredTasks()}
        onEdit={setEditTask}
        onDelete={handleDelete}
        onToggle={toggleStatus} />
    </div>
  );
};
