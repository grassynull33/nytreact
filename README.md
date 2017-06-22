# nytreact
Homework #19

## Live Link
 - https://limitless-cliffs-99008.herokuapp.com/

## Description
1. Open the app and enter a topic to query the New York Times API
2. Related articles will pop up and you will have the option of saving them
3. Saved articles will persist in our MongoDB database

## Requirements
- Create a Node/Express/MongoDB/React app that queries the New York Times API and returns a selection of articles
- Use React for the front-end
- Node, MongoDB, and Express routes for the back-end
- Allow the user to save articles

## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MongoDB
- Mongoose
- React

## Code Explanation
- Below, you can see the `render` function for the Main React component. This parent component is passing its state and props to its children components, such as `Search` or `Saved`. From this, we can see React's component-based structure and also its unidirectional flow of data.

```
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
```