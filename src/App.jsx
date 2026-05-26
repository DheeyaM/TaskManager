
import './App.css'
import { useState } from 'react';
import ToDoItem from './components/ToDoItem';



 function App() {

const [tasks, setTasks] = useState([]);
const [inputValue, setInputValue] = useState("");

function handleClick(){
  if (inputValue === ""){
     alert("PLease enter valid input!");
    return;
  }

  setTasks([...tasks, { task: inputValue, id: Date.now(), completed: false}]);
  setInputValue("");
}

function handleDelete(id){
  setTasks(tasks.filter((task) => task.id !== id));
}
function handleComplete(id){
  setTasks(tasks.map((task) => {
    if (task.id === id){
      return {...task, completed: !task.completed};
    }
    return task;
  }));
}

  return (
    <div className= "border border-gray-200 min-h-screen h-[650px] bg-gray-200 w-[500px] m-8 rounded-lg shadow-md ml-[500px]" >
 <h1 className= " m-0 flex items-center pl-24 pt-4 text-4xl font-bold mb-0">My Todo List:</h1>
 <br />
 <input type="text" placeholder='Add a new task' className="ml-3 mt-0 w-[350px] p-4 rounded border ml-1 m-4 ml-4" value={inputValue}  onChange={(e) =>  setInputValue(e.target.value)} />
 <button className="hover:bg-blue-600 w-24 p-2 m-2 bg-blue-500 text-center text-white"onClick={() => handleClick()}>Add Task</button>

 <ul className="overflow-y-auto max-h-[500px] list-none no-underline" > {
tasks.map((task) => (
<li key={task.id}>  <ToDoItem task={task.task} handleDelete={() => handleDelete(task.id)} completed={task.completed} handleComplete={() => handleComplete(task.id)} id={task.id} /> </li>
  )  ) }

 </ul> 
 

    </div>
  );
}


export default App
