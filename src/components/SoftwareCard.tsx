import React from 'react';
import { Link } from 'react-router-dom';
import { Software } from '../types/Software';
import { RatingStars } from './RatingStars';

interface SoftwareCardProps {
  software: Software;
}

export function SoftwareCard({ software }: SoftwareCardProps) {
  return (
    <Link to={`/software/${software.id}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img
          src={software.image}
          alt={software.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{software.title}</h3>
          <p className="text-gray-600 mb-4">{software.description}</p>
          <div className="flex items-center gap-2 mb-3">
            <RatingStars rating={software.rating} />
            <span className="text-gray-600 font-medium">{software.rating.toFixed(1)}</span>
          </div>
          <p className="text-sm text-gray-500 italic">{software.reason}</p>
        </div>
      </div>
    </Link>
  );
}