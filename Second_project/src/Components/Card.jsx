import React from 'react'
import { Mail, PhoneCall ,CalendarDays ,Eye , UserRoundPen, Trash2 } from 'lucide-react';
import { Link } from 'react-router';
import axios from 'axios';
export const Card = ({employee}) => {

   const {id,firstname,Lastname,department,salary,status,email,phone,dateOfJoining,post}=employee
  // delete a employee
   const handleDelete=async(id)=>{
    const check=confirm("are you sure?")
   
      try{
        if(check){
        await axios.delete(`http://localhost:3000/employees/${id}`)
        // console.log('employee deleted')
        alert("employee deleted successfully")
        }
      }
      catch(error){
        console.log("error occured while deleting employee",error)
      }
    }
   


  
   
   return (
    
    <>
    <div className='w-[300px] p-5 rounded shadow-md h-80 bg-gray-100 relative mb-3'>
        <div className='flex justify-between border-b border-gray-300 mb-4'>
            <div className='flex'>

      <div className='w-1/2'>
      <img className='rounded-full ' src={`https://api.dicebear.com/9.x/initials/svg?seed=${firstname} ${Lastname}`}
        alt="avatar" />
      </div>
    <div className='w-1/2'>
    <span className='text-lg font-semibold'>
        {firstname} {Lastname}
    </span>
    <p className='text-sm '>{post}</p>
    </div>
            </div>

            <div>
                <span className={`text-sm px-4 py-2 rounded-full ${status=='Active'?'text-green-500 bg-green-300':"text-red-500 bg-red-300"} `}>{status}</span>
            </div>
        </div>

<div>
    <p className='text-sm flex'><Mail size={15} className='text-gray-400 relative top-1 mx-2' />{email}</p>
    <p className='text-sm flex'><PhoneCall size={15} className='text-gray-400 relative top-1 mx-2' /> {phone}</p>
    <p className='text-sm flex'><CalendarDays size={15}  className='text-gray-400 relative top-1 mx-2'/> {dateOfJoining}</p>

    <p className='text-sm text-gray-500 mx-2'> Department:{department}</p>

</div>

{/*  action div */}
<div className='absolute bottom-0 left-0 w-full bg-gray-200'>
<div className='flex justify-around'>
<Link to={`/view/${id}`}>  <button className='text-green-700 flex py-4 '> <Eye/>view</button></Link>
 <Link to={`/edit/${id}/${firstname}`}>   <button className='text-orange-400 flex py-4 '>< UserRoundPen ></UserRoundPen>edit</button> </Link>
 <button className='text-red-500 flex py-4' onClick={()=>handleDelete(id)}>< Trash2/>delete</button>
</div>
</div>
    </div>
    </>
  )
}
