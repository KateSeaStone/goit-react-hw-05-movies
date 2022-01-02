import styles from './MovieDescription.module.css';

export default function MovieDescription(props) {
  const { title, date, poster_path, vote_average, overview, genres } = props;

  return (
    <>
      <h1 className={styles.title}>
        {title} ({date})
      </h1>
      <div className={styles.movieInfo}>
        {poster_path && (
          <img
            className={styles.imgPoster}
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`}
            alt=""
          />
        )}
        <div>
          <p>
            <b>Rating:</b> {vote_average}
          </p>
          <p>
            <b>Overview:</b> {overview}
          </p>
          <p>
            <b>Genres:</b> {genres.join(', ')}
          </p>
        </div>
      </div>
    </>
  );
}
