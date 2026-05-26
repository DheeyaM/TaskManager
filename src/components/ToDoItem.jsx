import React, { use, useState } from 'react';


function ToDoItem({task, handleDelete, id, completed, handleComplete}){




    return (
        <>
        <div className="flex items-center justify-between p-4 border-b" >
            <div className="flex items-center"> 
                <p className="cursor-pointer w-6 text-center" onClick={() => handleComplete(id)}>{completed ? '✓' : '〇'}</p>
                <p className={"p-2 " + (completed ? "line-through text-gray-500" : "" )} >{task}</p>
                 </div>
           
            <button className="hover:bg-red-500 hover:text-white hove:border-red-500 bg-gray-300 border rounded p-4 cursor-pointer text-gray-700 text-xs w-20 h-8 flex items-center justify-center" onClick={() => handleDelete(id)}>Delete</button>
        </div>
        
        </>
    )
}
export default ToDoItem;