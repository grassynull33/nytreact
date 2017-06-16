import React, { Component } from 'react';

class Result extends Component {
  constructor () {
    super();

    this.saveArticle = this.saveArticle.bind(this);
  }

  saveArticle () {
    console.log(this.props.details.id);

    // axios.post('/api/saved', {
    //   params: {
    //     'api-key': process.env.REACT_APP_NYT_API_KEY,
    //     'q': this.topic.value,
    //     'begin_date': `${this.startYear.value}0101`,
    //     'end_date': `${this.endYear.value}0101`
    //   }
    // })
    //   .then(function (response) {
    //     let results = [];

    //     for (let i = 0; i < response.data.response.docs.length; i++) {
    //       const result = {
    //         id: response.data.response.docs[i]._id,
    //         title: response.data.response.docs[i].headline.main,
    //         date: response.data.response.docs[i].pub_date,
    //         url: response.data.response.docs[i].web_url
    //       };

    //       results.push(result);
    //     }

    //     console.log(results);

    //     that.props.addResults(results);
    //     that.searchForm.reset();
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
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
