import React, { Component } from 'react';
import Query from './Query';
import Results from './Results';

class Search extends Component {
  render () {
    return (
      <div className='search'>
        <Query addResults={this.props.addResults} />
        <Results searchResults={this.props.searchResults} />
      </div>
    );
  }
}

export default Search;
