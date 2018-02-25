var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

//from here new web pages are added

//first web page
app.get('firstWebPage', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'firstwebPage.html'));
});
//second web page
app.get('secondWebPage', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'secondWebPage.html'));
});
//third webpage
app.get('thirdWebPage', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'thirdWebPage.html'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
