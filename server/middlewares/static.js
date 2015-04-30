var express = require('express'),
    config = require('../../config/config');

module.exports = express.static(config.root + '/public');