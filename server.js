var express = require('express');
var app = express();

app.use(express.static(__dirname + '/build'));

app.use('/build',express.static(__dirname + '/build'));
app.use('/api',express.static(__dirname + '/api'));
app.use('/assets',express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(1339);
console.log('Open this link http://localhost:1339');