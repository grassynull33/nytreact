import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import Saved from './Saved';

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

  showResults (results) {
    this.setState({ searchResults: results });
  }

  saveArticle (article) {
    const articles = {...this.state.savedArticles};

    articles[article.id] = article;

    this.setState({ savedArticles: articles });
  }

  removeArticle (key) {
    const articles = {...this.state.savedArticles};

    delete articles[key];

    this.setState({ savedArticles: articles });
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
