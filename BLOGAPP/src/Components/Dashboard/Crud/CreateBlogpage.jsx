import React, { useState } from 'react'
import { BlogForm } from './BlogForm'
import { createPost } from '../../../lib/database'
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router"
import { PenTool, Sparkles, ArrowLeft } from 'lucide-react'

export const CreateBlogpage = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { userid } = useParams()

  const submitPost = async (data) => {
    setLoading(true)
    const res = await createPost(data, userid)
    if (res) {
      console.log(res)
      toast.success("Blog created successfully")
      navigate(`/dashboard/${userid}`)
    }
    else {
      toast.error("Failed to create blog")
    }
    setLoading(false)
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
              onClick={() => navigate(`/dashboard/${userid}`)}
              className="group flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg transition-all duration-200 border border-white/20 hover:border-white/30"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Dashboard
            </button>
          </div>

          {/* Main Header */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-gray-300/20 rounded-full blur-lg"></div>
              <div className="relative p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                <PenTool className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white tracking-tight mb-2">
                Create Your Story
              </h1>
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <Sparkles className="w-5 h-5" />
                <span className="text-lg">Share your thoughts with the world</span>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Transform your ideas into compelling content that inspires, educates, and engages your audience. 
            Every great story starts with a single word.
          </p>

          {/* Decorative Line */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30"></div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative -mt-8 pb-12">
        <BlogForm submitPost={submitPost} loading={loading} />
      </div>

      {/* Inspiration Section */}
      <div className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Writing Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">✨</span>
                </div>
                <h4 className="font-semibold text-white">Be Authentic</h4>
                <p className="text-sm">Write in your unique voice and share genuine experiences</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-white">Stay Focused</h4>
                <p className="text-sm">Keep your content clear, concise, and on-topic</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💡</span>
                </div>
                <h4 className="font-semibold text-white">Add Value</h4>
                <p className="text-sm">Provide insights, solutions, or entertainment to your readers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-white/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gray-500/3 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}