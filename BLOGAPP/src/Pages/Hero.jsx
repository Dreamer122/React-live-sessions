import React from 'react'
import { 
  ArrowRight,
  Play,
  Users,
  BookOpen,
  Award,
  Star,
  Sparkles
} from 'lucide-react'

export const Hero = ({ posts, categories }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight">
                <span className="block">Discover</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Amazing Stories
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Where passionate writers share insights, tutorials, and stories that inspire. 
                Join our community of creators and readers exploring ideas that matter.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <button 
                onClick={() => {
                  const blogSection = document.getElementById('latest-blogs');
                  if (blogSection) {
                    blogSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <span className="group-hover:text-white transition-colors duration-300">Start Reading</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:text-white transition-all duration-300" />
                </div>
              </button>
              
              <button className="group flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-2xl font-medium border border-white/20 hover:border-white/30 transition-all duration-300">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats Section */}
            <div className="pt-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 group-hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-center mb-3">
                      <BookOpen className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{posts?.length || 0}+</div>
                    <div className="text-gray-400">Articles</div>
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 group-hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-center mb-3">
                      <Users className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">10K+</div>
                    <div className="text-gray-400">Readers</div>
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 group-hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-center mb-3">
                      <Star className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{categories?.length - 1 || 0}+</div>
                    <div className="text-gray-400">Categories</div>
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 group-hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-center mb-3">
                      <Award className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">5★</div>
                    <div className="text-gray-400">Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-16">
              <div className="flex flex-col items-center gap-3">
                <span className="text-gray-400 text-sm">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}