import { Component } from 'react';
import axios from 'axios';
import '../Reviews/Reviews.scss';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const apiKey = '62a9ccac1046b7fcbbfc478d026ca990';

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.movieId}/reviews?api_key=${apiKey}`,
    );

    this.setState({ reviews: response.data.results });
  }

  render() {
    const reviews = this.state.reviews;
    return (
      <ul className="reviews-wrapper">
        {reviews.length > 0
          ? reviews.map(review => (
              <li key={review.id}>
                <p>
                  <b>author:</b> {review.author}{' '}
                </p>
                <p>{review.content}</p>
              </li>
            ))
          : `We don't have any reviews for this movie`}
      </ul>
    );
  }
}

export default Reviews;
