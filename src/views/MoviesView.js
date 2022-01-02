import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import Searchbar from '../components/Searchbar/Searchbar';
import { fetchMovieQuery } from '../services/moviesApi';
import MovieList from '../components/MoviesList';

export default function MoviesView() {
  const location = useLocation();
  const history = useHistory();

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (location.search === '') {
      return;
    }

    const newSearch = new URLSearchParams(location.search).get('query');
    setQuery(newSearch);
  }, [location.search]);

  useEffect(() => {
    if (!query) return;

    fetchMovieQuery(query).then(data => {
      setMovies(data.results);
    });
  }, [query]);

  const handleFormSubmit = newSearch => {
    if (query === newSearch) return;
    setQuery(newSearch);
    setMovies([]);
    history.push({ ...location, search: `query=${newSearch}&page=1` });
  };

  return (
    <>
      <h2>Search Movie</h2>
      <Searchbar onSubmit={handleFormSubmit} query={query} />
      <MovieList movies={movies} />
    </>
  );
}
