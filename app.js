var express = require( 'express' );
var app = express();

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
  next();
};

app.use(allowCrossDomain);

var db = require('./models/db');

var actors = require('./routes/actors');

var Actor = require('./models/schema');

app.use('/', actors);

app.use(express.static('public'));

app.set('port', (process.env.PORT || 3000));

module.exports = app;