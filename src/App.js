import './App.css';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([]);
  // To get the task
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }
  const addTask = () => {
    const newTaskList = [...taskList, newTask];
    setTaskList(newTaskList);
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>

      </div>
      
      <div className='list'>
        {taskList.map((task)=>{
          return(
            <h2>{task}</h2>
          )
        })}
      </div>
    </div>
  );
}

export default App;
