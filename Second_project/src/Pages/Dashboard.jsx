import React, { useEffect, useState } from 'react'
import { UserPlus, CircleUser,Activity,DollarSign    } from 'lucide-react';
import { Link } from "react-router"
import axios from 'axios';
export const Dashboard = () => {
  const [AllData,setAlldata]=useState([])
  const [Activeemp,setActiveemp]=useState([])
  const [avg,setAvg]=useState(0)

  const getData=async()=>{
    try{
      const res=await axios.get("http://localhost:3000/employees")
      setAlldata(res.data)

    }
    catch(error){
      console.log("error occurred while fetching data",error)
    }
  }
// get active employee
const getActiveEmployee=()=>{
  const data=AllData.filter((emp)=>emp.status=="Active")
  setActiveemp(data)

}

// avg salary
const getAvgSalary=()=>{
  const total=AllData.reduce((acc,emp)=>{
    return acc+ Number(emp.salary)
  },0)
  setAvg((total/AllData.length).toFixed(2))
  
}


  useEffect(()=>{
    getData()
  },[])

  useEffect(()=>{
    getActiveEmployee()
    getAvgSalary()
  },[AllData])

  return (
   <>
   <div>
    <div className='flex justify-between p-3 mt-3'>
      <h2 className='text-3xl font-bold'>Dashboard</h2>
     <Link to={"/addemployee"} className='bg-blue-700 text-white rounded  py-1 flex gap-2 px-3'> <UserPlus />Add Employee</Link>
    </div>

    {/*  stats */}
    <div className='flex gap-3 w-12/12 p-3 flex-wrap'>
      <div className='w-5/12 h-max shadow-md bg-blue-100 rounded  py-10 flex items-center justify-center'>
      <CircleUser size={40} className='text-blue-950'/>
      <div>
        <p className='text-xl capitalize'>total employees</p>
        <p className='text-xl'>{AllData.length}</p>
      </div>
      </div>

      {/* active  users */}
      <div className='w-5/12 h-max shadow-md bg-blue-100 rounded  py-10 flex items-center justify-center'>
      <Activity  size={40} className='text-red-600'/>
      <div>
        <p className='text-xl capitalize'>Active employees</p>
        <p className='text-xl'>{Activeemp.length}</p>
      </div>
      </div>
      {/* avg salary */}
      <div className='w-5/12 h-max shadow-md bg-blue-100 rounded  py-10 flex items-center justify-center'>
      <DollarSign   size={40} className='text-green-900'/>
      <div>
        <p className='text-xl capitalize'> Avg salary</p>
        <p className='text-xl'>{avg}</p>
      </div>
      </div>
    </div>
   </div>
   </>
  )
}
