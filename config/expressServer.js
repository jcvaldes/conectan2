var env = process.env.NODE_ENV || 'production',
    express = require('express'),
    multer = require('multer'),
    path = require('path'),
    bodyParser = require('body-parser'),
    middlewares = require('./middlewares/admin'),
    mongoose = require('mongoose');

var ExpressServer = function(config) {
    config = config || {};
    this.expressServer = express();

    //middlewares
    this.expressServer.use(bodyParser.json()); // for parsing application/json
    this.expressServer.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    this.expressServer.use(multer({ dest: './uploads/' }));

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

    this.expressServer.get('/partials/:partialPath', function (req, res) {
        res.render('partials/' + req.params.partialPath);
    });

    var messageSchema = mongoose.Schema({message: String});
    var Message = mongoose.model('Message', messageSchema);
    var mongoMessage;
    Message.findOne().exec(function(err, messageDoc){
        mongoMessage = messageDoc.message;
    });


    this.expressServer.get('*', function (req, res) {;
        res.render('index', {
                mongoMessage: mongoMessage
            }
        );
    });

};

module.exports = ExpressServer;