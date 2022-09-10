const {watch, series, parallel} = require("gulp");

//конфигурация
const path = require("./config/path");

//плагины
const browserSync = require('browser-sync').create();

// tasks
const html = require("./task/html");
const clear = require("./task/clear");
const style = require("./task/style");

function server() {
    browserSync.init({
        server: {
            baseDir: path.server.baseDir,
            directory: true,
        },
        port: 3000,
        notify: false
    });
}

function watcher() {
    watch(path.html.watch, html).on("all", browserSync.reload);
    watch(path.style.watch, style).on("all", browserSync.reload);
}

// задачи
exports.html = html;
exports.style = style;
exports.clear = clear;
exports.watcher = watcher;
exports.server = server;

exports.build = series(
    clear,
    parallel(html, style),
    parallel(watcher, server),
);

