var express = require('express');
var mysql = require('mysql');
var app = express();

// Aplication Settings
app.use(express.static('public'));
app.set('view engine', 'jade');

// Configuration
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'secret',
  database : 'express'
});

app.get('/', function(req, res) {
  connection.connect();

  connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;

    res.render('index', {title: 'Glo', solution: rows[0].solution});
  });

  connection.end();

});

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Your server is running at http://%s:%s', host, port)
});
