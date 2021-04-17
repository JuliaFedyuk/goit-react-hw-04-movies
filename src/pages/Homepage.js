import { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from '../components/MoviesList';
import services from '../services/ApiService';
import Loader from '../components/Loader';

class Homepage extends Component {
  state = {
    movies: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    services
      .FetchTrendingMovie()
      .then(movies => this.setState({ movies }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { movies, isLoading } = this.state;

    return (
      <>
        <h1 className="main-title">Tranding today</h1>
        {isLoading && <Loader />}
        <MovieList movies={movies} />
      </>
    );
  }
}

Homepage.propTypes = {
  movies: PropTypes.array,
};

export default Homepage;
