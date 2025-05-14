import React, { useEffect, useState } from 'react'
import { AddEmployeeForm } from '../Components/AddEmployeeForm'
import { useParams } from 'react-router'
import axios from 'axios'
export const UpdateEmployee = () => {
    const {id,name}=useParams();
    const [Employee,setEmployee]=useState({})

    const getSingleEmpData= async()=>{
        const res=await axios.get(`http://localhost:3000/employees/${id}`);
        console.log(res.data);
        setEmployee(res.data)

    }
    useEffect(()=>{
        getSingleEmpData();
    },[id])

  return (
   <>
   <div>
    <h2 className='text-3xl ps-6 font-medium mt-5'>Update Employee</h2>
    <p className='text-md text-gray-500 ps-6'>Edit Details of {name}</p>

   </div>
   <div>
    <AddEmployeeForm isEdit={true} defaultvalue={Employee}/>
   </div>
   </>
  )
}
