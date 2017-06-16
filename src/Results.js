import React, { Component } from 'react';
import Result from './Result';

class Results extends Component {
  render () {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3 className='panel-title'>Results</h3>
        </div>
        <div className='panel-body'>
          <ul>
            {
              this.props.searchResults
                .map((index) => <Result id={index.id} details={index} />)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Results;
