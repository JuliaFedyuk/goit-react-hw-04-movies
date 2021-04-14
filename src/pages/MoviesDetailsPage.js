import { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
import routes from '../routes';
import MovieDescr from '../components/MovieDescr';
import arrow from '../images/arrow-left2.png';
import Container from '../components/Container';

class MoviesDetailsPage extends Component {
  state = {
    movie: {},
    genres: [],
    date: '',
  };

  async componentDidMount() {
    const apiKey = '62a9ccac1046b7fcbbfc478d026ca990';
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    );

    this.setState({ movie: response.data });

    const getGenresNames = array => array.map(({ name }) => name);

    this.setState({ genres: getGenresNames(this.state.movie.genres) });

    const getDate = this.state.movie.release_date.substr(0, 4);
    this.setState({ date: getDate });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { poster_path, title, vote_average, overview, id } = this.state.movie;
    const date = this.state.date;
    const { match } = this.props;
    const genres = this.state.genres;

    return (
      <>
        <button
          type="button"
          onClick={this.handleGoBack}
          className="goback-button"
        >
          <img
            src={arrow}
            alt={arrow}
            width="18"
            height="18"
            className="arrow-img"
          />
          Go back
        </button>
        <MovieDescr
          poster_path={poster_path}
          title={title}
          date={date}
          vote_average={vote_average}
          overview={overview}
          genres={genres}
        />
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to={`${match.url}${routes.cast}`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}${routes.reviews}`}>Reviews</NavLink>
          </li>
        </ul>
        <Route
          exact
          path={`${match.path}/cast`}
          render={props => <Cast {...props} movieId={id} />}
        />
        <Route
          exact
          path={`${match.path}/reviews`}
          render={props => <Reviews {...props} movieId={id} />}
        />
      </>
    );
  }
}

export default MoviesDetailsPage;
