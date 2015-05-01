var config = require('../config');
    stylus = require('stylus');

var compile = function compile(src, path){
    return stylus(src).set('filename', path);
}

module.exports = stylus.middleware({

    src: config.staticPath,
    compile: compile
});