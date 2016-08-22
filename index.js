var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hola Tincho');
});

app.get('/goodbye', function(req, res) {
  res.send('Chau Tincho');
});

var server = app.listen(1337, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Your server is running at http://%s:%s', host, port)
});
