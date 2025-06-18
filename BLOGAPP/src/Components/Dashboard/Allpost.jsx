import React, { useEffect, useState } from 'react'
import {Link,useParams} from "react-router"
import { getUserPost , deletePostById } from '../../lib/database'
import { BlogCard } from '../Common/BlogCard'
import toast from 'react-hot-toast'
export const Allpost = () => {
    const {userid}=useParams()
    const [loading,setLoading]=useState(false)
    const [post,setPost]=useState([])
    const getpost=async()=>{
      setLoading(true)
      const post=await getUserPost(userid)
       console.log(post)
       setPost(post.documents)
       setLoading(false)
      
      
    }
    const deletepost=async(id)=>{
      const check=confirm("are you sure?")
      if(check){
    const res=  await deletePostById(id)
    if(res){
      console.log("deleted post=",res)
      toast.success('Post deleted successfully')
      getpost()

    }
    else{
      console.log("error deleting post")
      toast.error("error occured")
    }
      }
   
  }

    useEffect(()=>{
      getpost()
    },[])
  return (
    <>
   {
    loading?<div>Fetching all posts....</div>:

    <div className='w-10/12 mx-auto'>

        <h3 className='text-3xl text-black text-center'>ALL POSTS</h3>
        <div className='flex gap-4'>
          {
            post?.length==0?<div>
              <p className='text-center text-black text-xl'>create your first post</p>
            </div>:
            post?.map((obj,index)=>{
              return(
                <BlogCard  obj={obj} deletepost={deletepost}/>
              )

            })
          }

        </div>
    </div>

   }
    </>
  )
}
