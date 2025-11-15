import React from "react";

const TaskCard = ({ task, onEdit, onDelete, onToggle }) => {
  const priorityColors = {
    low: "green",
    medium: "orange",
    high: "red"
  };

  return (
    <div className="task-card">
      <h3>
        {task.title}{" "}
        <span style={{ color: priorityColors[task.priority] }}>
          ({task.priority})
        </span>
      </h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due: {task.dueDate}</p>

      <button onClick={() => onToggle(task.id)}>
        {task.status === "completed" ? "Mark Incomplete" : "Mark Complete"}
      </button>

      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskCard;
