var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');


var app = express(); 

var parsedData;

app.set('views', './src/views');
app.set('view engine', 'jade');

app.use(express.static('./public'));

app.get('/', function(req, res) {
	fs.readFile('./users.json', function(err, data){
		if (err) {
			throw err;
			console.log(err);
		}

		parsedData = JSON.parse(data);

		res.render('index', {
			users: parsedData
		})
	})
})

app.get('/search', function(req, res) {
	res.render('search');
	fs.readFile('./users.json', function(err, data){
		if (err) {
			throw err;
			console.log(err);
		}

		parsedData = JSON.parse(data);
	})
})

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/search', function(req, res) {
	var username = req.body.name;
	console.log(username);
	var nameMatch = [];
	var ajax = req.body.ajax;

	for (var i = 0; i < parsedData.length; i++) {
		
		username = username.toUpperCase();
		if (parsedData[i]['firstname'].toUpperCase().indexOf(username) > -1 || parsedData[i]['lastname'].toUpperCase().indexOf(username) > -1) {
			nameMatch.push(parsedData[i]['firstname'] + " " + parsedData[i]['lastname']);
		}
	}

	if (nameMatch.length < 1) {
		nameMatch.push("No Matches Found!");
	}

	if (!ajax) {
		res.render('users', {
			nameMatches: nameMatch
		});
	}
	else {
		res.send(nameMatch);
	}
});

app.get('/newUser', function(req, res) {
	res.render('newUser');
	fs.readFile('./users.json', function(err, data){
		if (err) {
			throw err;
			console.log(err);
		}

		parsedData = JSON.parse(data);
	})
})

app.post('/newUser', function(req, res) {
	var firstName = req.body.firstname;
	var lastName = req.body.lastname;
	var email = req.body.email;

	var newguy = {
		"firstname": firstName,
		"lastname": lastName,
		"email": email
	}

	parsedData.push(newguy);

	fs.writeFile('./users.json', JSON.stringify(parsedData), function(err) {
		if (err) {
			throw err;
			console.log(err);
		}
		console.log('New User Added!');
	})
	res.render('index', {
		users: parsedData
	})
})


var server = app.listen(3000, function() {
  console.log('Example app listening on port: ' + server.address().port);
});











