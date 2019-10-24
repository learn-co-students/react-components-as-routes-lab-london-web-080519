import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div><h1>Movies Page</h1>
      {movies.map(movie => <div className="movie"><h3 key={movie.title}>Name: {movie.title}</h3> Time: {movie.time} Genres: <ul>{movie.genres.map(genre=> <li>{genre}</li> )}</ul></div>)}
    </div>
  );
};

export default Movies;
