const API_KEY = "0fc479a0e970b2585b448c3b4a37fb4c";
const BASE_URL = "https://api.themoviedb.org/3/";

const fetchTrending = (setTrending) => {
  fetch(
    `${BASE_URL}trending/movie/week?api_key=${API_KEY}&language=en-US&page=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((trending) => setTrending(trending.results))
    .catch((e) => console.log(e));
};

const fetchMovieById = (movieId, setMovie) => {
  fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((movie) => setMovie(movie))
    .catch((e) => console.log(e));
};

const fetchMovieCastById = (movieId, setCast) => {
  fetch(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((movie) => setCast(movie.cast))
    .catch((e) => console.log(e));
};

const fetchMovieReviewsById = (movieId, setReviews) => {
  fetch(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((movie) => setReviews(movie.results))
    .catch((e) => console.log(e));
};

const fetchMovieByQuery = (query, setSearchedMovie) => {
  fetch(
    `${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((movie) => setSearchedMovie(movie.results))
    .catch((e) => console.log(e));
};

export {
  fetchTrending,
  fetchMovieById,
  fetchMovieCastById,
  fetchMovieReviewsById,
  fetchMovieByQuery,
};
