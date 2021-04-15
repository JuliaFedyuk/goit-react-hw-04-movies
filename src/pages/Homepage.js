import { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import MovieList from '../components/MoviesList';

class Homepage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const apiKey = '62a9ccac1046b7fcbbfc478d026ca990';
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`,
    );

    this.setState({ movies: response.data.results });
  }

  render() {
    const movies = this.state.movies;

    return (
      <>
        <h1 className="main-title">Tranding today</h1>
        <MovieList movies={movies} />
      </>
    );
  }
}

Homepage.propTypes = {
  movies: PropTypes.array,
};

export default Homepage;
