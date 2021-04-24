import './App.css';
import React, { useState } from 'react';
import Button from './Button';

const SecondApp = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [failed, setFailed] = useState([]);

    return (
        <div id="main">
            <div className="mainContent">
                <h1 className="header">To-do-list</h1>
                <hr />
                <div className="searchPanel">
                    <input type="text" id="taskName" className="taskName" value={task} />
                    <Button type="submit" className="addBtn" />
                </div>
                <div id="tasks">
                    {}
                </div>
            </div>
            <div id="result">
                <div className="completedTasks">
                    <h3 className="task-type">Completed tasks: <span className="quantity">{completed.length}</span></h3>
                        <hr className="hor_line" />
                        {}
                </div>
                <div className="failedTasks">
                    <h3 className="task-type">Failed tasks: <span className="quantity">{failed.length}</span></h3>
                </div>
            </div>
        </div>
    );
};

export default SecondApp;