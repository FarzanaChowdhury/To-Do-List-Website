import './App.css';
import { useState } from 'react';
import {DeleteTask} from './Task'
function App() {
  // To make taskList
  const [taskList, setTaskList] = useState([]);
  // To get the task
  const [newTask, setNewTask] = useState("");

  //To set the task
  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
// create task object
    const task={
      id : taskList.length === 0 ? 1 : taskList[taskList.length - 1].id +1,
      taskName : newTask,
    }
    if(newTask !== "")
    setTaskList([...taskList, task]);
  }
  const deleteTask = (taskID) => {
    // Loop through each task,if task == taskname, then false->it will not be in the list. otherwise true
    const taskListAfterDeletetion = taskList.filter((task) => task.id !== taskID)
    setTaskList(taskListAfterDeletetion);
  }

  const updateTask = (task_Name) => {

  }

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>

      </div>

      <div className='list'>
        {taskList.map((task) => {
          return  <DeleteTask taskName = {task.taskName} id = {task.id} deleteTask = {deleteTask} updateTask = {updateTask}/>;
        
        })}
      </div>
    </div>
  );
}

export default App;
