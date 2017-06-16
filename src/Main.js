import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import Saved from './Saved';

class Main extends Component {
  constructor () {
    super();

    this.addResults = this.addResults.bind(this);

    this.state = {
      searchResults: [],
      savedArticles: {}
    };
  }

  addResults (results) {
    this.setState({ searchResults: results });
  }

  render () {
    return (
      <div className='main'>
        <Header
          title='New York Times Article Scrubber'
          description='Search for and annotate articles of interest!'
        />
        <div className='container'>
          <Search
            addResults={this.addResults}
            searchResults={this.state.searchResults}
          />
          <Saved />
        </div>
      </div>
    );
  }
}

export default Main;
