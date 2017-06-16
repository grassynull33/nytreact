// Require mongoose
var mongoose = require('mongoose');

// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
  _id: {
    type: String,
    unique: true,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    unique: true,
    required: true
  }
  // ,
  // notes: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Note'
  // }]
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model('Article', ArticleSchema);

// Export the model
module.exports = Article;
