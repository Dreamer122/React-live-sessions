import React, { useEffect ,useState} from 'react'
import { Card } from '../Components/Card'
import axios from 'axios'
export const AllEmployees = () => {
  const dept_array=[
    "All department",
    "HR",
    "IT",
    "Finance",
    "Sales",
    "Marketing",

  ]


    const [emp,setEmp]=useState([])
    
    const [filtered,setFiltered]=useState([])
    const [totalPages,setTotalPages]=useState(0)
    const [page,setPage]=useState(1)
    

    const getEmployees=async ()=>{
       const resp=await axios.get(`http://localhost:3000/employees?_page=${page}&_per_page=3`);
      console.log(resp)
     
      // console.log(resp.data)
        setFiltered(resp.data.data)
       setEmp(resp.data.data)
       setTotalPages(resp.data.pages)
    }

const filterBydep=(department)=>{
  if(department=="All department"){
    setFiltered(emp)
  }
  else{

    const filterdata=emp.filter((emp)=>emp.department==department)
    setFiltered(filterdata)
  }
}


    useEffect(()=>{
getEmployees()
    },[page])
  return (
   <>
   <div className='p-4'>

<div className='flex justify-between'>

    <h3 className='text-3xl my-3'>All employees</h3>
    <div className='my-3'>
      <select name='department' onChange={(e)=>filterBydep(e.target.value)} className='bg-blue-100 border  border-blue-400 rounded outline-0'>
        {
          dept_array.map((dep,index)=>{
            return(
              <option value={dep} key={index}>{dep}</option>
            )

          })
        }

      </select>
    </div>
</div>
    
    
    

    <div className='flex  flex-wrap justify-around'>

   
  {
    filtered.length==0?<h2 className='text-3xl text-pink-800 text-center'>No Data found</h2>:
    filtered?.map((employee,index)=>{
        return(
            <Card employee={employee} key={employee.id}/>
        )

    })
  }
   </div>
   <div className='text-center'>
    <button onClick={()=>setPage(page-1)} disabled={page==1?true:false} className='bg-blue-700 text-white
    disabled:bg-blue-400  px-4 py-3 rounded'>Prev</button>
    <span className='text-3xl font-medium mx-4'>{page}</span>
    <button onClick={()=>setPage(page+1)} disabled={page==totalPages?true:false} className='bg-blue-700
    disabled:bg-blue-400 text-white px-4 py-3 rounded'>Next</button>
   </div>
  
   </div>
   </>
  )
}
