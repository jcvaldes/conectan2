var env = process.env.NODE_ENV || 'production',
    morgan = require('morgan');

if ('production' === env) {
    module.exports = morgan('dev');
}

if ('development' === env || 'test' === env) {
    module.exports = morgan('dev');
}
