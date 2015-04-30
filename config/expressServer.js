var env = process.env.NODE_ENV || 'production',
    express = require('express'),
    path = require('path'),
    middlewares = require('./../server/middlewares/admin');

var ExpressServer = function(config) {
    config = config || {};
    this.expressServer = express();

    //middlewares
    for(var middleware in middlewares){
        this.expressServer.use(middlewares[middleware]);
    }

    //Template Engine
    this.expressServer.set('view engine', 'jade');
    this.expressServer.set('views', path.join( __dirname , '../server/views'));


    if(env == 'development'){
        console.log('OK NO HAY CACHE');
        this.expressServer.set('view cache', false);
    }

    this.expressServer.get('*', function (req, res) {
        res.render('index', {
                fruta: 'Manzana',
                color: 'Rojo'}
        );
    });

};

module.exports = ExpressServer;