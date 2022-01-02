import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchMovieDetails } from '../services/moviesApi';
import MovieCard from '../components/MovieCard';

export default function MovieDetailsView() {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchMovieDetails(movie_id).then(setMovie);
  }, [movie_id]);

  return (
    <>
      <MovieCard movie={movie} />
    </>
  );
}
