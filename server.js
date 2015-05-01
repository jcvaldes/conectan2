'use strict'

var http = require('http'),
    config = require('./config/config'),
    mongoose = require('mongoose'),
    expressServer = require('./config/expressServer')

var app = new expressServer();

var server = http.createServer(app.expressServer);

//Conecto mongo
mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log(config.db + ' connected...');
});


server.listen(config.port);
console.log('Servidor corriendo en http://localhost:' + config.port + '\n Oprime CTRL + C para apagar el servidor');