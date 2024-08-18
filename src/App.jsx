import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [tasks, setTask] = useState([]);
  const EnteredTask = useRef();
  function handleAdd() {

    setTask((prevTasks) =>
      [
        ...prevTasks,
        EnteredTask.current.value
      ]
    );

  }
  function handleDelete(targetIndex) {
    setTask((prevTasks) => prevTasks.filter((task, index) => index != targetIndex));
  }
  return (
    <>
      <label htmlFor="">Enter the task: <input type="text" ref={EnteredTask} /></label>
      <button onClick={handleAdd}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (<li key={index}>{task}<button onClick={() => handleDelete(index)}>Delete</button></li>))}
      </ul>
    </>
  )
}

export default App
