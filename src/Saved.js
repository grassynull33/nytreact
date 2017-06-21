import React, { Component } from 'react';
import SavedArticle from './SavedArticle';

class Saved extends Component {
  render () {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3 className='panel-title'>Saved Articles</h3>
        </div>
        <div className='panel-body'>
          <ul>
            {
              Object
                .keys(this.props.savedArticleState)
                .map((key) => <SavedArticle key={key} details={this.props.savedArticleState[key]} removeArticle={this.props.removeArticle} />)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Saved;
