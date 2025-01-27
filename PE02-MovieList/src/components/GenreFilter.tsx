import React from 'react';
import { Filter } from 'lucide-react';

interface GenreFilterProps {
  genres: string[];
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
}

const GenreFilter: React.FC<GenreFilterProps> = ({ genres, selectedGenre, onGenreChange }) => {
  return (
    <div className="flex items-center space-x-3 mb-6">
      <Filter className="w-5 h-5 text-indigo-600" />
      <select
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
        className="bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="All">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;