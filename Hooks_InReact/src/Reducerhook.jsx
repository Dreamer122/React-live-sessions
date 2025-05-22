import React, { useState,useReducer, act } from 'react'

export const Reducerhook = () => {
    // const [count,setCount]=useState(0)
    // const [text,setText] =useState("")
    const reducer=(state,action)=>{ 

        if(action.type=="increment"){
            return {
                ...state,
                count:state.count+action.payload
            }
        }
        else if(action.type=="decrement"){
            return {
                ...state,
                count:state.count-action.payload
            }
        }
        else if(action.type=="input"){
            return{
                ...state,
                text:action.payload
            }
        }
        else{
            return state
        }

      }
    
   const [state,dispatch] =useReducer(reducer,{
    count:0,
    text:""
   })
//    console.log()
// dispatch triggers the reducer function

  return (
    <>
    
    {/* <button onClick={()=>setCount(count+1)}>increase</button>
    <p>{count}</p>
    <button onClick={()=>setCount(count-1)}>decrease</button>
    <br /> */}
    <button onClick={()=>dispatch({type:"increment",payload:2})}>increase</button>
    <p>{state.count}</p>
    <button onClick={()=>dispatch({type:"decrement",payload:3})}>decrease</button>
    <br />


    <input type="text" onChange={(e)=> dispatch({type:"input",payload:e.target.value})}  placeholder='enter text'/>
    <p>input box:{state.text}</p>

    </>
  )
}
