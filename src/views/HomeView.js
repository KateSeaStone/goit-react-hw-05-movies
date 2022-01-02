import { useEffect, useState } from 'react';
import { fetchTrending } from '../services/moviesApi';
import MoviesList from '../components/MoviesList/MoviesList';

export default function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(movies => setMovies(movies.results));
  }, []);

  return (
    <>
      <h2>Trending Today</h2>
      <>
        <MoviesList movies={movies} />
      </>
    </>
  );
}
