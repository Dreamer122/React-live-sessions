import React from 'react'
import { Notebook } from 'lucide-react';
import { NavLink } from 'react-router';
export const Sidebar = () => {
  return (
  <>
  <aside className='bg-blue-700 text-white w-12/12 h-[80vh] p-3 rounded mb-2'>
<ul>
    <li className='text-3xl flex w-full h-20 bg-blue-400 p-4 rounded mb-2'> <NavLink to={""}> <Notebook className='relative top-1'  size={"30px"}/>Dashboard </NavLink></li>
    <li className='text-3xl flex w-full h-20 bg-blue-400 p-4 rounded mb-2'> <NavLink to={"/AllEmployee"}><Notebook className='relative top-1'  size={"30px"}/>All Employees  </NavLink></li>
    <li className='text-3xl flex w-full h-20 bg-blue-400 p-4 rounded mb-2'><NavLink to={"/AddEmployee"}> <Notebook className='relative top-1'  size={"30px"}/>Add Employee  </NavLink></li>
    
</ul>

  </aside>
  </>
  )
}
