var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile( __dirname + '/index.html');
});

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Your server is running at http://%s:%s', host, port)
});
