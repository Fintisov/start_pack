const {watch, series, parallel} = require("gulp");
const browserSync = require('browser-sync').create();

// tasks
const html = require("./task/html")
const clear = require("./task/clear")


function server() {
    browserSync.init({
        server: {
            baseDir: ["./dist/pages", './dist'],
            directory: true,
        },
        port: 3000,
        notify: false
    });
}

function watcher() {
    watch(['_src/pages/**/*.html'], html).on("all", browserSync.reload);
}


exports.html = html;
exports.clear = clear;
exports.watcher = watcher;
exports.server = server;

exports.build = series(
    clear,
    html,
    parallel(watcher, server)
);

