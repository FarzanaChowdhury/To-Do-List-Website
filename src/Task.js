// Task.js
import React, { useState } from 'react';

export const ChangeTask = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTaskName, setUpdatedTaskName] = useState(props.taskName);

  const handleEditClick = () => {
    setIsEditing(true);
  }

  const handleOkClick = () => {
    // Update the task with the new task name
    props.updateTask(props.id, updatedTaskName);
    setIsEditing(false);
  }

  const handleCancelClick = () => {
    // Cancel editing, revert to the original task name
    setUpdatedTaskName(props.taskName);
    setIsEditing(false);
  }

  const handleInputChange = (event) => {
    // Update the updatedTaskName state when the input changes
    setUpdatedTaskName(event.target.value);
  }

  return (
    <div>
      {isEditing ? (
        <div >
          <input value={updatedTaskName} onChange={handleInputChange} />
          <button onClick={handleOkClick}>OK</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div className='tasks'> 
        <div className='taskDiv'>
          <div className='taskname'>
          <h2>{props.taskName}</h2></div>
          <div className='buttons'>
          <button onClick={() => props.deleteTask(props.id)}> X </button>
          <button id="Edit" onClick={handleEditClick}>Edit</button>
        </div>
        </div>
         </div>
      )}
    </div>
  );
}
