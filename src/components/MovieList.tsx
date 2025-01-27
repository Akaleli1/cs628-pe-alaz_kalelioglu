import React, { useState, useMemo } from 'react';
import MovieCard from './MovieCard';
import GenreFilter from './GenreFilter';

const initialMovies = [
  { title: 'Inception', genre: 'Sci-Fi', releaseYear: 2010 },
  { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
  { title: 'Interstellar', genre: 'Sci-Fi', releaseYear: 2014 },
  { title: 'The Godfather', genre: 'Crime', releaseYear: 1972 },
  { title: 'Pulp Fiction', genre: 'Crime', releaseYear: 1994 },
  { title: 'The Matrix', genre: 'Sci-Fi', releaseYear: 1999 },
  { title: 'Die Hard', genre: 'Action', releaseYear: 1988 },
  { title: 'Jurassic Park', genre: 'Adventure', releaseYear: 1993 }
];

const MovieList: React.FC = () => {
  const [movies] = useState(initialMovies);
  const [selectedGenre, setSelectedGenre] = useState('All');

  const uniqueGenres = useMemo(() => 
    Array.from(new Set(movies.map(movie => movie.genre))).sort(),
    [movies]
  );

  const filteredMovies = useMemo(() => 
    selectedGenre === 'All'
      ? movies
      : movies.filter(movie => movie.genre === selectedGenre),
    [movies, selectedGenre]
  );

  const handleMovieClick = (title: string) => {
    alert(`You selected: ${title}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Movie Collection
      </h1>
      
      <GenreFilter
        genres={uniqueGenres}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={`${movie.title}-${movie.releaseYear}`}
            {...movie}
            onClick={() => handleMovieClick(movie.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;