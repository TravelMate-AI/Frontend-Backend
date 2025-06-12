import React, { useState } from 'react';
import { MapPin, Star, Camera, ArrowRight } from 'lucide-react';

function Card({ title, description, imageUrl, category, location, rating = 4.5 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 h-[460px] flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container - Fixed Height */}
      <div className="relative h-48 overflow-hidden shrink-0">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" />
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        
        {/* Rating Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-semibold text-gray-800">{rating}</span>
        </div>

        {/* Camera Icon */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Camera className="w-5 h-5 text-gray-700" />
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-1">
        {/* Location */}
        {location && (
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
            <span className="text-sm text-gray-600 line-clamp-1">{location}</span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 h-[56px]">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 h-[70px]">
          {description}
        </p>

        {/* Spacer to push category and button to bottom */}
        <div className="flex-1" />

        {/* Category Badge */}
        {category && (
          <div className="mb-4">
            <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1.5 rounded-full font-medium">
              {category}
            </span>
          </div>
        )}

        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300 pointer-events-none" />
    </div>
  );
}

export default Card;
