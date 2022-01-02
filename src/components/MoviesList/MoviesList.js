import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import styles from './MovieList.module.css';

export default function MoviesList(props) {
  const { movies } = props;

  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id} className={styles.movieLink}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location },
            }}
          >
            {movie.title} {movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
