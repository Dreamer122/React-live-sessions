import React, { useState,useEffect } from 'react'

export const Header2 = (props) => {
    const [count,setCount]=useState(1)
    const [count1,setCount1]=useState(0)
    //  call api 
    // useEffect
    useEffect(()=>{
        // call api
    },[count])
  return (
    <div>
        <h1>Header - functional component</h1>
    <h2>{props.name}</h2>
    <h2>{count} {count1}</h2>

    </div>
  )
}
