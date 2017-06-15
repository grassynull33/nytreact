import React, { Component } from 'react';

class Search extends Component {
  render () {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3 className='panel-title'>Search</h3>
        </div>
        <div className='panel-body'>
          <form>
            <div className='form-group'>
              <label for='topic'>Topic</label>
              <input type='text' className='form-control' id='topic' placeholder='Topic' required />
            </div>
            <div className='form-group'>
              <label for='start-year'>Start Year</label>
              <input type='text' className='form-control' id='start-year' placeholder='Start Year' />
            </div>
            <div className='form-group'>
              <label for='end-year'>End Year</label>
              <input type='text' className='form-control' id='end-year' placeholder='End Year' />
            </div>
            <button type='submit' className='btn btn-default'>Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
