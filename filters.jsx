import React from "react";

const Filters = ({ filters, setFilters }) => {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by Title"
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />

      <select
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
      >
        <option value="all">All Status</option>
        <option value="todo">Todo</option>
        <option value="in-progress">In-Progress</option>
        <option value="completed">Completed</option>
      </select>

      <select
        value={filters.priority}
        onChange={(e) => setFilters({ ...filters, priority: e.target.value })}
      >
        <option value="all">All Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <select
        value={filters.sort}
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
      >
        <option value="none">No Sorting</option>
        <option value="date">Sort by Due Date</option>
        <option value="priority">Sort by Priority</option>
      </select>
    </div>
  );
};

export default Filters;
