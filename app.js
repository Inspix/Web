var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/',function (req, res){
	res.sendFile('public/index.html');
});

var server = app.listen(3000, function () {
  
  var port = server.address().port;

  console.log('Listening at port - %s', port);
});