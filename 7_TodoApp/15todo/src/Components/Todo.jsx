import React, { useState } from 'react'

function Todo() {

    let [task, setTask] = useState(["Eat"])

    let [newTask, setNewTask] = useState("")

    let handleInput = (e) => {

        setNewTask(t => t = e.target.value)
    }

    let handleAdd = (e) => {

        if(newTask.trim() === "") return
        setTask(t => [...t, newTask])
        setNewTask("")
    }
    
    let handleDelete = (index) => {

        setTask(prevTask => prevTask.filter((task, i) => i !== index))
    }
    
    let handleUp = (index) => {

            if(index === 0) return;
                           
        //------ below method is from chatgpt but is more reliable as latest state we use here---------------
            // setTask(prev => {

            //     let updatedTask = [...prev];

            //     [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]];
            //     return updatedTask; })

            let updatedTask = [...task];

            [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]];

            setTask(updatedTask);
        }
    

    let handleDown = (index) => {

        if(index >= task.length - 1) return   

        //------ below method is from chatgpt but is more reliable as latest state we use here---------------
        // setTask(prev => {

        //     let updatedTask = [...prev];
        //     [updatedTask[index], updatedTask[index+1]] = [updatedTask[index+1], updatedTask[index]];
        //     return updatedTask;        
        // })

        let updatedTask = [...task];

        [updatedTask[index], updatedTask[index+1]] = [updatedTask[index+1], updatedTask[index]];

        setTask(updatedTask)
    }


  return (
    <>
    
        <div className="todo-container">

            <h1>Todo List</h1>

        <div className="input-area">

           <input type="text"  
                className="NewTask" 
                value = {newTask} 
                placeholder='Enter task' 
                onChange={handleInput}
            />

            <button type='submit' onClick={handleAdd} className='addButton'>Add</button> 

        </div>

        <div className='taskLists'>

            <ol>

                {task.map((t, index) => (
                    
                    <li key={index}> {t} 

                    <button onClick={() => handleDelete(index)}>❌</button>
                    <button disabled={index === 0} onClick={() => handleUp(index)}>⬆️</button>
                    <button disabled={index >= task.length-1} onClick={() => handleDown(index)}>⬇️</button>

                    </li>
                ))}
            </ol>         
        </div>
        </div>
        
    </>
    
  )
}
export default Todo