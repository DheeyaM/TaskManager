function Todo({ task, togglePopup}){
    
    function deleteHandler(){
        console.log("Delete", task[0]);
    }
    return (
        
        <div className="todoItem">
           <h2> {task}</h2>
           <button onClick={() =>
            togglePopup()}>Delete</button>
        </div>
    )
}

export default Todo;