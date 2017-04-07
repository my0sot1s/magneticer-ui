var express = require('express')
var path = require('path');
var app = express()
app.use(express.static(__dirname + '/build'));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/build', 'index.html'))
})
app.use(express.static('public'))
app.listen(3000, function () {
  console.log('Dev run app listening on port 3000!')
})
