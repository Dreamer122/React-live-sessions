import React from "react";

export const Card = (props) => {
  const { product } = props;
  const { title, rating, thumbnail, category, price } = product;
  
  return (
    <div className="flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 bg-white cursor-pointer hover:-translate-y-1 m-2 border border-gray-100">
      {/* Image with category tag */}
      <div className="relative aspect-square">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gray-700 uppercase tracking-wider">
          {category}
        </span>
      </div>
      
      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-md font-medium text-gray-900 mb-2 line-clamp-2 leading-tight">
          {title}
        </h3>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-3">
            <span className="text-lg font-bold text-gray-900">${price}</span>
            <span className="flex items-center space-x-1 text-sm text-gray-600">
              <span>⭐</span>
              <span>{rating}</span>
            </span>
          </div>
          
          <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};