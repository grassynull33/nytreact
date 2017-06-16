import React, { Component } from 'react';
import SavedArticle from './SavedArticle';

class Saved extends Component {
  render () {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3 className='panel-title'>Saved Articles</h3>
        </div>
        <div className='panel-body'>
          <ul>
            <SavedArticle />
          </ul>
        </div>
      </div>
    );
  }
}

export default Saved;
