

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("/css", express.static(__dirname));
app.use("/media", express.static(__dirname + '/media'));
app.use("/js", express.static(__dirname + '/js'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

// add other routes below
app.get('/dash', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/dash.html'));
});

app.listen(process.env.PORT || 8080);