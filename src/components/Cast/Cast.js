import { Component } from 'react';
import Container from '../Container/Container';
import services from '../../services/ApiService';
import './Cast.scss';

class Cast extends Component {
  state = {
    cast: [],
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.setState({ isLoading: true });
    services
      .FetchMovieCast(movieId)
      .then(cast => this.setState({ cast }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const cast = this.state.cast;
    return (
      <Container>
        <ul className="cast-wrapper">
          {cast.map(actor => (
            <li className="actor-wrapper" key={actor.id}>
              {actor.profile_path && (
                <img
                  className="cast-img"
                  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`}
                  alt={actor.name}
                />
              )}
              <p>
                <b>Name:</b> {actor.name}
              </p>
              <p>
                <b>Character:</b> {actor.character}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}

export default Cast;
