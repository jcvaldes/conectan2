var http = require('http'),
    config = require('./config/config'),
    expressServer = require('./config/expressServer');

var app = new expressServer();

var server = http.createServer(app.expressServer);
server.listen(config.port);
console.log('Servidor corriendo en http://localhost:' + config.port + '\n Oprime CTRL + C para apagar el servidor');