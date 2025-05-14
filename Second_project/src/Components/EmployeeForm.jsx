import React, { useState } from 'react'

export const EmployeeForm = () => {
    const [formdata,setFormdata]=useState({
      firstname:"",
      lastname:""  ,
      gender:"",
      Hobbies:[]
    })

    const [error,setError]=useState({
      firstname:"",
      lastname:""
    })
    const [isvalid,setIsvalid]=useState(false)
   
    const getData=(e)=>{
        // let v=e.target.value
        // let n=e.target.name
        // // console.log(n,v)
        // let inputType=e.target.type
        const {value,name,type,checked}=e.target
    setIsvalid(validateInput(name,value))
        if(type=="checkbox"){
          if(checked){
          setFormdata((prev)=>{
            return(
              {
                ...prev,
                [name]:[...prev.Hobbies,value]
              }
            )

          })
         
        }
        else{
          setFormdata((prev)=>{
            return(
              {
                ...prev,
                [name]:[...prev.Hobbies.filter((hobby)=>hobby!=value)]
              }
            )

          })
          
        }
        }
        else{

          setFormdata((prev)=>{
       return(
           {
               ...prev,
              [name]:value,
           }
       )})
        }



    // console.log(formdata)

    }


    // validate input boxes 

    const validateInput=(name,value)=>{

      if(name=="firstname"){
        if(value.length<3 || !value.match(/^[a-zA-Z]*$/)){
          setError((prev)=>{
            return{
              ...prev,
              [name]:"name is invalid"
            }
          })
          return false
        }
        else{
          setError((prev)=>{
            return{
              ...prev,
              [name]:""
            }
          })
          return true
        }
      }

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(isvalid){

          console.log(formdata)
        }
        else{
          alert("form has invalid values")
        }
    }
  return (
   <>
   <div className='w-1/2 mx-auto '>

 
   <form action="" onSubmit={handleSubmit}>
    <label htmlFor="firstname">firstname</label>
    <input type="text" name='firstname' placeholder='firstname' className='outline-1' onChange={getData} /> <br />
    <span className='text-red-600'>{error.firstname}</span>

    <label htmlFor="lastname">lastname</label>

    <input type="text" name='lastname' placeholder='lastname' className='outline-1' onChange={getData} /> <br />

<label htmlFor="gender">
  gender:
</label>
<input type="radio" value="male" name='gender' id='male'  onChange={getData}/> <label htmlFor="male">male</label>
<input type="radio" value="female" name='gender' id='female' onChange={getData}/><label htmlFor="female">female</label> <br />

{/* checkbox hobbies */}
<label htmlFor=""> HObbies</label>

<input type="checkbox" value={"reading"} name='Hobbies'  id='reading' onChange={getData}/> <label htmlFor="reading">Reading</label>
<input type="checkbox" value={"Basketball"} name='Hobbies'  id='Basketball' onChange={getData}/> <label htmlFor="Basketball">Basketball</label>
<input type="checkbox" value={"Cycling"} name='Hobbies'  id='Cycling' onChange={getData}/> <label htmlFor="Cycling">Cycling</label>
<br />
<input type="submit" value="Add employee" className='outline-1' />

   </form>
   </div>
   </>
  )
}
