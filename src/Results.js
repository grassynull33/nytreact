import React, { Component } from 'react';
import Result from './Result';
import './Results.css';

class Results extends Component {
  render () {
    let results = null;

    if (this.props.searchResults.length > 0) {
      results =
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h3 className='panel-title'>Results</h3>
          </div>
          <div className='panel-body'>
            <ul id='results'>
              {
                this.props.searchResults
                  .map((index) => <Result key={index._id} details={index} saveArticle={this.props.saveArticle} />)
              }
            </ul>
          </div>
        </div>;
    }

    return (
      <div className='results'>
        {results}
      </div>
    );
  }
}

export default Results;
