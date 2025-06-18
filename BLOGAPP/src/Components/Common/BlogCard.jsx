import React from 'react'
import { SquarePen,Eye,Trash2 } from 'lucide-react';
import { Link } from 'react-router';


export const BlogCard = ({obj,deletepost}) => {

   
  return (
 <>
 

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={obj.thumbnail} alt="" />
    
    </a>
    <p className={`${obj.status=="publish"?"text-green-600 bg-green-300":"bg-red-300 text-red-600"} rounded-2xl w-fit p-2`}>{obj.status}</p>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{obj.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{__html:obj.blogContent}}></p>
        <div className='flex gap-3 relative left-64'>
            <Link to={`/editblog/${obj.$id}`}><SquarePen className='text-blue-500' /></Link>
            <Link to={`/blogdetail/${obj.userId}/${obj.$id}`}><Eye className='text-green-500'/></Link>
            <p><Trash2 className='text-red-500' onClick={()=>deletepost(obj.$id)}/></p>
        </div>
    </div>
</div>

 </>
  )
}
