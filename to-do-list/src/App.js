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

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    let copyArray = [], result = [];
    this.state.tasks.push(this.state.task);

    copyArray =  [...this.state.tasks];

    for (let i = 0; i < copyArray.length; i++) {
      let element = copyArray[i];
      
      if (element !== '') {
        result.push(element);
      } else {
        alert('Please, enter your task!');
      }
    }
    this.setState({tasks: result});
    this.setState({task: ''});
  }

  handleChange(event) {
    let userTask = event.target.value;
    this.setState({task: userTask});
  }

  handleCompleted(index) {
    let completedTask = this.state.tasks.splice(index, 1);
    this.state.completed.push(completedTask);
    this.setState({completed: this.state.completed});
    this.setState({tasks: this.state.tasks});
  }

  handleFailed(index) {
    let failedTask = this.state.tasks.splice(index, 1);
    this.state.failed.push(failedTask);
    this.setState({failed: this.state.failed});
    this.setState({tasks: this.state.tasks});
  }

  render() {
    const tasksToDo = this.state.tasks.map((element, index) => {
      return (
        <div className="task-container" key={index}>
          <p className="task-text">{element}</p>
          <div>
            <Button type="submit" className="btn btn-dark position" handleClick={this.handleCompleted.bind(this, index)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
              </svg>
            </Button> 
            <Button type="submit" className="btn btn-danger " handleClick={this.handleFailed.bind(this, index)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </Button>
          </div>
        </div>
      );
  });

    const completedTasks = this.state.completed.map((element, index) => {
      return (
        <div className="task-closed" key={index}>
          <p className="task-text">{element}</p>
        </div>
      );
    });

    const failedTasks = this.state.failed.map((element, index) => {
      return (
        <div className="task-closed" key={index}>
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
          <input type="text" id="taskName" className="taskName" value={this.state.task} onChange={this.handleChange} placeholder="Enter your task here..." />
          <Button type="submit" className="addBtn" handleClick={this.handleClick} >Add task</Button>
        </div>
        <div id="tasks">
          {tasksToDo}
        </div>
      </div>
      <div id="result">
        <div className="completedTasks">
          <h3 className="task-type">Completed tasks: <span className="quantity">{this.state.completed.length}</span></h3>
            <hr className="hor_line" />
              {completedTasks}
        </div>
        <div class="failedTasks">
          <h3 className="task-type">Failed tasks: <span className="quantity">{this.state.failed.length}</span></h3>
            <hr className="hor_line" />
              {failedTasks}
        </div>
      </div>
    </div>
    );
  }
}

export default App;
