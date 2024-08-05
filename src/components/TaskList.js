import React from 'react';

// Functional component to display the list of tasks
const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span 
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTaskCompletion(task.id)} // Toggle completion on click
          >
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)}>X</button> {/* Button to delete task */}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
