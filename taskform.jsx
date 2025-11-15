import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, editTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "todo",
    priority: "medium",
    dueDate: ""
  });

  const [errors, setErrors] = useState({});
K
  useEffect(() => {
    if (editTask) setTask(editTask);
  }, [editTask]);

  const validate = () => {
    let err = {};

    if (!task.title.trim()) err.title = "Title is required";

    if (!task.dueDate) {
      err.dueDate = "Due date is required";
    } else if (new Date(task.dueDate) <= new Date()) {
      err.dueDate = "Due date must be in the future";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(task);
    setTask({
      title: "TASKMANAGEMENT",
      description: "",
      status: "todo",
      priority: "medium",
      dueDate: ""
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>{editTask ? "Edit Task" : "Add Task"}</h2>

      <input
        type="text"
        placeholder="Task Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      {errors.title && <p className="error">{errors.title}</p>}

      <textarea
        placeholder="Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />

      <select
        value={task.priority}
        onChange={(e) => setTask({ ...task, priority: e.target.value })}
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <input
        type="date"
        value={task.dueDate}
        onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
      />
      {errors.dueDate && <p className="error">{errors.dueDate}</p>}

      <button type="submit">{editTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
