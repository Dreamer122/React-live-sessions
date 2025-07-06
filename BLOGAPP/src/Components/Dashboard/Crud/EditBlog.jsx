import React, { useEffect, useState } from 'react'
import { BlogForm } from "./BlogForm"
import { getPostById, updatePostById } from '../../../lib/database'
import { useParams, useNavigate } from 'react-router'
import toast from "react-hot-toast"
import { Edit3, ArrowLeft, Loader2, FileEdit, Sparkles } from 'lucide-react'

export const EditBlog = () => {
    const { postid } = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(false)
    const [pageLoading, setPageLoading] = useState(true)

    // YOUR ORIGINAL LOGIC - UNCHANGED
    const getpost = async () => {
        setPageLoading(true)
        const res = await getPostById(postid)
        setPost(res)
        console.log(res)
        setPageLoading(false)
    }

    const submitPost = async (data) => {
        setLoading(true)
        const res = await updatePostById(postid, data)
        setLoading(false)
        if (res) {
            console.log("res=", res)
            toast.success("post updated")
        }
        else {
            toast.error("error occured in updating post")
        }
    }

    useEffect(() => {
        getpost()
    }, [postid])

    // Loading state for initial data fetch
    if (pageLoading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="flex flex-col items-center space-y-6">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-gray-300/20 rounded-full blur-lg"></div>
                        <Loader2 className="relative w-12 h-12 text-white animate-spin" />
                    </div>
                    <div className="text-center space-y-2">
                        <h3 className="text-xl font-semibold text-white">Loading Your Post</h3>
                        <p className="text-gray-400">Preparing your content for editing...</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-4 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-20 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl"></div>
                
                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    {/* Back Button */}
                    <div className="flex justify-start mb-8">
                        <button
                            onClick={() => navigate(-1)}
                            className="group flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg transition-all duration-200 border border-white/20 hover:border-white/30"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                            Back
                        </button>
                    </div>

                    {/* Main Header */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg"></div>
                            <div className="relative p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                                <Edit3 className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold text-white tracking-tight mb-2">
                                Edit Your Post
                            </h1>
                            <div className="flex items-center justify-center gap-2 text-gray-300">
                                <Sparkles className="w-5 h-5" />
                                <span className="text-lg">Refine and perfect your content</span>
                            </div>
                        </div>
                    </div>

                    {/* Current Post Info */}
                    {post?.title && (
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-8 max-w-2xl mx-auto">
                            <div className="flex items-center gap-3 mb-3">
                                <FileEdit className="w-5 h-5 text-blue-400" />
                                <span className="text-white font-medium">Currently Editing</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                                {post.title}
                            </h3>
                            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                                {post.category && (
                                    <span className="px-3 py-1 bg-white/10 rounded-full">
                                        {post.category}
                                    </span>
                                )}
                                <span className={`px-3 py-1 rounded-full ${
                                    post.status === 'publish' 
                                        ? 'bg-green-500/20 text-green-400' 
                                        : 'bg-yellow-500/20 text-yellow-400'
                                }`}>
                                    {post.status}
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Subtitle */}
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Make your content even better. Update, refine, and enhance your post to deliver 
                        the best possible experience for your readers.
                    </p>

                    {/* Decorative Line */}
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400/30"></div>
                        <div className="w-2 h-2 bg-blue-400/50 rounded-full"></div>
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-400/30"></div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="relative -mt-8 pb-12">
                <BlogForm 
                    isEdit={true} 
                    defaultValue={post ? post : null} 
                    submitPost={submitPost} 
                    loading={loading} 
                />
            </div>

            {/* Tips Section */}
            <div className="relative py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Editing Tips</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
                            <div className="space-y-2">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl">📝</span>
                                </div>
                                <h4 className="font-semibold text-white">Review & Revise</h4>
                                <p className="text-sm">Read through your content and improve clarity and flow</p>
                            </div>
                            <div className="space-y-2">
                                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl">🎨</span>
                                </div>
                                <h4 className="font-semibold text-white">Visual Appeal</h4>
                                <p className="text-sm">Update images, formatting, and visual elements</p>
                            </div>
                            <div className="space-y-2">
                                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl">🚀</span>
                                </div>
                                <h4 className="font-semibold text-white">Optimize</h4>
                                <p className="text-sm">Update tags, categories, and SEO elements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-blue-500/3 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl"></div>
            </div>
        </div>
    )
}