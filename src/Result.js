import React, { Component } from 'react';
import axios from 'axios';

class Result extends Component {
  constructor () {
    super();

    this.saveArticle = this.saveArticle.bind(this);
  }

  saveArticle () {
    console.log(this.props.details.id);

    axios.post('/api/saved', {
      body: this.props.details
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    return (
      <li>
        <a href={this.props.details.url}>{this.props.details.title}</a>
        <button
          className='btn btn-success'
          onClick={this.saveArticle}
        >
          Save
        </button>
      </li>
    );
  }
}

export default Result;
