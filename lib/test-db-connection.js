const mongoose = require( 'mongoose' );

// we need a URI that points to our database
const dbURI = 'mongodb://fanclub-admin:kiosk_estop_rotary@ds060478.mlab.com:60478/test-fanclub';

mongoose.Promise = Promise;
mongoose.connect( dbURI );


// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log( 'Mongoose default connection open to ' + dbURI );
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log( 'Mongoose default connection error: ' + err );
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log( 'Mongoose default connection disconnected' );
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log( 'Mongoose default connection disconnected through app termination' );
    process.exit(0);
  });
});

module.exports = mongoose.connection;