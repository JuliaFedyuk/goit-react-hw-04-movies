import { Component } from 'react';
import axios from 'axios';
import Container from '../Container/Container';
import './Cast.scss';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const apiKey = '62a9ccac1046b7fcbbfc478d026ca990';

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.movieId}/credits?api_key=${apiKey}`,
    );

    this.setState({ cast: response.data.cast });
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
