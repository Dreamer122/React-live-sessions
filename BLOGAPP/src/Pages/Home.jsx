import React, { useEffect ,useState} from 'react'
import {getAllPost} from "../lib/database"
import { HomeBlogCard } from '../Components/Common/HomeBlogCard'
import { Hero } from './Hero'
export const Home = () => {
  const [posts, setPosts] = useState([])


  const Allpost=async()=>{
    const posts = await getAllPost()
    console.log(posts)
    setPosts(posts.documents)
  }

  useEffect(()=>{
    Allpost()
  },[])
  return (
    <>
    {/* hero section */}
    <Hero/>
    {/* category section */}
    {/* latest blogs */}
    <div className='flex gap-10 flex-wrap'>
{
  posts?.map((post, index) =>{
    return (
      <HomeBlogCard post={post} key={post.$id}/>
    )

  }
)
}
    </div>
    </>
  )
}
