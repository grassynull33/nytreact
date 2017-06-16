import React, { Component } from 'react';

class SavedArticle extends Component {
  render () {
    return (
      <li>
        <span>Article</span>
        <button
          className='btn btn-danger'
        >
          Remove
        </button>
      </li>
    );
  }
}

export default SavedArticle;
