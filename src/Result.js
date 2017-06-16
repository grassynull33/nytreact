import React, { Component } from 'react';

class Result extends Component {
  render () {
    return (
      <li>
        <a href={this.props.details.url}>{this.props.details.title}</a>
        <button className='btn btn-success'>Save</button>
      </li>
    );
  }
}

export default Result;
