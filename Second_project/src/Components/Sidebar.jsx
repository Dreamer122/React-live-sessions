import React from 'react'
import { House, User, UserPlus  } from 'lucide-react';
import { NavLink } from 'react-router';
export const Sidebar = () => {

  const sidebararray=[
    {
      text:"Dashboard",
      icon:<House/>,
      path:"/"
    },
    {
      text:"All Employees",
      icon:<User/>,
      path:"/AllEmployee"
    },
    
    {
      text:"Add Employee",
      icon:<UserPlus/>,
      path:"/AddEmployee"
    },


  ]

  return (
  <>
  <aside className='bg-blue-700 text-white w-12/12 h-screen p-3 rounded mb-2'>
  <div className='border-b border-gray-100 text-center'>
    <p className='my-2'>EMS</p>
  </div>
<ul>
   {
    sidebararray.map((obj,index)=>{
    return(  <li className='my-2 hover:bg-blue-600'>
      <NavLink to={obj.path} className="flex"> {obj.icon} <span className='mx-3'>{obj.text}</span></NavLink>
    </li>)

    })
   }
</ul>

  </aside>
  </>
  )
}
