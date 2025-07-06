import React, { useEffect, useState } from 'react'
import { blogCategories, blogTags } from '../../../utils/data'
import 'suneditor/dist/css/suneditor.min.css';
import SunEditor from 'suneditor-react';
import { useForm } from "react-hook-form"
import { 
  Upload, 
  Type, 
  Tag, 
  FileText, 
  Eye, 
  Save, 
  Image as ImageIcon,
  Calendar,
  Loader2,
  X,
  Check,
  AlertCircle
} from 'lucide-react'

export const BlogForm = ({ submitPost, loading, isEdit = false, defaultValue = null }) => {
    const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm({
        defaultValues: defaultValue
    })
    
    const [thumbnailPreview, setThumbnailPreview] = useState("")
    const [tags, setTags] = useState([])

    // Editor functions
    const handleEditor = (content) => {
        setValue("blogContent", content)
    }

    // Tags functions - YOUR ORIGINAL LOGIC UNCHANGED
    const handleTags = (tag) => {
        if (tags.includes(tag)) {
            const newtags = tags.filter((t) => t != tag);
            setTags([...newtags])
        } else if (tags.length < 5) {
            setTags([...tags, tag])
        } else {
            setTags([...tags])
        }
        setValue("tags", tags)
    }

    // Thumbnail preview - YOUR ORIGINAL LOGIC UNCHANGED
    const thumbnail = watch("thumbnail")
    useEffect(() => {
        const selectedFile = thumbnail?.[0]

        if (selectedFile instanceof File) {
            const filereader = new FileReader()
            filereader.onloadend = () => {
                setThumbnailPreview(filereader.result)
            }
            filereader.readAsDataURL(thumbnail[0])
        } else if (defaultValue?.thumbnail && typeof defaultValue?.thumbnail == "string") {
            setThumbnailPreview(defaultValue?.thumbnail)
        }
    }, [thumbnail])

    useEffect(() => {
        reset(defaultValue)
        if (defaultValue?.tags) {
            setTags(defaultValue.tags)
        }
    }, [defaultValue])

    return (
        <div className="min-h-screen bg-black py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                            <FileText className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-4xl font-bold text-white tracking-tight">
                            {isEdit ? 'Edit Your Post' : 'Create New Post'}
                        </h1>
                    </div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {isEdit ? 'Update your content and make it even better' : 'Share your thoughts and ideas with the world'}
                    </p>
                    <div className="mt-6 h-1 w-24 bg-gradient-to-r from-white to-gray-400 rounded-full mx-auto"></div>
                </div>

                {/* Form Container */}
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 shadow-2xl">
                    <form onSubmit={handleSubmit(submitPost)} className="space-y-8">
                        
                        {/* Thumbnail Upload Section */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <ImageIcon className="w-5 h-5 text-white" />
                                <label className="text-lg font-semibold text-white">
                                    Thumbnail
                                </label>
                            </div>
                            
                            <div className="relative border-2 border-dashed border-white/20 hover:border-white/30 rounded-2xl p-8 transition-all duration-300 hover:bg-white/5">
                                <input 
                                    type="file" 
                                    accept='image/*' 
                                    id='thumbnail' 
                                    {...register("thumbnail")}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                
                                {thumbnailPreview ? (
                                    <div className="flex items-center gap-6">
                                        <img 
                                            src={thumbnailPreview} 
                                            alt="thumbnail preview"  
                                            className="w-32 h-32 rounded-2xl object-cover border-2 border-white/20"
                                        />
                                        <div className="flex-1">
                                            <h4 className="text-white font-medium mb-2">Preview Ready</h4>
                                            <p className="text-gray-400 text-sm">Click to change image</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                        <h4 className="text-white font-medium mb-2">Upload Thumbnail</h4>
                                        <p className="text-gray-400 text-sm">Click to browse and select an image</p>
                                    </div>
                                )}
                            </div>
                            
                            {errors.thumbnail && (
                                <div className="flex items-center gap-2 text-red-400 text-sm">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>{errors.thumbnail.message}</span>
                                </div>
                            )}
                        </div>

                        {/* Title Section */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Type className="w-5 h-5 text-white" />
                                <label className="text-lg font-semibold text-white">
                                    Title
                                </label>
                            </div>
                            
                            <input 
                                type="text" 
                                placeholder='Enter title'  
                                {...register("title", {
                                    required: {
                                        value: true,
                                        message: "Please enter title"
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "Title must be at least 3 characters long"
                                    },
                                    maxLength: {
                                        value: 70,
                                        message: "Title must be at most 70 characters long"
                                    }
                                })}
                                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200"
                            />
                            
                            {errors.title && (
                                <div className="flex items-center gap-2 text-red-400 text-sm">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>{errors.title.message}</span>
                                </div>
                            )}
                        </div>

                        {/* Category Section */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Tag className="w-5 h-5 text-white" />
                                <label className="text-lg font-semibold text-white">
                                    Select Category
                                </label>
                            </div>
                            
                            <select 
                                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200"
                                {...register("category", {
                                    required: {
                                        value: true,
                                        message: "Please select a category"
                                    }
                                })}
                            >
                                {blogCategories.map((cat) => (
                                    <option key={cat} value={cat} className="bg-gray-800">{cat}</option>
                                ))}
                            </select>
                            
                            {errors.category && (
                                <div className="flex items-center gap-2 text-red-400 text-sm">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>{errors.category.message}</span>
                                </div>
                            )}
                        </div>

                        {/* Tags Section - YOUR ORIGINAL LOGIC */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Tag className="w-5 h-5 text-white" />
                                <label className="text-lg font-semibold text-white">
                                    Tags for blogs post (max 5 tags)
                                </label>
                            </div>

                            {/* Available Tags - Your original logic */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                {blogTags.map((tag) => (
                                    <button 
                                        type='button' 
                                        key={tag} 
                                        onClick={() => handleTags(tag)}
                                        className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border ${
                                            tags.includes(tag)
                                                ? "bg-white text-black border-white shadow-lg transform scale-105"
                                                : "bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/30 hover:scale-105"
                                        }`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                            
                            {tags.length >= 5 && (
                                <div className="flex items-center gap-2 text-red-400 text-sm">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>You can select 5 tags only</span>
                                </div>
                            )}
                        </div>

                        {/* Content Editor Section */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <FileText className="w-5 h-5 text-white" />
                                <label className="text-lg font-semibold text-white">
                                    Content
                                </label>
                            </div>
                            
                            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
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
                        </div>

                        {/* Status and Submit Section */}
                        <div className="flex flex-col sm:flex-row gap-6 items-end">
                            {/* Status Selection */}
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-3">
                                    <Eye className="w-5 h-5 text-white" />
                                    <label className="text-lg font-semibold text-white">
                                        Status
                                    </label>
                                </div>
                                
                                <select 
                                    name="status" 
                                    id="status" 
                                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200"
                                    {...register("status", {
                                        required: {
                                            value: true,
                                            message: "Status is required"
                                        }
                                    })}
                                >
                                    <option value="draft" className="bg-gray-800">Draft</option>
                                    <option value="publish" className="bg-gray-800">Publish</option>
                                </select>
                                
                                {errors.status && (
                                    <div className="flex items-center gap-2 text-red-400 text-sm">
                                        <AlertCircle className="w-4 h-4" />
                                        <span>{errors.status.message}</span>
                                    </div>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="group flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 disabled:bg-gray-300 text-black rounded-xl font-bold transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 disabled:hover:translate-y-0 disabled:hover:shadow-none min-w-[200px] justify-center"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>
                                            {isEdit ? "Updating post..." : "Creating post..."}
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <Save className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                        <span>
                                            {isEdit ? "Update post" : "Creating Post"}
                                        </span>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}