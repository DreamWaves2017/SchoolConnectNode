var express = require('express');
var repository = require('./repository')
var server = express();

server.listen(8482, function () {
	console.log("NodeJs server started successfully in port : 8482");
});

server.get('/', function(req, res){
	res.send('Hello There !! Hit Students api to see all students in database');
});

server.get('/parents', function (req, res) {
	res.send('You have reached Parents Page');
});

server.get('/students', function (req, res) {
	var callback = function (err, json) {
		if (err) throw err;
		res.send(json);
	};
	repository.allStudents(callback);
});

server.get('/saveStudents', function (req, res){
	var saveCallBack = function(err, json){
			if (err) throw err;
};
		repository.saveStudentToDB('Dinesh', 1, 'ece_a', saveCallBack);
		repository.saveStudentToDB('Sathya', 2, 'eee_b', saveCallBack);
		repository.saveStudentToDB('Rajesh', 3, 'it_c', saveCallBack);
		repository.saveStudentToDB('Yuvi', 4, 'csc_c', saveCallBack);
		repository.saveStudentToDB('Santosh', 5, 'ece_a', saveCallBack);
		res.send('Hurray! Operations Complete');
});
