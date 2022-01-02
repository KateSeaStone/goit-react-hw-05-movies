const BASE_URL = 'https://api.themoviedb.org/3';
const apiKey = '419dfd451284fd57cfd962fe73165683';

async function fetchMovie(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrending() {
  return fetchMovie(`${BASE_URL}/trending/all/day?api_key=${apiKey}&page=1`);
}

export function fetchMovieDetails(movie_id) {
  return fetchMovie(
    `${BASE_URL}/movie/${movie_id}?api_key=${apiKey}&language=en-US`,
  );
}

export function fetchMovieCredits(movie_id) {
  return fetchMovie(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${apiKey}&language=en-US`,
  );
}

export function fetchMovieReviews(movie_id) {
  return fetchMovie(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${apiKey}&language=en-US&page=1`,
  );
}

export function fetchMovieQuery(query) {
  return fetchMovie(
    `${BASE_URL}/search/movie?api_key=${apiKey}&language=en-US&include_adult=false&query=${query}`,
  );
}
