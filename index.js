var express = require('express')
var path = require('path');
var http = require('http');
var app = express()
app.use(express.static(__dirname + '/build'));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/build', 'index.html'))
})
const port = process.env.PORT || 3000;
app.use(express.static('public'))
var server = http.createServer(app);
server.listen(port, function () {
  console.log('Dev run app listening on port:' + port);
})
