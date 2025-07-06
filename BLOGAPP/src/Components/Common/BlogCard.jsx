import React from 'react'
import { SquarePen, Eye, Trash2, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router';

export const BlogCard = ({ obj, deletepost }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  const truncateText = (text, maxLength) => {
    const stripped = stripHtml(text);
    if (stripped.length <= maxLength) return stripped;
    return stripped.substring(0, maxLength) + '...';
  };

  return (
    <article className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
          src={obj.thumbnail} 
          alt={obj.title}
        />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm border ${
            obj.status === "publish" 
              ? "bg-green-500/90 text-white border-green-400/50" 
              : "bg-red-500/90 text-white border-red-400/50"
          }`}>
            <div className={`w-2 h-2 rounded-full mr-2 ${
              obj.status === "publish" ? "bg-green-200" : "bg-red-200"
            }`}></div>
            {obj.status}
          </span>
        </div>

        {/* Category Badge */}
        {obj.category && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-black/70 text-white backdrop-blur-sm border border-white/20">
              <Tag className="w-3 h-3 mr-1.5" />
              {obj.category}
            </span>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div className="p-6 space-y-4">
        {/* Meta Information */}
        {obj.datePosted && (
          <div className="flex items-center text-sm text-gray-300">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{formatDate(obj.datePosted)}</span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-white leading-tight group-hover:text-gray-200 transition-colors duration-200 line-clamp-2">
          {obj.title}
        </h3>

        {/* Content Preview */}
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {truncateText(obj.blogContent, 120)}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center space-x-3">
            {/* Edit Button */}
            <Link 
              to={`/editblog/${obj.$id}`}
              className="group/btn p-2.5 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 hover:text-blue-300 rounded-lg transition-all duration-200 hover:scale-110 border border-blue-500/30 hover:border-blue-400/50"
              title="Edit Post"
            >
              <SquarePen className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-200" />
            </Link>

            {/* View Button */}
            <Link 
              to={`/blogdetail/${obj.userId}/${obj.$id}`}
              className="group/btn p-2.5 bg-green-500/20 hover:bg-green-500/30 text-green-400 hover:text-green-300 rounded-lg transition-all duration-200 hover:scale-110 border border-green-500/30 hover:border-green-400/50"
              title="View Post"
            >
              <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
            </Link>

            {/* Delete Button */}
            <button 
              onClick={() => deletepost(obj.$id)}
              className="group/btn p-2.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300 rounded-lg transition-all duration-200 hover:scale-110 border border-red-500/30 hover:border-red-400/50"
              title="Delete Post"
            >
              <Trash2 className="w-4 h-4 group-hover/btn:shake transition-transform duration-200" />
            </button>
          </div>

          {/* Read Time or Word Count */}
          {obj.readTime && (
            <div className="text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              {obj.readTime} min read
            </div>
          )}
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </article>
  )
}