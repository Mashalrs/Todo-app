import React, { Component } from 'react';
import TaskList from './components/TaskList.js';  // Import the TaskList component
import TaskInput from './components/TaskInput.js'; // Import the TaskInput component
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      filter: 'all' // Possible values: 'all', 'completed', 'pending'
    };
  }

  addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask]
    }));
  }

  deleteTask = (taskId) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== taskId)
    }));
  }

  toggleTaskCompletion = (taskId) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    }));
  }

  setFilter = (filter) => {
    this.setState({ filter });
  }

  render() {
    const { tasks, filter } = this.state;
    const filteredTasks = tasks.filter(task => {
      if (filter === 'completed') return task.completed;
      if (filter === 'pending') return !task.completed;
      return true;
    });

    return (
      <div className="container">
        <h1>To-Do List</h1>
        <TaskInput addTask={this.addTask} />
        <div className="filters">
          <button onClick={() => this.setFilter('all')}>All</button>
          <button onClick={() => this.setFilter('completed')}>Completed</button>
          <button onClick={() => this.setFilter('pending')}>Pending</button>
        </div>
        <TaskList 
          tasks={filteredTasks}
          deleteTask={this.deleteTask}
          toggleTaskCompletion={this.toggleTaskCompletion}
        />
      </div>
    );
  }
}

export default App;