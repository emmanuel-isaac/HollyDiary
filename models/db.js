var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://localhost/hollydiary';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
})

.on('error', console.error.bind(console, 'connection err: '));

require( './schema' );