import React, { useState ,useCallback} from 'react'
import { Child } from './Child'

export const Parent = () => {
    const [value,setvalue]=useState(0)
    const [dummy,setDummy]=useState(1)
    console.log("parent rendered")
    // const handleclick=()=>{
    //     console.log("handle click function called")
    // }
 const handleclick= useCallback(()=>{
    setDummy(dummy+1)
        console.log("handle click function called",dummy)
    },[dummy])
  return (

<>
   
   <button onClick={()=>setvalue(value+1)}>click to increase</button>
   <p>{value}</p>
   {/* <button onClick={()=>setDummy(value+1)}>increase callback </button> */}

   <Child dummyvalue={"MEMO COMPONENT"} handleclick={handleclick}/>
   </>
  )
}
