import React, { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Movies from './components/Movies';

import './App.css';

function App () {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=9b86ff67`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  getMovieRequest('avengers');
  
  return (
    <>
      <Nav />
      <Hero />
      <Movies movies={movies}/>
    </>
  );
};

export default App;