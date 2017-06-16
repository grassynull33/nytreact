import React, { Component } from 'react';
import Query from './Query';
import Results from './Results';

class Search extends Component {
  render () {
    return (
      <div className='search'>
        <Query showResults={this.props.showResults} />
        <Results
          searchResults={this.props.searchResults}
          saveArticle={this.props.saveArticle}
        />
      </div>
    );
  }
}

export default Search;
