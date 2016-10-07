'use strict';

module.exports = function(message) {
    if (process.env.NODE_ENV === 'dev') {
        console.log(1)
    }
    console.log(`Welcome ${message}`);

};