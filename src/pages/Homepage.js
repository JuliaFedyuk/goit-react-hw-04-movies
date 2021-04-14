import { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import routes from '../routes';
import MovieList from '../components/MoviesList';

class Homepage extends Component {
  state = {
    movies: [],
    page: 1,
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

export default Homepage;
