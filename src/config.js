'use strict';


var config = require('./config.json');


function getValue(name) {
    if (name in config) {
        return config[name];
    }
    console.error('Need `' + name + '` in config.json');
    process.exit(1);
}


module.exports = {
    PORT: getValue('port'),
    AUTH_TOKEN: getValue('auth_token')
};
