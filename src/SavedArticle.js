import React, { Component } from 'react';
import './SavedArticle.css';

class SavedArticle extends Component {
  passArticle (event) {
    event.preventDefault();

    this.props.removeArticle(this.props.details._id);
  }

  render () {
    return (
      <li>
        <a href={this.props.details.url}>{this.props.details.title}</a>
        <button
          className='btn btn-danger btn-sm'
          onClick={(e) => this.passArticle(e)}
        >
          Remove
        </button>
      </li>
    );
  }
}

export default SavedArticle;
