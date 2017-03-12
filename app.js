var express = require('express');
var server = express();

server.listen(8482,function () {
    console.log("NodeJs server started successfully");
});

server.get('/', function (req, res) {
    res.send('You have reached Home Page');
});

server.get('/parents', function (req, res) {
    res.send('You have reached Parents Page');
});

server.get('/students', function (req, res) {
    res.send('You have reached Students Page');
});


