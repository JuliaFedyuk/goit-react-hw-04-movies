import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../routes';
import './MovieList.scss';

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id} className="movie-link">
          <Link
            to={{
              pathname: `${routes.movies}/${movie.id}`,
              state: { from: location },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
  location: PropTypes.object,
};

export default withRouter(MoviesList);
