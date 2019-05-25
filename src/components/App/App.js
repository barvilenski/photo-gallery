import React from 'react';
import SearchBar from '../SearchBar';
import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: '' };
  }

  render() {
    return (
      <div className="app-root">
        <SearchBar term={this.state.searchTerm} onSubmit={term => this.setState({ searchTerm: term })} />
      </div>
    );
  }
}

export default App;
