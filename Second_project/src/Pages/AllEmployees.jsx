import React, { useEffect ,useState} from 'react'
import { Card } from '../Components/Card'
import axios from 'axios'
export const AllEmployees = () => {

    const [emp,setEmp]=useState([])

    const getEmployees=async ()=>{
       const resp=await axios.get("http://localhost:3000/employees");
      
       setEmp(resp.data)
       console.log(data)
    }

    useEffect(()=>{
getEmployees()
    },[])
  return (
   <>
   <div>
    <h3 className='text-xl'>All employees</h3>
    <div className='flex  flex-wrap justify-around'>

   
  {
    emp?.map((employee,index)=>{
        return(
            <Card employee={employee} key={employee.id}/>
        )

    })
  }
   </div>
   </div>
   </>
  )
}
