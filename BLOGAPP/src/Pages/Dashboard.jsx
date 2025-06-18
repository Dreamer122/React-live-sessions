import React, { useEffect  } from 'react'
import {databases} from "../lib/appwrite"
import { Query } from 'appwrite'
import { setLoading ,setUserData} from '../Redux/Features/userSlice'
import {useDispatch,useSelector} from "react-redux"
import { useParams ,Link} from 'react-router'
import { Allpost } from '../Components/Dashboard/Allpost'
export const Dashboard = () => {
  const {userid}= useParams()
const {loading,userData}=useSelector((state)=>state.user)
  //  console.log(userid)
  const dispatch=useDispatch()
  // get user data
 const getUserData=async()=>{
  try{
    dispatch(setLoading(true))
    const response=await databases.listDocuments(
      import.meta.env.VITE_DATABASE_ID,
      import.meta.env.VITE_USER_COLLECTION_ID,
      [Query.equal("userid",userid)]
    )
    // console.log(response)
    dispatch(setUserData(response.documents[0]))

  }
  catch(error){
    console.log("error occured while fetching user data",error)
  }
  finally{
    dispatch(setLoading(false))
  }
 }
   
 useEffect(()=>{
  getUserData()
 },[userid])

  return (
    <>
    {
      loading?<p>Loading...</p>:<>
      
      <div className='w-12/12 mx-auto h-96 bg-cover bg-[url(https://plus.unsplash.com/premium_photo-1669904022334-e40da006a0a3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D)]'>
      {/* user details */}
       
      <div className='flex justify-between p-4 w-10/12 relative top-[70%] mx-auto h-80 rounded-2xl shadow-2xl shadow-gray-300 bg-white'>
          <div className='flex gap-4'>
            <div>

            <img src={userData?.profilePic || `https://api.dicebear.com/9.x/initials/svg?seed=${userData?.fullname}`} alt="profilePic"
            className='h-16 w-16 rounded-full ' />
            </div>
            <div>
              <p className='text-2xl font-bold uppercase text-black'>{userData?.fullname}</p>
              <p className='text-2xl'>{userData?.email}</p>
            </div>
          </div>
          <div className=''>
        <Link to={`/createblog/${userid}`} className='text-3xl font-extrabold'>Create Blog</Link>

          </div>

      </div>
      </div>

      <div className='w-full bg-gray-100 mt-[250px] text-black'>
        <Allpost/>

      </div>

      </>
    }
    </>
  )
}
