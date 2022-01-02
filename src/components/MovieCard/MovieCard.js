import React from 'react';
import { useEffect, useState, lazy, Suspense } from 'react';
import {
  useParams,
  NavLink,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { Route } from 'react-router';
import MovieDescription from '../MovieDescription';
import { fetchMovieDetails } from '../../services/moviesApi';
import Container from '../Container';
import BtnGoBack from '../BtnGoBack/BtnGoBack';

const Cast = lazy(() => import('../Cast/Cast.js'));
const Reviews = lazy(() => import('../Reviews/Reviews.js'));

export default function MovieCard(props) {
  const location = useLocation();
  const history = useHistory();

  const { url, path } = useRouteMatch();
  const { movie_id } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMovieDetails(movie_id).then(movie => {
      setMovie(movie);
      setGenres(movie.genres);
      setDate(movie.release_date);
      setIsLoading(true);
    });
  }, [movie_id]);

  useEffect(() => {
    if (isLoading) {
      setDate(date.substr(0, 4));

      const getGenresNames = array => {
        return array.map(item => item.name);
      };
      setGenres(getGenresNames(genres));
    }
  }, [isLoading]);

  const handleGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      <BtnGoBack onClick={handleGoBack} />

      <Container>
        <MovieDescription
          poster_path={movie.poster_path}
          title={movie.title}
          vote_average={movie.vote_average}
          overview={movie.overview}
          date={date}
          genres={genres}
        />
        <hr />

        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { from: location },
              }}
            >
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: location },
              }}
            >
              Cast
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>
        </Suspense>
      </Container>
    </>
  );
}
