var express = require('express'),
    config = require('../config');

module.exports = express.static(config.staticPath);