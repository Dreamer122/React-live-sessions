import React, { useEffect } from "react";
import {useForm} from "react-hook-form"
import axios from "axios"
import { DevTool } from '@hookform/devtools';
import { useNavigate } from "react-router";
import { CheckCheck ,CircleX } from 'lucide-react';
export const AddEmployeeForm = ({isEdit=false,defaultvalue=null}) => {
  const navigate=useNavigate()
    const form =useForm({
      defaultValues:defaultvalue,
      mode: "onChange",

    })
    console.log(form)
    const {register,handleSubmit,formState,reset,control}=form
    const {isSubmitSuccessful,errors}=formState

    // const {name,ref,onChange,onBlur}=register("firstname")

    const submitForm=async (data,e)=>{
        e.preventDefault()
        console.log(data)
        // call post api
        try{
            if(!isEdit){

              const res=await axios.post("http://localhost:3000/employees",data)
              console.log(res)
              alert("form submit")
            }
            else{
              const res=await axios.put(`http://localhost:3000/employees/${defaultvalue.id}`,data)
              console.log(res)
              alert("updated successfully")
              navigate("/Allemployee")
            }

        }
        catch(error){
            console.log("error while posting data",error)
        }


    }

    useEffect(()=>{
      reset({...defaultvalue})
    },[defaultvalue,isSubmitSuccessful])
  return (
    <>
      <div className="w-2/3 bg-gray-50 mx-auto">
        <form className="max-w-md mx-auto" onSubmit={handleSubmit(submitForm)}>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              {...register("email",{
              required:{
                value:true,
                message:"Email is required",
              },
                pattern:{
                  value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message:"Email is not valid"
                }
              
              })}
             
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <span className="text-red-500">{errors.email && errors.email.message}</span>
          <span className="text-red-500">{console.log(errors)}</span>
          <div className="relative z-0 w-full mb-5 group">
            <input
                {...register("post",{maxLength:{
                  value:40,
                  message:"Post is too long"
                } ,
                minLength:{
                  value:2,
                  message:"post should be 2 or more character long"
                }
              }
                )}
             
              id="post"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
             
            />
            <label
              for="post"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Post
            </label>
            <span className="text-red-600"> {errors.post && errors.post.message}</span>
          </div>
          <div className="relative z-0 w-full mb-5 group">
          <label for="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            
  <select id="department" {...register("department",{
    required:{
      value:true,
      message:"Please select an option"
    }
  })} className="bg-gray-50 border border-gray-300
   text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
   w-full p-2.5  ">
    <option selected disabled>Choose a department</option>
    <option value="IT">IT</option>
    <option value="Finance">Finance</option>
    <option value="HR">HR</option>
    <option value="sales">sales</option>
  </select>

          </div>
          <span>{errors.department?<CircleX className="text-red-500"/>:<CheckCheck className="text-green-500"/>}</span>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                {...register("firstname",{
                  required:{
                    value:true,
                    message:"Please enter your first name",

                },
                minLength:{
                  minLength:2,
                  message:"Please enter a valid first name"
                }
                })}
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                
              />
              <label
                for="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
          <span>{errors.firstname?<CircleX className="text-red-500"/>:<CheckCheck className="text-green-500"/>}</span>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                {...register("Lastname",{
                  required:{
                    value:true,
                    message:"Please enter your last name",

                },
                minLength:{
                  minLength:2,
                  message:"Please enter a valid last name"
                }
                })}
                
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              
              />
              <label
                for="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
            <span>{errors.Lastname && errors.Lastname.message}</span>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
               {...register("phone",{
                required:{
                  value:true,
                  message:"Please enter your phone number",
                }
               })}
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
               
              />
              <label
                for="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (123-456-7890)
              </label>
              <span className="text-red-500">{errors.phone && errors.phone.message}</span>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
               {...register("salary")}
                id="salary"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
               
              />
              <label
                for="salary"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
              Salary
              </label>
            </div>
          </div>
          
          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="dateOfJoining">dateOfJoining</label>
<input type="date" {...register("dateOfJoining")} id="dateOfJoining" className="outline outline-indigo-500" />

          </div>

          <div className="relative z-0 w-full mb-5 group">
          <select id="Status" {...register("status")} className="bg-gray-50 border border-gray-300
   text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
   w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a Status</option>
    <option value="Active">Active</option>
    <option value="Inactive">Inactive</option>
    
  </select>

</div>
          

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
          {isEdit?"Update employee":"Add employee"}  
          </button>
        </form>
        <DevTool control={control}/>
      </div>
    </>
  );
};
