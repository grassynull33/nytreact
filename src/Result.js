import React, { Component } from 'react';

class Result extends Component {
  passArticle (event) {
    event.preventDefault();

    const article = {
      _id: this.props.details._id,
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
