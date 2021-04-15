import Container from '../Container';
import PropTypes from 'prop-types';
import './MovieDescr.scss';

const MovieDescr = ({
  title,
  date,
  poster_path,
  vote_average,
  overview,
  genres,
}) => {
  return (
    <Container>
      <h1 className="film-title">
        {title} ({date})
      </h1>
      <div className="movie-info-wrapper">
        {poster_path && (
          <img
            className="img-poster"
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`}
            alt=""
          />
        )}
        <div>
          <p>
            <b>Rank:</b> {vote_average}
          </p>
          <p>
            <b>Overview:</b> {overview}
          </p>
          <p>
            <b>Genres:</b> {genres.join(' ')}
          </p>
        </div>
      </div>
    </Container>
  );
};

MovieDescr.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array,
};

export default MovieDescr;
