import React, { Component } from 'react';
import axios from 'axios';

class Query extends Component {
  constructor (props) {
    super(props);

    this.searchForArticles = this.searchForArticles.bind(this);
  }

  searchForArticles (event) {
    event.preventDefault();
    const that = this;

    axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
        'api-key': process.env.REACT_APP_NYT_API_KEY,
        'q': this.topic.value,
        'begin_date': `${this.startYear.value}0101`,
        'end_date': `${this.endYear.value}0101`
      }
    })
      .then(function (response) {
        let results = [];

        for (let i = 0; i < response.data.response.docs.length; i++) {
          const result = {
            _id: response.data.response.docs[i]._id,
            title: response.data.response.docs[i].headline.main,
            date: response.data.response.docs[i].pub_date,
            url: response.data.response.docs[i].web_url
          };

          results.push(result);
        }

        console.log(results);

        that.props.showResults(results);
        that.searchForm.reset();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render () {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3 className='panel-title'>Search</h3>
        </div>
        <div className='panel-body'>
          <form onSubmit={(event) => this.searchForArticles(event)} ref={(input) => this.searchForm = input}>
            <div className='form-group'>
              <label htmlFor='topic'>Topic</label>
              <input type='text' className='form-control' id='topic' placeholder='Topic' ref={(input) => this.topic = input} required />
            </div>
            <div className='form-group'>
              <label htmlFor='start-year'>Start Year</label>
              <input type='text' className='form-control' id='start-year' placeholder='Start Year' ref={(input) => this.startYear = input} required />
            </div>
            <div className='form-group'>
              <label htmlFor='end-year'>End Year</label>
              <input type='text' className='form-control' id='end-year' placeholder='End Year' ref={(input) => this.endYear = input} required />
            </div>
            <button type='submit' className='btn btn-default'>Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Query;
