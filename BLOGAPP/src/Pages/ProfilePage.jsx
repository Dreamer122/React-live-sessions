import React, { useEffect, useState } from 'react'
import {getUserData,updateUserData} from "../lib/database"
import { useParams,useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export const ProfilePage = () => {
    const{userid}=useParams()
    const [userData,setUserData]=useState({})
    const [profilePreview,setprofilePreview]=useState("")
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate()
    const {register,handleSubmit,formState:{errors},reset,watch} = useForm({
        defaultValues:userData || {}
    })

// get user data from appwrite
    const getuser=async()=>{
        const d= await getUserData(userid)
        console.log(d)
        setUserData(d.documents[0])
    }

    const profilePic=watch("profilePic")

    // profile preview
 useEffect(()=>{
    
    const selectedFile=profilePic?.[0]


        if(selectedFile instanceof File){
            const filereader=new FileReader()
            filereader.onloadend=()=>{
                // console.log(filereader.result)
                setprofilePreview(filereader.result)
            }
          
            filereader.readAsDataURL(profilePic[0]) 
        }
        else if(userData?.profilePic && typeof userData?.profilePic=="string"){
            console.log("preview",userData.profilePic)
            setprofilePreview(userData?.profilePic)
        }

    },[profilePic])


    // update profile

    const updateProfile=async(data)=>{
        setLoading(true)
    const res= await updateUserData(userData.$id,data)
    console.log("res",res)
    setLoading(false)
    if(res){
        toast.success("profile updated")
    }
    else{
        toast.error("profile not updated")
    }
navigate(`/dashboard/${userid}`)
    }

    useEffect(()=>{
     getuser()
    },[])

    useEffect(()=>{
        reset(userData)
    },[userData])
  return (
   <>
   <div className='mx-auto w-1/2 border border-gray-300'>
<h2 className='text-3xl font-bold text-center'>Update Profile</h2>
   <div>
    <form action="" onSubmit={handleSubmit(updateProfile)}>

<div>
    {
        profilePreview &&

    <img src={profilePreview?profilePreview:""} alt="profilepic" className='rounded-full h-40 w-40' />
    }
    <input type="file" name="" id=""   className='border rounded '
     {...register("profilePic")}/>
</div>
<div>
    <input type="text" name="" id="" placeholder='username' 
    className='border rounded h-12 ' {...register('fullname',{
        required:{
            value:true,
            message:"username is required"
            }
    })}/>
</div>
<div>
   <textarea name="" id="" rows={10} cols='30' placeholder='enter bio'
    {...register("bio")} 
    ></textarea>
</div>

<div>
    <button type='submit'
    disabled={loading}
    className='bg-black rounded text-white text-xl px-3 py-2 disabled:bg-gray-600'>Update Profile</button>
</div>
    </form>

   </div>
   </div>
   </>
  )
}
