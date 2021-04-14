import { Component } from 'react';
import axios from 'axios';
import Searchbar from '../components/SearchBar/SearchBar';
import MoviesList from '../components/MoviesList/MovieList';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
    error: null,
    isLoading: false,
  };

  onChangeQuery = query => {
    const apiKey = '62a9ccac1046b7fcbbfc478d026ca990';
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&include_adult=false&query=${query}`,
      )
      .then(response => this.setState({ movies: response.data.results }));
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
