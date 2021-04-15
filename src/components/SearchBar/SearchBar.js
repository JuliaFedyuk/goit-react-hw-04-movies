import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './SearchBar.scss';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query) {
      this.props.onSubmit(this.state.query);
    } else if (!this.state.query) {
      alert('Write something to start search');
    }

    this.props.history.push({
      search: `query=${this.state.query}`,
    });
    this.setState({ query: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.query}
          onChange={this.handleChange}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit" className="form-button">
          Search
        </button>
      </form>
    );
  }
}

export default withRouter(Searchbar);
