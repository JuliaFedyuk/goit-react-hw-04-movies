import axios from 'axios';
const apiKey = '62a9ccac1046b7fcbbfc478d026ca990';

const FetchTrendingMovie = () => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
    .then(response => response.data.results);
};

const FetchMovieCast = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
    )
    .then(response => response.data.cast);
};

const FetchMovieReviews = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`,
    )
    .then(response => response.data.results);
};

const FetchMovieDetails = movieId => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
    .then(response => response.data);
};

const FetchMoviesWithQuery = query => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&include_adult=false&query=${query}`,
    )
    .then(response => response.data.results);
};

export default {
  FetchTrendingMovie,
  FetchMovieCast,
  FetchMovieReviews,
  FetchMovieDetails,
  FetchMoviesWithQuery,
};
