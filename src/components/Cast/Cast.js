import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from './Cast.module.css';
import { fetchMovieCredits } from '../../services/moviesApi';

function Cast() {
  const { movie_id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movie_id).then(data => setCast(data.cast));
  }, [movie_id]);

  return (
    <ul className={styles.wrapper}>
      {cast.map(actor => (
        <li className={styles.actor} key={actor.id}>
          {actor.profile_path && (
            <img
              className={styles.img}
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`}
              alt={actor.name}
            />
          )}
          <p>
            <b>Name:</b> {actor.name}
          </p>
          <p>
            <b>Character:</b> {actor.character}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default Cast;
