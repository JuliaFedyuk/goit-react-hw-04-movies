import { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import Searchbar from '../components/SearchBar/SearchBar';
import MoviesList from '../components/MoviesList/MovieList';
import Loader from '../components/Loader';

const apiKey = '62a9ccac1046b7fcbbfc478d026ca990';

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
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&include_adult=false&query=${queryParams.query}`,
        )
        .then(response => this.setState({ movies: response.data.results }));
    }
  }
  onChangeQuery = query => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&include_adult=false&query=${query}`,
      )
      .then(response => this.setState({ movies: response.data.results }))
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
