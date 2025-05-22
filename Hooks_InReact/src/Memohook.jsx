import React, { useState,useMemo, useEffect } from 'react'

export const Memohook = () => {
    const [value,setvalue]=useState(0)
    const [inputvalue,setInputValue]=useState(0)
    console.log("component rendered")

    let k=1
    const sum=(num)=>{
        console.log("sum function called")
        for(let i=0;i<1000;i++){
            k=k+num
        }
    return  k

    }
    // const sumvalue=sum()
    const sumvalue= useMemo(()=>sum(inputvalue),[inputvalue])

  return (
    <>
    
    <button onClick={()=>setvalue(value+1)}>click to increase</button>
    <p>{value}</p>

    <p>{sumvalue}</p>

    <input type="text" value={inputvalue} onChange={(e)=>setInputValue(Number(e.target.value))} placeholder='enter a number' />
    
    </>
  )
}
