var config = require('../config');
    nib = require('nib'),
    stylus = require('stylus');

var compile = function compile(str, path){
    return stylus(str)
            .set('compress', true)
            .use(nib());
}

module.exports = stylus.middleware({

    src: config.staticPath,
    dest: config.staticPath,
    compile: compile
});