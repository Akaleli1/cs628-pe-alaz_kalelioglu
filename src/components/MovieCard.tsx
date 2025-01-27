import React from 'react';
import { Film, Calendar, Tag } from 'lucide-react';

interface MovieProps {
  title: string;
  genre: string;
  releaseYear: number;
  onClick: () => void;
}

const MovieCard: React.FC<MovieProps> = ({ title, genre, releaseYear, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
    >
      <div className="flex items-center mb-4">
        <Film className="w-6 h-6 text-indigo-600 mr-2" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <Tag className="w-4 h-4 mr-2" />
          <span>{genre}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{releaseYear}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;