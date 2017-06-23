import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import Saved from './Saved';
import axios from 'axios';
import './Main.css';

class Main extends Component {
  constructor (props) {
    super(props);

    this.showResults = this.showResults.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
    this.removeArticle = this.removeArticle.bind(this);

    this.state = {
      searchResults: [],
      savedArticles: {}
    };
  }

  componentWillMount () {
    const that = this;

    axios.get('/api/saved')
    .then(function (response) {
      const articles = {};

      for (let i = 0; i < response.data.length; i++) {
        const articleData = {
          _id: response.data[i]._id,
          title: response.data[i].title,
          date: response.data[i].date,
          url: response.data[i].url
        };

        articles[response.data[i]._id] = articleData;
      }

      that.setState({ savedArticles: articles });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  showResults (results) {
    this.setState({ searchResults: results });
  }

  saveArticle (article) {
    const articles = {...this.state.savedArticles};

    articles[article._id] = article;

    this.setState({ savedArticles: articles });

    axios.post('/api/saved', article)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  removeArticle (key) {
    const articles = {...this.state.savedArticles};

    delete articles[key];

    this.setState({ savedArticles: articles });

    axios.delete('/api/saved', {params: {_id: key}})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    return (
      <div className='main'>
        <Header
          title='New York Times Article Scrubber'
          description='Search for and annotate articles of interest!'
        />
        <div className='container'>
          <Search
            showResults={this.showResults}
            searchResults={this.state.searchResults}
            saveArticle={this.saveArticle}
          />
          <Saved
            savedArticleState={this.state.savedArticles}
            removeArticle={this.removeArticle}
          />
        </div>
      </div>
    );
  }
}

export default Main;
