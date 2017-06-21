import React, { Component } from 'react';
// import axios from 'axios';

class Result extends Component {
  // constructor (props) {
  //   super(props);

  //   this.saveArticle = this.saveArticle.bind(this);
  // }

  // saveArticle () {
  //   axios.post('/api/saved', {
  //     id: this.props.details.id,
  //     title: this.props.details.title,
  //     date: this.props.details.date,
  //     url: this.props.details.url
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  passArticle (event) {
    event.preventDefault();

    const article = {
      id: this.props.details.id,
      title: this.props.details.title,
      date: this.props.details.date,
      url: this.props.details.url
    };

    this.props.saveArticle(article);
  }

  render () {
    return (
      <li>
        <a href={this.props.details.url}>{this.props.details.title}</a>
        <button
          className='btn btn-success'
          onClick={(e) => this.passArticle(e)}
        >
          Save
        </button>
      </li>
    );
  }
}

export default Result;
