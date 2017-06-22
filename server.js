// Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Requiring our Note and Article models
// var Note = require('./models/Note');
var Article = require('./models/Article');

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Init app
var app = express();

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'build')));

// Database configuration with mongoose
mongoose.connect(process.env.REACT_APP_MONGODB_URI);
var db = mongoose.connection;

// Show any mongoose errors
db.on('error', function (error) {
  console.log('Mongoose Error: ', error);
});

// Once logged in to the db through mongoose, log a success message
db.once('open', function () {
  console.log('Mongoose connection successful.');
});

// Routes
app.get('/api/saved', function (req, res) {
  Article.find({}, function (error, docs) {
    res.send(docs);
  });
});

app.post('/api/saved', function (req, res) {
  var article = req.body;

  new Article(article)
    .save()
    .then(function () {
      res.send(article);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.delete('/api/saved', function (req, res) {
  var id = req.query._id;

  Article.findByIdAndRemove(id, function (error, doc) {
    if (error) {
      res.send(error);
    } else {
      res.send(doc);
    }
  });
});

app.get('*', function (req, res) {
  res.sendFile('./build/index.html');
});

// Set Port
app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), function () {
  console.log('Server started on port ' + app.get('port'));
});
