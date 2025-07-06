import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router"
import { getUserPost, deletePostById } from '../../lib/database'
import { BlogCard } from '../Common/BlogCard'
import toast from 'react-hot-toast'
import { Loader2, FileText, Plus, Grid3X3 } from 'lucide-react'

export const Allpost = () => {
    const { userid } = useParams()
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState([])
    
    const getpost = async () => {
        setLoading(true)
        const post = await getUserPost(userid)
        console.log(post)
        setPost(post.documents)
        setLoading(false)
    }
    
    const deletepost = async (id) => {
        const check = confirm("Are you sure you want to delete this post?")
        if (check) {
            const res = await deletePostById(id)
            if (res) {
                console.log("deleted post=", res)
                toast.success('Post deleted successfully')
                getpost()
            } else {
                console.log("error deleting post")
                toast.error("Error occurred while deleting post")
            }
        }
    }

    useEffect(() => {
        getpost()
    }, [])

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20 space-y-6">
                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-gray-300/20 rounded-full blur-lg"></div>
                    <Loader2 className="relative w-12 h-12 text-white animate-spin" />
                </div>
                <div className="text-center space-y-2">
                    <h3 className="text-xl font-semibold text-white">Loading Your Posts</h3>
                    <p className="text-gray-400">Fetching all your amazing content...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-8">
            {/* Header Section */}
            <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                        <Grid3X3 className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-white tracking-tight">
                        Your Posts
                    </h2>
                </div>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Manage and view all your published content in one place
                </p>
                <div className="mt-6 h-1 w-24 bg-gradient-to-r from-white to-gray-400 rounded-full mx-auto"></div>
            </div>

            {/* Posts Grid */}
            {post?.length === 0 ? (
                <div className="text-center py-20">
                    <div className="relative mb-8">
                        <div className="absolute -inset-8 bg-gradient-to-r from-white/5 to-gray-300/5 rounded-full blur-2xl"></div>
                        <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 inline-block">
                            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">No Posts Yet</h3>
                            <p className="text-gray-400 text-lg mb-6 max-w-md">
                                Start sharing your thoughts and ideas with the world
                            </p>
                            <Link 
                                to={`/createblog/${userid}`}
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-bold transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-1"
                            >
                                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                                Create Your First Post
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {/* Posts Count */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                                <span className="text-white font-semibold">
                                    {post.length} {post.length === 1 ? 'Post' : 'Posts'}
                                </span>
                            </div>
                        </div>
                        <Link 
                            to={`/createblog/${userid}`}
                            className="group flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl font-medium transition-all duration-200 border border-white/20 hover:border-white/30"
                        >
                            <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                            New Post
                        </Link>
                    </div>

                    {/* Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {post.map((obj, index) => (
                            <div 
                                key={obj.$id || index}
                                className="transform transition-all duration-300 hover:-translate-y-2"
                            >
                                <BlogCard obj={obj} deletepost={deletepost} />
                            </div>
                        ))}
                    </div>

                    {/* Load More Section (if needed) */}
                    {post.length > 0 && (
                        <div className="text-center mt-12">
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-gray-400">
                                <FileText className="w-4 h-4" />
                                <span>Showing all {post.length} posts</span>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}