import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = { term: '' };
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar-root">
        <i className="logo-icon fas fa-camera"></i>
        <form onSubmit={this.onFormSubmit}>
        <i className="search-icon fas fa-search"></i>
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
