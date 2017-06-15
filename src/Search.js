import React, { Component } from 'react';
import Query from './Query';
// import Results from './Results';

class Search extends Component {
  render () {
    return (
      <Query addResults={this.props.addResults} />
    );
  }
}

export default Search;
