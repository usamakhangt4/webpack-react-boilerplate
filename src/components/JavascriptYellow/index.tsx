/* eslint-disable no-alert */
/* eslint-disable react/jsx-indent */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import 'styles/components/javaScript-yellow.scss';
import MoviesList from './MoviesList';

export default function JavascriptYellow() {
  const [movies, setMovies] = useState(['']);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json?page=${currentPage}`)
      .then(resp => resp.json())
      .then(data => setMovies(data.data.movies));
    alert(currentPage);
  }, [currentPage]);

  function handlePrevious() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      alert('No more pages');
    }
  }

  function handleNext() {
    setCurrentPage(currentPage + 1);
  }

  const randomPage = Math.floor(Math.random() * 100) + 1;

  function handleRandom() {
    setCurrentPage(randomPage);
  }

  return (
    <>
      <main className="javaScript-yellow-belt">
        <h1 className="title">YTS Movies List</h1>
        <MoviesList movies={movies} />
        <button type="button" onClick={() => handlePrevious()}>
          Previous page
        </button>
        <button type="button" onClick={() => handleRandom()}>
          Random page
        </button>
        <button type="button" onClick={() => handleNext()}>
          next page
        </button>
      </main>
    </>
  );
}
