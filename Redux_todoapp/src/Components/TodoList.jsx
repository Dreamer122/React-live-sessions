import React, { useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { deleteTodo ,updateTodo,completeTodo} from '../Redux/Features/todoSlice'

export const TodoList = () => {
   const {todos}= useSelector((state)=>state.todo)
   const dispatch=useDispatch()
   const [editText,setEditText]=useState("")
   const [isEdit,setIsEdit]=useState("")


   const deletetodo=(id)=>{
    dispatch(deleteTodo(id))
    alert("todo deleted")


   }
   const edittodo=(todo)=>{
    setIsEdit(todo.id)
    setEditText(todo.text)

   }
   const handleSave=()=>{
    dispatch(updateTodo({id:isEdit,text:editText}))
    setIsEdit("")
    setEditText("")
    alert("todo updated")
   }

   const completed=(id)=>{
    dispatch(completeTodo(id))
    console.log("completed")

   }
  return (
   <>
   <div className='bg-green-200 rounded w-10/12 mx-auto shadow p-4'>
    { todos.length==0?<p className='text-gray-400'>Add a new task</p>:
        todos?.map((todo,index)=>{
            return (
            


                <div key={todo.id} className='flex justify-between border-b-1 border-green-700 mb-2 '>
                    <div>
                        {
                         todo.id==isEdit?<input type='text' value={editText} onChange={(e)=>setEditText(e.target.value)}/>:
                          <p onClick={()=>completed(todo.id)}  className={todo.completed?"line-through":" cursor-pointer"}>{todo.text}</p>}
                    </div>
                    <div className='mb-2'>
                      {todo.id==isEdit? 
                       <button className='px-3 py-1 rounded bg-green-600 text-white mx-3'  onClick={handleSave}>save</button> : 
                      <button className={`px-3 py-1 rounded bg-blue-600 text-white mx-3 disabled:bg-blue-400`} disabled={todo.completed} onClick={()=>edittodo(todo)}>edit</button>}
                        <button className='px-3 py-1 rounded bg-red-500 text-white disabled:bg-red-300'
                        disabled={todo.completed}
                        onClick={()=>deletetodo(todo.id)}
                        >delete</button>
                    </div>

                </div>
            )


        })
    }
   </div>
   
   </>
  )
}

// 
/*

react-redux
useSelector((state)=>{state.todo})

delete -> click -> id==array item <- remove
filter -> id-id 

*/
