var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://hollydiary:actors@ds029640.mongolab.com:29640/hollydiary';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
})

.on('error', console.error.bind(console, 'connection err: '));

require( './schema' );