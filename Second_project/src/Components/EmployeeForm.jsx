import React, { useState } from 'react'

export const EmployeeForm = () => {
    const [formdata,setFormdata]=useState({
      firstname:"",
      lastname:""  
    })
   
    const getData=(e)=>{
        let v=e.target.value
        let n=e.target.name
        // console.log(n,v)
       setFormdata((prev)=>{
    return(
        {
            ...prev,
           [n]:v,
        }
    )})

    // console.log(formdata)

    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formdata)
    }
  return (
   <>
   <div className='w-1/2 mx-auto '>

 
   <form action="" onSubmit={handleSubmit}>
    <label htmlFor="firstname">firstname</label>
    <input type="text" name='firstname' placeholder='firstname' className='outline-1' onChange={getData} /> <br />

    <label htmlFor="lastname">lastname</label>

    <input type="text" name='lastname' placeholder='lastname' className='outline-1' onChange={getData} /> <br />
    <input type="submit" value="Add employee" className='outline-1' />
   </form>
   </div>
   </>
  )
}
