import { Link, withRouter } from 'react-router-dom';
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

export default withRouter(MoviesList);
