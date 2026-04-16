import React, { useState, useEffect } from 'react';
import './taskFilterApp.css';

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Build a task filter app', completed: false },
      { id: 3, text: 'Complete assignment', completed: true },
    ];
  });
  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  const [filter, setFilter] = useState('all');
  const [newTask, setNewTask] = useState('');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const toggleTask = id => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = e => {
    e.preventDefault();
    const trimmed = newTask.trim();
    if (!trimmed) return;
    setTasks(tasks => [
      ...tasks,
      { id: Date.now(), text: trimmed, completed: false }
    ]);
    setNewTask('');
  };

  const handleDeleteTask = id => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = tasks.filter(task => !task.completed).length;

  return (
    <div className="task-filter-app">
      <h2>Task Filter App</h2>
      <div className="task-stats" style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16, fontWeight: 500 }}>
        <span>Total: {totalTasks}</span>
        <span>Completed: {completedTasks}</span>
        <span>Pending: {pendingTasks}</span>
      </div>
      <form className="add-task-form" onSubmit={handleAddTask} style={{ display: 'flex', gap: 8, marginBottom: 16, justifyContent: 'center' }}>
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Add a new task"
          style={{ flex: 1, padding: '6px 10px', borderRadius: 4, border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '6px 16px', borderRadius: 4, border: 'none', background: '#007bff', color: '#fff' }}>Add</button>
      </form>
      <div className="filter-buttons">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={filter === 'pending' ? 'active' : ''}
          onClick={() => setFilter('pending')}
        >
          Pending
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>
      <table className="task-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.length === 0 ? (
            <tr>
              <td colSpan="3" className="no-tasks">No tasks found.</td>
            </tr>
          ) : (
            filteredTasks.map(task => (
              <tr key={task.id}>
                <td>
                  <span className={task.completed ? 'completed' : ''}>{task.text}</span>
                </td>
                <td>
                  <button
                    className={task.completed ? 'completed' : ''}
                    onClick={() => toggleTask(task.id)}
                  >
                    {task.completed ? 'Mark Pending' : 'Mark Completed'}
                  </button>
                </td>
                <td>
                  <button
                    className="delete-task"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
// ...existing code...

export default TaskFilterApp;
