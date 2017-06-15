import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import Saved from './Saved';

class Main extends Component {
  render () {
    return (
      <div className='main'>
        <Header
          title='New York Times Article Scrubber'
          description='Search for and annotate articles of interest!'
        />
        <div className='container'>
          <Search />
          <Saved />
        </div>
      </div>
    );
  }
}

export default Main;
