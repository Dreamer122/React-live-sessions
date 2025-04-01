import React, {useEffect} from 'react'

import { Outlet } from 'react-router'
import { Sidebar } from '../Components/blogs/Sidebar'
export const Blog = () => {
//   useEffect(()=>{
//     document.title="Blog-ecommerce site"
// },[])
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
     
    <div>
      <Sidebar/>
    </div>
      
      <div>
        {/* child component */}
       <Outlet/>
      </div>
      </div>
  )
}
