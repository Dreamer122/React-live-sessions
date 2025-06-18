import React, { useState } from 'react'
import { BlogForm } from './BlogForm'
import { createPost } from '../../../lib/database'
import toast from "react-hot-toast"
import {useNavigate,useParams} from "react-router"

export const CreateBlogpage = () => {
  const [loading,setLoading]=useState(false)
  const navigate= useNavigate()
  const {userid}=useParams()

  const submitPost=async(data)=>{
    setLoading(true)
    const res=await createPost(data,userid)
    if(res){

      console.log(res)
      toast.success("Blog created successfully")
      navigate(`/dashboard/${userid}`)
    }
    else{
      toast.error("Failed to create blog")
    }
    setLoading(false)
    

  }

  return (
    <>
    <h2 className='text-3xl  text-center my-5 text-black'>CreateBlogpage</h2>
    <BlogForm submitPost={submitPost} loading={loading} />
    </>
  )
}
