var mongoClient = require('mongodb').MongoClient;
var express = require('express');
var server = express();

server.listen(8482, function() {
	console.log("NodeJs server started successfully");
});

server.get('/', function(req, res) {
	mongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
		if (!err) {
			console.log("Mongo database connection successfully");
			res.send('Mongo database connection successfully');
		}
		console.log(err);
	})
});

server.get('/parents', function(req, res) {
	res.send('You have reached Parents Page');
});

server.get('/students', function(req, res) {
	res.send('You have reached Students Page');
});