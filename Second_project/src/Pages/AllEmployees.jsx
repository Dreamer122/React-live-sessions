import React, { useEffect ,useState} from 'react'

export const AllEmployees = () => {

    const [emp,setEmp]=useState([])

    const getEmployees=async ()=>{
       const resp=await fetch("http://localhost:3000/employees");
       const data=await resp.json()
       setEmp(data)
       console.log(data)
    }

    useEffect(()=>{
getEmployees()
    },[])
  return (
   <>
   <div>
  {
    emp?.map((employee,index)=>{
        return(
            <div key={index}>

                <p>{employee.firstname}</p>
                <p>{employee.salary}</p>
                <p>{employee.post}</p>
            </div>
        )

    })
  }
   </div>
   </>
  )
}
