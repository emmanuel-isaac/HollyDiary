#!/usr/bin/env node

var app = require('./../app');

// app.listen(3000, function () {
//   console.log('Listening on port 3000');
// });

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port', function () {
  console.log('Listening on port 3000');
}))
