export const DeleteTask = (props) =>{
return(
        <div>
              <h2>{props.taskName}</h2>
              {/* If we have arguments, we need to call a function that returns that func */}
              <button onClick={() => props.deleteTask(props.id)}> X </button>
              <button onClick={() => props.updateTask(props.taskName)}>Edit</button>
        </div>
)
}

