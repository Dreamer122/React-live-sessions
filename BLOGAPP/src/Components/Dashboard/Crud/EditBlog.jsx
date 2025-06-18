import React, { useEffect, useState } from 'react'
import {BlogForm} from "./BlogForm"
import { getPostById ,updatePostById} from '../../../lib/database'
import { useParams } from 'react-router'
import toast from "react-hot-toast"

export const EditBlog = () => {
    const {postid}=useParams()
    const [post,setPost]=useState({})
    const [loading,setLoading]=useState(false)
    const getpost=async()=>{
        const res=await getPostById(postid)
        setPost(res)
        console.log(res)
    }

    const submitPost=async(data)=>{
        setLoading(true)
        const res=await updatePostById(postid,data)
        setLoading(false)
        if(res){
            console.log("res=",res)
            toast.success("post updated")
        }
        else{
            toast.error("error occured in updating post")
        }

        
    }

    useEffect(()=>{
        getpost()
    },[postid])

  return (
    <>
    <div>
        <h2 className='text-3xl text-black text-center my-5'>EDIT BLOG</h2>
        <BlogForm isEdit={true} defaultValue={post?post:null} submitPost={submitPost} loading={loading} />
    </div>
    </>
  )
}
