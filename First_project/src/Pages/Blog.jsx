import React, {useEffect} from 'react'

import { Outlet } from 'react-router'
import { Sidebar } from '../Components/blogs/Sidebar'
 const Blog = () => {
//   useEffect(()=>{
//     document.title="Blog-ecommerce site"
// },[])
  return (
    <div className='flex min-h-screen bg-gray-50'>
     
    <div>
      <Sidebar/>
    </div>
      
      <div className='flex-1 p-8'>
        {/* child component */}
       <Outlet/>
      </div>
      </div>
  )
}
export default Blog;
