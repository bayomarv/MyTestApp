import React from 'react';

function Movie ({movies}) {  
  return (
    <>
      {movies.map((movie, index) => (
        <div className="movie" key={movie.imdbID}>
          <h3 className="movie-title">{movie.Title}</h3>
        </div>
      ))}
    </>
  );
};

export default Movie;