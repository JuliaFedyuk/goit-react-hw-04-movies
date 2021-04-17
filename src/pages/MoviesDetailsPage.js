import React, { Suspense, lazy } from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';
import routes from '../routes';
import MovieDescr from '../components/MovieDescr';
import Container from '../components/Container';
import GoBackButton from '../components/GoBackButton';
import Loader from '../components/Loader';
import services from '../services/ApiService';
import '../styles/base.scss';

const Cast = lazy(() =>
  import('../components/Cast/Cast' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import('../components/Reviews' /* webpackChunkName: "Reviews" */),
);

class MoviesDetailsPage extends Component {
  state = {
    movie: {},
    genres: [],
    date: '',
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    const { movieId } = this.props.match.params;

    await services
      .FetchMovieDetails(movieId)
      .then(movie =>
        this.setState({
          movie: movie,
          genres: movie.genres,
          date: movie.release_date,
        }),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));

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
    const { match, location } = this.props;
    const { genres, isLoading } = this.state;

    return (
      <>
        <GoBackButton onClick={this.handleGoBack} />
        {isLoading && <Loader />}
        <MovieDescr
          poster_path={poster_path}
          title={title}
          date={date}
          vote_average={vote_average}
          overview={overview}
          genres={genres}
        />
        <Container>
          <h2 className="additional-info-title">Additional information</h2>
          <ul className="additional-links">
            <li>
              <NavLink
                className="cast-link"
                to={{
                  pathname: `${match.url}${routes.cast}`,
                  state: { from: location?.state?.from },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                className="reviews-link"
                to={{
                  pathname: `${match.url}${routes.reviews}`,
                  state: { from: location?.state?.from },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <Suspense fallback={<h2>Loading...</h2>}>
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
          </Suspense>
        </Container>
      </>
    );
  }
}

MoviesDetailsPage.propTypes = {
  movie: PropTypes.object,
  genres: PropTypes.array,
  date: PropTypes.string,
};

export default MoviesDetailsPage;
