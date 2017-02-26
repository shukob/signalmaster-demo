var express = require('express');
var sockets = require('signal-master/sockets');
var config = require('signal-master/config/development.json');
var port = 9000;
var app = express();
var server = app.listen(port);
sockets(server, config); // config is the same that server.js uses
module.exports = app;