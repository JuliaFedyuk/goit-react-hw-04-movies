import { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import Searchbar from '../components/SearchBar/SearchBar';
import MoviesList from '../components/MoviesList/MovieList';
import Loader from '../components/Loader';
import services from '../services/ApiService';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
    error: null,
    isLoading: false,
  };

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);
    this.setState({ isLoading: true });
    if (queryParams?.query) {
      services
        .FetchMoviesWithQuery(queryParams.query)
        .then(movies => this.setState({ movies }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }
  onChangeQuery = query => {
    services
      .FetchMoviesWithQuery(query)
      .then(movies => this.setState({ movies }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { movies, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} query={this.state.query} />
        {isLoading && <Loader />}
        <MoviesList movies={movies} />
      </>
    );
  }
}

MoviesPage.propTypes = {
  query: PropTypes.string,
  movies: PropTypes.array,
};

export default MoviesPage;
