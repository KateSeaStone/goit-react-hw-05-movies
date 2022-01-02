import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from './Reviews.module.css';
import { fetchMovieReviews } from '../../services/moviesApi';

function Reviews() {
  const { movie_id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movie_id).then(data => setReviews(data.results));
  }, [movie_id]);

  return (
    <ul className={styles.wrapper}>
      {reviews.length > 0
        ? reviews.map(review => (
            <li key={review.id}>
              <p>
                <b>author:</b> {review.author}{' '}
              </p>
              <p>{review.content}</p>
            </li>
          ))
        : `We don't have any reviews for this movie`}
    </ul>
  );
}

export default Reviews;
