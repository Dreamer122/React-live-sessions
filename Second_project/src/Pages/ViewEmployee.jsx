import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router'
import axios from 'axios';

export const ViewEmployee = () => {
    const {id}=useParams()
    const [empData,setEmpData]=useState({})

    const getEmployee=async()=>{
        try{

            const response=  await axios.get(`http://localhost:3000/employees/${id}`)
            console.log(response.data)
            setEmpData(response.data)
        }
        catch(error){
            console.log("error while fetching data")
        }
    }
   useEffect(()=>{
    getEmployee()
   },[])


  return (
   
    <div>
        <h2 className='text-xl m-4'>Employee details</h2>

        <div className='w-8/12 mx-auto bg-gray-200 rounded shadow-md p-4'>
        <div className='border-b border-gray-300'>
            <p className='text-lg'>Name:{empData?.firstname} {empData?.lastname}</p>
            <p className='text-lg'>post:{empData?.post}</p>
        </div>
        <div className='grid grid-cols-2 '>
            <p>
            department :{empData?.department}
            </p>
            <p>
               salary :{empData?.salary}
            </p>
            <p>dateOfJoining:{empData?.dateOfJoining} </p>
        </div>

        </div>
    </div>
  )
}
