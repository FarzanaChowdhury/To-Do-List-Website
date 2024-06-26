// TaskManagement.js
import './Task.css';
import { useState } from 'react';
import { ChangeTask } from './Task';
import SideBar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom" ;

function TaskManagement() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      taskName: newTask,
    }
    if (newTask !== "") {
      setTaskList([...taskList, task]);
      setNewTask("");
    }
  }

  const deleteTask = (taskID) => {
    const taskListAfterDeletion = taskList.filter((task) => task.id !== taskID);
    setTaskList(taskListAfterDeletion);
  }

  const updateTask = (taskID, updatedTaskName) => {
    //"OK" button is clicked
    const updatedTasks = taskList.map((task) =>
      task.id === taskID ? { ...task, taskName: updatedTaskName } : task
    );
    setTaskList(updatedTasks);
  }

  return (
    
    <div className='taskManegement'>
    {/* <h1>Task Management</h1> */}
      <div className='sidebar'>
        <SideBar></SideBar>
      </div>
      <div className='addTask'>
        <input value={newTask} onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className='list'>
        {taskList.map((task) => (
          <ChangeTask key={task.id} taskName={task.taskName} id={task.id} deleteTask={deleteTask} updateTask={updateTask} />
        ))}
      </div>
    </div>
    
  );
}

export default TaskManagement;
