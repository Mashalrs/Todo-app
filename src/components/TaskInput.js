import React, { Component } from 'react';

class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskText: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ taskText: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (this.state.taskText.trim()) { // Only add task if text is not empty
      // Ensure addTask is a function before calling it
      if (typeof this.props.addTask === 'function') {
        this.props.addTask(this.state.taskText); // Call the addTask method passed as prop
        this.setState({ taskText: '' }); // Clear the input field
      } else {
        console.error('addTask is not a function');
      }
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.taskText}
          onChange={this.handleInputChange}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

export default TaskInput;
