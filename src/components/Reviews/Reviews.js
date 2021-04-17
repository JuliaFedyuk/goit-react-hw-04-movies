import { Component } from 'react';
import services from '../../services/ApiService';
import '../Reviews/Reviews.scss';

class Reviews extends Component {
  state = {
    reviews: [],
    isLoading: false,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    this.setState({ isLoading: true });
    services
      .FetchMovieReviews(movieId)
      .then(reviews => this.setState({ reviews }))
      .catch(error => this.setState({ error }));
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
