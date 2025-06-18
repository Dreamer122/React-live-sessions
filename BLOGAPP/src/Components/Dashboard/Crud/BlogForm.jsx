import React, { useEffect, useState } from 'react'
import { blogCategories,blogTags } from '../../../utils/data'
import 'suneditor/dist/css/suneditor.min.css';
import SunEditor from 'suneditor-react';
import {useForm} from "react-hook-form"
export const BlogForm = ({submitPost,loading,isEdit=false,defaultValue=null}) => {
    const {register,handleSubmit,setValue, watch,reset, formState:{errors}}=useForm(
        {
            defaultValues:defaultValue
        }
    )
    // console.log("default=",defaultValue)
    const [thumbnailPreview,setThumbnailPreview]=useState("")
    const [tags,setTags]=useState([])
// editor functions

const handleEditor=(content)=>{
    setValue("blogContent",content)

}
// tags functions
   const handleTags=(tag)=>{
    if(tags.includes(tag)){
        const newtags=tags.filter((t)=>t!=tag);
        setTags([...newtags])

    }
    else if(tags.length < 5){
        setTags([...tags,tag])
    }
    else{
        setTags([...tags])
    }
    setValue("tags",tags)
   }


  
    // thumbnail preview
    const thumbnail=watch("thumbnail")
    useEffect(()=>{
    // console.log(thumbnail)
    const selectedFile=thumbnail?.[0]


        if(selectedFile instanceof File){
            const filereader=new FileReader()
            filereader.onloadend=()=>{
                // console.log(filereader.result)
                setThumbnailPreview(filereader.result)
            }
          
            filereader.readAsDataURL(thumbnail[0]) 
        }
        else if(defaultValue?.thumbnail && typeof defaultValue?.thumbnail=="string"){
            console.log("preview",defaultValue.thumbnail)
            setThumbnailPreview(defaultValue?.thumbnail)
        }

    },[thumbnail])

    useEffect(()=>{
        reset(defaultValue)
        if(defaultValue?.tags){
            setTags(defaultValue.tags)

        }
    },[defaultValue])



  return (
   <>
   {/* file,description,title,category tags */}
   <div className='w-1/2 shadow-2xl shadow-gray-400 rounded p-5 mx-auto'>
    <form action="" className='text-xl' onSubmit={handleSubmit(submitPost)}>
        <label htmlFor="thumbnail"> thumbnail</label> <br />
        <input type="file" accept='image/*' id='thumbnail' {...register("thumbnail",{
            // required:{
            //     value:true,
            //     message:"Please select a thumbnail"
            // }
        })}
        className='border outline-black mb-4 text-black' /> 
        {errors.thumbnail && <span>{errors.thumbnail.message}</span>}

        {
            thumbnailPreview && <img src={thumbnailPreview} alt="thumbnail"  className='w-32 h-32 rounded-full'/>
        }
        <br />
        <label htmlFor="title"> title</label> <br />

        <input type="text" placeholder='enter title'  
        {...register("title",{
            required:{
                value:true,
                message:"Please enter title"
                },
                minLength:{
                    value:3,
                    message:"Title must be at least 3 characters long"
                },
                maxLength:{
                    value:70,
                    message:"Title must be at most 70 characters long"
                }
        })}
        className='border outline-black mb-4 text-black' /> 
        {errors.title && <span>{errors.title.message}</span>}
        
        <br />
        {/* categories */}
        <label htmlFor="category"> Select Category</label>
        <select id='' className='outline-black border mb-5 text-black' {...register("category",{
            required:{
                value:true,
                message:"Please select a category"
            }
        })}>
            {
                blogCategories.map((cat)=>{
                    return(

                        <option key={cat}>{cat}</option>
                    )
                })
            }
        </select>
        {errors.category && <span>{errors.category.message}</span>}

        {/* blog tags */}

<div>
    <label htmlFor="tags"> Tags for blogs post (max 5 tags)</label> <br />

    {
        blogTags.map((tag)=>{
            return(
                <button type='button' key={tag} 
                onClick={()=>handleTags(tag)}
                className={`rounded px-3 py-1  mx-1 my-1 ${tags.includes(tag)?"bg-black text-white":"bg-gray-500 text-white"}`}>{tag}</button>
            )
        })
    }
</div>
{tags.length>=5? <span className='text-red-700'> you can select 5 tags only </span>:""}
{/* editor  */}
<div>
<SunEditor
setContents={defaultValue?.blogContent}
{...register("blogContent")}
        onChange={handleEditor}
        setOptions={{
                                buttonList: [
                                    ['undo', 'redo'],
                                    ['font', 'fontSize', 'formatBlock'],
                                    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                                    ['removeFormat'],
                                    '/',
                                    ['fontColor', 'hiliteColor'],
                                    ['indent', 'outdent'],
                                    ['align', 'horizontalRule', 'list', 'table'],
                                    ['link', 'image', 'video'],
                                    ['fullScreen', 'showBlocks', 'codeView'],
                                ],
                                minHeight: '300px'
                            }}
                        />
</div>

{/* status  */}
<label htmlFor="" className=''>
    status
</label>
<select name="status" id="status" className='border w-[200px] text-black' {...register("status",{
    required:{
        value:true,
        message:"status is required"
    }
})}>
    <option value="draft">draft</option>
    <option value="publish">publish</option>
</select>
{/* button */}
<input type="submit" value={
    isEdit?
    loading?" updating post...":"Update post":
     loading?"creating post...":"creating Post"
   
    } disabled={loading} className={`rounded px-3 py-1 bg-green-500 text-white disabled:bg-green-300`} />
    </form>
   </div>
   </>
  )
}
