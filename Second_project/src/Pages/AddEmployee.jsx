import React from 'react'
// import { EmployeeForm } from '../Components/EmployeeForm'
import { AddEmployeeForm } from '../Components/AddEmployeeForm'

export const AddEmployee = () => {
  return (
   <div>
    <h2 className='text-xl my-5 mx-3'>ADD NEW EMPLOYEE</h2>
   <AddEmployeeForm/>
   </div>
  )
}
