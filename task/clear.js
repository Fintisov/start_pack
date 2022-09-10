const del = require('del');

function clear () {
    return del("./dist");
}

module.exports = clear;