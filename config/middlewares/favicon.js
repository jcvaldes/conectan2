var favicon = require('serve-favicon'),
    path = require('path'),
    config = require('../config');

module.exports = favicon(path.join(config.staticPath, '/img/favicon.ico'));