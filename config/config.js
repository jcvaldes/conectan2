var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'conectan2'
        },
        port: 3000,
        staticPath: path.join(rootPath, '/public'),
        db: 'mongodb://localhost/conectan2-development'
    },

    test: {
        root: rootPath,
        app: {
            name: 'conectan2'
        },
        port: 3000,
        staticPath: path.join(rootPath, '/public'),
        db: 'mongodb://localhost/conectan2-test'
    },

    production: {
        root: rootPath,
        app: {
            name: 'conectan2'
        },
        port: 3000,
        staticPath: path.join(rootPath, '/public'),
        db: 'mongodb://localhost/conectan2-production'
    }
};

module.exports = config[env];
