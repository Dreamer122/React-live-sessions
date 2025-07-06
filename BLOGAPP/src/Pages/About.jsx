import React from 'react'
import { Link } from 'react-router'
import { 
  ArrowLeft,
  BookOpen,
  Users,
  Target,
  Heart,
  Award,
  Lightbulb,
  Globe,
  Star,
  Quote,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Camera,
  Code,
  Palette,
  Coffee,
  Sparkles,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react'

export const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Editor-in-Chief",
      bio: "Passionate about storytelling and building communities. 10+ years in digital publishing.",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      social: {
        twitter: "#",
        linkedin: "#",
        email: "sarah@blogspace.com"
      },
      skills: ["Leadership", "Content Strategy", "Community Building"]
    },
    {
      name: "Alex Chen",
      role: "Lead Developer",
      bio: "Full-stack developer who loves creating beautiful, functional web experiences.",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400",
      social: {
        github: "#",
        linkedin: "#",
        email: "alex@blogspace.com"
      },
      skills: ["React", "Node.js", "UI/UX Design"]
    },
    {
      name: "Maya Patel",
      role: "Content Curator",
      bio: "Expert in discovering and nurturing amazing content from our community of writers.",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      social: {
        twitter: "#",
        linkedin: "#",
        email: "maya@blogspace.com"
      },
      skills: ["Content Curation", "SEO", "Analytics"]
    },
    {
      name: "David Kim",
      role: "Design Lead",
      bio: "Creative designer focused on making complex ideas accessible through beautiful design.",
      image: "https://images.pexels.com/photos/3778874/pexels-photo-3778874.jpeg?auto=compress&cs=tinysrgb&w=400",
      social: {
        twitter: "#",
        linkedin: "#",
        email: "david@blogspace.com"
      },
      skills: ["UI Design", "Branding", "Illustration"]
    }
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "We believe great content comes from genuine passion and authentic voices.",
      color: "text-red-400"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a supportive community where writers and readers connect meaningfully.",
      color: "text-blue-400"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly evolving our platform to provide the best experience for creators.",
      color: "text-yellow-400"
    },
    {
      icon: Shield,
      title: "Quality Content",
      description: "Maintaining high standards while celebrating diverse perspectives and ideas.",
      color: "text-green-400"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting voices from around the world to share knowledge and inspiration.",
      color: "text-purple-400"
    },
    {
      icon: Zap,
      title: "Empowerment",
      description: "Giving writers the tools and platform they need to share their stories.",
      color: "text-orange-400"
    }
  ]

  const stats = [
    { number: "50K+", label: "Active Readers", icon: Users },
    { number: "1.2K+", label: "Published Articles", icon: BookOpen },
    { number: "500+", label: "Writers", icon: Award },
    { number: "25+", label: "Countries", icon: Globe }
  ]

  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description: "BlogSpace was founded with a simple mission: create a platform where great stories could find their audience."
    },
    {
      year: "2021",
      title: "Community Growth",
      description: "Reached 1,000 writers and 10,000 readers. Launched our first community events and writing workshops."
    },
    {
      year: "2022",
      title: "Platform Evolution",
      description: "Major platform redesign with enhanced writing tools, better discovery features, and mobile optimization."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded internationally with multi-language support and partnerships with writing communities worldwide."
    },
    {
      year: "2024",
      title: "Innovation Continues",
      description: "Launched AI-powered content recommendations and advanced analytics for writers to understand their audience better."
    }
  ]

  return (
    <div className="min-h-screen bg-black">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/"
              className="group flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg transition-all duration-200 border border-white/20 hover:border-white/30 w-fit"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Home
            </Link>
          </div>

          {/* Hero Content */}
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-lg"></div>
                <div className="relative p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              <span className="block">About</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                BlogSpace
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to democratize storytelling and create a platform where every voice matters. 
              Join us in building the future of digital publishing.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-16 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-blue-400" />
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To create a platform where passionate writers can share their knowledge, experiences, and creativity 
                  with a global audience that values quality content and meaningful connections.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Sparkles className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Empower Creators</h3>
                    <p className="text-gray-400">Providing tools and resources that help writers craft and share amazing content.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Foster Growth</h3>
                    <p className="text-gray-400">Building a community where writers can learn, grow, and succeed together.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-yellow-500/20 rounded-lg">
                    <Globe className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Connect Globally</h3>
                    <p className="text-gray-400">Bridging cultures and perspectives through the power of storytelling.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-lg"></div>
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team collaboration"
                className="relative w-full h-96 object-cover rounded-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-red-400" />
              <h2 className="text-4xl font-bold text-white">Our Values</h2>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These core principles guide everything we do and shape the community we're building together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-white/10 rounded-2xl">
                    <value.icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">{value.title}</h3>
                <p className="text-gray-400 text-center leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Award className="w-8 h-8 text-yellow-400" />
              <h2 className="text-4xl font-bold text-white">Our Journey</h2>
            </div>
            <p className="text-xl text-gray-400">
              From a simple idea to a thriving community of writers and readers.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <span className="text-white font-bold">{milestone.year}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-8 h-8 text-blue-400" />
              <h2 className="text-4xl font-bold text-white">Meet Our Team</h2>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The passionate individuals behind BlogSpace who work tirelessly to make your writing journey amazing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg"></div>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="relative w-24 h-24 rounded-full mx-auto object-cover border-2 border-white/20"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{member.bio}</p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Social Links */}
                <div className="flex items-center justify-center gap-3">
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 text-gray-400 hover:text-blue-400">
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 text-gray-400 hover:text-blue-500">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 text-gray-400 hover:text-gray-300">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 text-gray-400 hover:text-green-400">
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-12">
            <Quote className="w-16 h-16 text-blue-400 mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
              "BlogSpace has transformed how I share my ideas with the world. The platform is intuitive, 
              the community is supportive, and the reach is incredible. It's exactly what every writer needs."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img 
                src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100" 
                alt="Featured writer"
                className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
              />
              <div className="text-left">
                <div className="text-white font-semibold">Emma Rodriguez</div>
                <div className="text-gray-400">Featured Writer</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Join Our Story?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Whether you're a writer looking to share your voice or a reader seeking amazing content, 
                there's a place for you in our community.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/register"
                className="group px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <span>Start Writing Today</span>
              </Link>
              
              <Link 
                to="/"
                className="group flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-2xl font-medium border border-white/20 hover:border-white/30 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5" />
                <span>Explore Articles</span>
              </Link>
            </div>
          </div>
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