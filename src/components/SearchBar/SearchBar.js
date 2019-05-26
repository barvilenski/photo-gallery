import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = { term: this.props.term };
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar-root">
        <span>Unsplash Gallery</span>
        <form onSubmit={this.onFormSubmit}>
          <label>icon</label>
          <input
            type="text"
            placeholder="Search photos"
            value={this.state.term}
            onChange={event => this.setState({ term: event.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
