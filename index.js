var express = require('express');
var app = express();

app.use(express.static('papka'));

app.listen(2001, function () {
  console.log('Your server listening on port 2001!');
});