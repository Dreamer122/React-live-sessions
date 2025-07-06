import React from 'react';
import { Calendar, Tag, ArrowRight, Clock } from 'lucide-react';

export const HomeBlogCard = ({ post }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
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
    <article className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden max-w-sm">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
          src={post.thumbnail} 
          alt={post.title}
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white shadow-sm">
            <Tag className="w-3 h-3 mr-1" />
            {post.category}
          </span>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div className="p-6 space-y-4">
        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1.5" />
              <span>{formatDate(post.$createdAt)}</span>
            </div>
            {post.readTime && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1.5" />
                <span>{post.readTime} min read</span>
              </div>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {truncateText(post.blogContent, 120)}
        </p>

        {/* Read More Button */}
        <div className="pt-2">
          <a
            href={`/blogdetail/${post.userId}/${post.$id}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-all duration-200 group/button"
          >
            Read article
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/button:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  );
};