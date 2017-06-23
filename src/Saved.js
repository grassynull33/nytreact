import React, { Component } from 'react';
import SavedArticle from './SavedArticle';
import './Saved.css';

class Saved extends Component {
  render () {
    let saved = null;

    if (Object.keys(this.props.savedArticleState).length === 0) {
      saved = <div className='alert alert-info' role='alert'><b>You have no articles saved!</b> Search for articles above.</div>;
    } else {
      saved = Object
        .keys(this.props.savedArticleState)
        .map((key) => <SavedArticle key={key} details={this.props.savedArticleState[key]} removeArticle={this.props.removeArticle} />);
    }

    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3 className='panel-title'>Saved Articles</h3>
        </div>
        <div className='panel-body'>
          <ul id='saved'>
            { saved }
          </ul>
        </div>
      </div>
    );
  }
}

export default Saved;
