import './App.css';
import React from 'react';
import Button from './Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      tasks: [],
      completed: [],
      failed: [],
    };
  }

  handleClick(event) {
    this.state.tasks.push(this.state.task);
    this.setState({tasks: this.state.tasks});
    this.setState({task: ''});
  }

  handleChange(event) {
    let userTask = event.target.value;
    this.setState({task: userTask});
  }

  handleDelete(index) {
    this.state.tasks.splice(index, 1);
    this.setState({tasks: this.state.tasks});
  }

  render() {
    const tasksToDo = this.state.tasks.map((element, index) => {
      return (
        <div className="task-container" key={index}>
          <p className="task-text">{element}</p>
          <div>
            <Button type="submit" className="btn btn-dark my">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
              </svg>
            </Button> 
            <Button type="submit" className="btn btn-danger" handleClick={this.handleDelete.bind(this, index)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </Button>
          </div>
        </div>
      );
    });

    const completedTasks = this.state.completed.map((element, index) => {
      return (
        <div className="task-container" key={index}>
          <p className="task-text">{element}</p>
        </div>
      );
    });

    const failedTasks = this.state.failed.map((element, index) => {
      return (
        <div className="task-container" key={index}>
          <p className="task-text">{element}</p>
        </div>
      );
    });

    return (
    <div id="main">
      <div className="mainContent">
        <h1 className="header">To-do-list</h1>
        <hr />
        <div className="searchPanel">
          <input type="text" id="taskName" className="taskName" value={this.state.task} onChange={this.handleChange.bind(this)} />
          <Button type="submit" id="addBtn" handleClick={this.handleClick.bind(this)}>Add task</Button>
        </div>
        <div id="tasks">
          {tasksToDo}
        </div>
      </div>
      <div id="result">
        <div class="completedTasks">
          {completedTasks}
        </div>
        <div class="failedTasks">
          {failedTasks}
        </div>
      </div>
    </div>
    );
  }
}

export default App;
