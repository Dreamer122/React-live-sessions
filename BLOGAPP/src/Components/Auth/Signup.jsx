import React, { useState } from 'react'
import {useForm} from "react-hook-form" 
import { UserRoundPlus, Eye, EyeOff, Mail, User, Lock } from 'lucide-react';
import { account ,databases} from '../../lib/appwrite';
import {ID} from "appwrite"
import {useNavigate} from "react-router"
import toast from 'react-hot-toast';

export const Signup = () => {
  const {register,handleSubmit,formState:{errors}}=useForm();
  const navigate=useNavigate()
  const [loading,setLoading]=useState(false)
  const [showPassword, setShowPassword] = useState(false)
  
  const createAccount=async(data,e)=>{
    e.preventDefault()
    console.log(data);
    setLoading(true)
    try{
     const user= await account.create(ID.unique(),data.email,data.password)
  console.log("signup on appwrite",user)
      databases.createDocument(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        ID.unique(),
        {
          userid:user.$id,
          email:data.email,
          fullname:data.fullname
        }
      )

     console.log("signup successfully")
     toast.success("signup successfully")
     navigate("/login")

    }
    catch(error){
      console.log(error,"error occured while signup")
      toast.error("error occured while signup")
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8'>
      <div className='w-full max-w-md'>
        {/* Header Section */}
        <div className='text-center mb-8'>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4'>
            <UserRoundPlus className='text-white' size={32}/>
          </div>
          <h1 className='text-3xl font-bold text-black mb-2'>Create Account</h1>
          <p className='text-gray-600'>Join us and start your journey today</p>
        </div>

        {/* Form Card */}
        <div className='bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-8'>
          <form onSubmit={handleSubmit(createAccount)} className='space-y-6'>
            
            {/* Full Name Field */}
            <div className='space-y-2'>
              <label htmlFor="fullname" className='block text-sm font-semibold text-black'>
                Full Name
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <User className='h-5 w-5 text-gray-400' />
                </div>
                <input 
                  type="text" 
                  id="fullname"
                  {...register("fullname",{
                    required:"Full name is required",
                    pattern:{
                      value:/^[a-zA-Z\s]+$/ ,
                      message:"Only letters and spaces are allowed"
                    },
                    minLength:{
                      value:2,
                      message:"Name must be at least 2 characters"
                    }
                  })}  
                  className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-0 transition-colors duration-200 outline-none'
                  placeholder='Enter your full name'
                />
              </div>
              {errors.fullname && (
                <p className='text-red-500 text-sm font-medium flex items-center gap-1'>
                  {errors.fullname.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className='space-y-2'>
              <label htmlFor="email" className='block text-sm font-semibold text-black'>
                Email Address
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Mail className='h-5 w-5 text-gray-400' />
                </div>
                <input 
                  type="email" 
                  id="email"
                  {...register("email",{
                    required:"Email is required",
                    pattern:{
                      value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ,
                      message:"Please enter a valid email address"
                    }
                  })} 
                  className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-0 transition-colors duration-200 outline-none' 
                  placeholder='Enter your email'
                />
              </div>
              {errors.email && (
                <p className='text-red-500 text-sm font-medium flex items-center gap-1'>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className='space-y-2'>
              <label htmlFor="password" className='block text-sm font-semibold text-black'>
                Password
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Lock className='h-5 w-5 text-gray-400' />
                </div>
                <input 
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register("password",{
                    required:"Password is required",
                    minLength:{
                      value:6,
                      message:"Password must be at least 6 characters"
                    },
                    maxLength:{
                      value:20,
                      message:"Password must be at most 20 characters"
                    },
                  })} 
                  className='w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-0 transition-colors duration-200 outline-none'
                  placeholder='Create a strong password'
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute inset-y-0 right-0 pr-3 flex items-center hover:text-black transition-colors duration-200'
                >
                  {showPassword ? (
                    <EyeOff className='h-5 w-5 text-gray-400' />
                  ) : (
                    <Eye className='h-5 w-5 text-gray-400' />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className='text-red-500 text-sm font-medium flex items-center gap-1'>
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit" 
              disabled={loading} 
              className='w-full bg-black text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2'
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Creating Account...
                </>
              ) : (
                <>
                  <UserRoundPlus size={20} />
                  Create Account
                </>
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className='mt-6 text-center'>
            <p className='text-gray-600'>
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className='text-black font-semibold hover:underline transition-all duration-200'
              >
                Sign in here
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className='text-center mt-8'>
          <p className='text-sm text-gray-500'>
            By creating an account, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  )
}