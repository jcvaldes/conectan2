var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    port = process.env.PORT ||  3030;

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'conectan2'
        },
        port: port,
        staticPath: path.join(rootPath, '/public'),
        db: 'mongodb://localhost/conectan2db'
    },

    test: {
        root: rootPath,
        app: {
            name: 'conectan2'
        },
        port: port,
        staticPath: path.join(rootPath, '/public'),
        db: 'mongodb://jcvaldes:JCVjr6059$!@ds031962.mongolab.com:31962/conectan2db'
    },

    production: {
        root: rootPath,
        app: {
            name: 'conectan2'
        },
        port: port,
        staticPath: path.join(rootPath, '/public'),
        db: 'mongodb://jcvaldes:JCVjr6059$!@ds031962.mongolab.com:31962/conectan2db'
    }
};

module.exports = config[env];
