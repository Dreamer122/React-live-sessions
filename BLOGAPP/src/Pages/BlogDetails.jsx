import React, { useEffect } from 'react'
import { getPostById,getUserData } from '../lib/database'
import {useParams} from "react-router"
export const BlogDetails = () => {
    const {userid,postid}=useParams()
    const [post, setPost] = React.useState({})
    const [user, setUser] = React.useState({})

    const getdata=async ()=>{
     const res=await  getPostById(postid)
        if(res){
            setPost(res)
        }
    const userdata=await getUserData(userid)
    if(userdata){
        setUser(userdata.documents[0])
    }

    }
    useEffect(()=>{
        getdata()
    },[postid])

  return (
  <>
  <div>
    <h2>{post?.title}</h2>
    <div>
        <div>
            <img src={user?.profilePic || `https://api.dicebear.com/9.x/initials/svg?seed=${user?.fullname}`} alt="" className='w-52 h-52 rounded-full' />
        </div>
        <div>
            <p>{user?.fullname}</p>
            <p>{post.$createdAt}</p>
        </div>
    </div>
    <div dangerouslySetInnerHTML={{__html:post?.blogContent}}>

    </div>

  </div>
  </>
  )
}
