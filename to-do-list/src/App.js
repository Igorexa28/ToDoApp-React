import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      tasks: [],
    };
  }

  render() {
    return (
      <div className="mainContent">
        <h1 className="header">To-do-list</h1>
        <hr />
        <div className="searchPanel">
          <input type="text" className="" value={this.state.task} />
          <button type="submit" className="btn btn-outline-success" id="">Add task</button>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default App;
