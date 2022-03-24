import React from 'react';
import Search from './Search';
import Movie from './Movie';

function Movies ({movies}) {  
  return (
    <section className="container movies">
      <Search />
      
      <h2>Movie Category</h2>
      <div className="movies-wrap">
        <Movie movies={movies}/>      
      </div>

      <h2>Movie Category</h2>
      <div className="movies-wrap">
        <Movie movies={movies}/>      
      </div>
      
    </section>
  );
};

export default Movies;