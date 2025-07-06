import React, { useEffect, useState } from 'react'
import { getPostById, getUserData } from '../lib/database'
import { useParams, useNavigate } from "react-router"
import { 
  Calendar, 
  Tag, 
  ArrowLeft, 
  Clock, 
  Share2, 
  Bookmark,
  User,
  Loader2
} from 'lucide-react'
// import { LikeSection } from './LikeSection'
// import { CommentSection } from './CommentSection'

export const BlogDetails = () => {
    const { userid, postid } = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState({})
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    // YOUR ORIGINAL LOGIC - UNCHANGED
    const getdata = async () => {
        setLoading(true)
        const res = await getPostById(postid)
        if (res) {
            setPost(res)
        }
        const userdata = await getUserData(userid)
        if (userdata) {
            setUser(userdata.documents[0])
        }
        setLoading(false)
    }

    useEffect(() => {
        getdata()
    }, [postid])

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    const calculateReadTime = (content) => {
        if (!content) return 0
        const wordsPerMinute = 200
        const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length
        return Math.ceil(words / wordsPerMinute)
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="flex flex-col items-center space-y-6">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-gray-300/20 rounded-full blur-lg"></div>
                        <Loader2 className="relative w-12 h-12 text-white animate-spin" />
                    </div>
                    <div className="text-center space-y-2">
                        <h3 className="text-xl font-semibold text-white">Loading Article</h3>
                        <p className="text-gray-400">Preparing your reading experience...</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <div className="relative">
                {/* Background Image */}
                {post?.thumbnail && (
                    <div className="absolute inset-0 h-96">
                        <img 
                            src={post.thumbnail} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
                    </div>
                )}
                
                {/* Content */}
                <div className="relative z-10 pt-8 pb-16">
                    <div className="max-w-4xl mx-auto px-6">
                        {/* Back Button */}
                        <button
                            onClick={() => navigate(-1)}
                            className="group flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg transition-all duration-200 border border-white/20 hover:border-white/30 mb-8"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                            Back
                        </button>

                        {/* Article Header */}
                        <div className="space-y-6 pt-32">
                            {/* Category & Meta */}
                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                {post?.category && (
                                    <span className="inline-flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30">
                                        <Tag className="w-3 h-3 mr-1.5" />
                                        {post.category}
                                    </span>
                                )}
                                <div className="flex items-center text-gray-300">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {formatDate(post.$createdAt)}
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <Clock className="w-4 h-4 mr-2" />
                                    {calculateReadTime(post?.blogContent)} min read
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                {post?.title}
                            </h1>

                            {/* Author Info */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <img 
                                            src={user?.profilePic || `https://api.dicebear.com/9.x/initials/svg?seed=${user?.fullname}`} 
                                            alt={user?.fullname}
                                            className="w-16 h-16 rounded-full border-3 border-white/30 shadow-xl object-cover"
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-black"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{user?.fullname}</h3>
                                        <p className="text-gray-300">Author</p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-3">
                                    <button className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl transition-all duration-200 border border-white/20 hover:border-white/30">
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                    <button className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl transition-all duration-200 border border-white/20 hover:border-white/30">
                                        <Bookmark className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative bg-black">
                <div className="max-w-4xl mx-auto px-6 py-12">
                    {/* Article Content */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12 mb-12">
                        <div 
                            className="prose prose-lg prose-invert max-w-none"
                            dangerouslySetInnerHTML={{ __html: post?.blogContent }}
                        />
                    </div>

                    {/* Tags */}
                    {post?.tags && post.tags.length > 0 && (
                        <div className="mb-12">
                            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                                <Tag className="w-5 h-5" />
                                Tags
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {post.tags.map((tag, index) => (
                                    <span 
                                        key={index}
                                        className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/20 hover:border-white/30 transition-all duration-200 cursor-pointer"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Like Section */}
                    <div className="mb-12">
                        {/* <LikeSection postId={postid} /> */}
                    </div>

                    {/* Author Card */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-12">
                        <div className="flex items-center gap-6">
                            <img 
                                src={user?.profilePic || `https://api.dicebear.com/9.x/initials/svg?seed=${user?.fullname}`} 
                                alt={user?.fullname}
                                className="w-20 h-20 rounded-full border-3 border-white/30 shadow-xl object-cover"
                            />
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2">{user?.fullname}</h3>
                                <p className="text-gray-300 mb-4">
                                    {user?.bio || "Passionate writer sharing insights and stories with the world."}
                                </p>
                                <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all duration-200">
                                    <User className="w-4 h-4" />
                                    Follow Author
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Comment Section */}
                    {/* <CommentSection postId={postid} /> */}
                </div>
            </div>

            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/3 rounded-full blur-3xl"></div>
            </div>
        </div>
    )
}