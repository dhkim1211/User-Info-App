var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');


var app = express(); 

app.set('views', './src/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
	fs.readFile('./users.json', function(err, data){
		if (err) {
			throw err;
			console.log(err);
		}

		var parsedData = JSON.parse(data);

		res.render('index', {
			users: parsedData
		})
	})
})

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/users', function(req, res) {

})



var server = app.listen(3000, function() {
  console.log('Example app listening on port: ' + server.address().port);
});











