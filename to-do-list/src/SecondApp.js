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
                </div>
            </div>
        </div>
    );
};

export default SecondApp;