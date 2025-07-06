import React from 'react'
import { Link } from 'react-router'
import { 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Heart,
  ArrowUp,
  Sparkles,
  Users,
  PenTool,
  Star
} from 'lucide-react'

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Stay Updated</h3>
                </div>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Get the latest articles and insights delivered straight to your inbox. 
                  Join thousands of readers who never miss a story.
                </p>
              </div>
              
              <div className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200"
                  />
                  <button className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  No spam, unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-gray-300/20 rounded-lg blur opacity-75"></div>
                  <div className="relative p-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">BlogSpace</h2>
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-400">Where stories live</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                A platform where passionate writers share insights, tutorials, and stories that inspire. 
                Join our community of creators and readers exploring ideas that matter.
              </p>
              
              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-white font-semibold">Follow Us</h4>
                <div className="flex items-center gap-3">
                  {[
                    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
                    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
                    { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
                    { icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
                    { icon: Github, href: '#', color: 'hover:text-gray-300' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 text-gray-400 ${social.color} hover:scale-110`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg flex items-center gap-2">
                <PenTool className="w-5 h-5" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Categories', href: '/categories' },
                  { name: 'Latest Posts', href: '/latest' },
                  { name: 'Popular', href: '/popular' },
                  { name: 'Write for Us', href: '/write' },
                  { name: 'About Us', href: '/about' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-white transition-colors duration-200"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg flex items-center gap-2">
                <Star className="w-5 h-5" />
                Popular Categories
              </h4>
              <ul className="space-y-3">
                {[
                  'Technology',
                  'Design',
                  'Development',
                  'Business',
                  'Lifestyle',
                  'Photography'
                ].map((category) => (
                  <li key={category}>
                    <Link
                      to={`/category/${category}`}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-white transition-colors duration-200"></span>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg flex items-center gap-2">
                <Users className="w-5 h-5" />
                Get in Touch
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a href="mailto:hello@blogspace.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                      hello@blogspace.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors duration-200">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-400">
                      123 Blog Street<br />
                      Content City, CC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-400">
                <span>© 2024 BlogSpace. Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>by passionate developers.</span>
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-6">
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg transition-all duration-200 border border-white/20 hover:border-white/30"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}