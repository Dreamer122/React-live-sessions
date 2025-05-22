import React, { useState } from 'react'
import { addTodo } from '../Redux/Features/todoSlice'
import { useDispatch } from 'react-redux'
export const TodoInput = () => {
    const dispatch=useDispatch()
    const [task,setTask]=useState("")

    const addTask=()=>{
        dispatch(addTodo(task))
        console.log("task added")
        setTask("")
    }
  return (
    <>
    <div className='w-3/4  mx-auto'>
        <input type="text" placeholder='enter task' value={task} onChange={(e)=>setTask(e.target.value)}
          className='border-b border-green-600 outline-none w-3/4 h-10 '/>
        <button className='py-2 px-3 bg-green-600 text-white' onClick={addTask}>Add task</button>
    </div>
    </>
  )
}

// for calling a function from store  
//  we will use a hook called useDispatch