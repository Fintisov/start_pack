const {watch, series, parallel} = require("gulp");

//конфигурация
const path = require("./config/path");

//плагины
const browserSync = require('browser-sync').create();

// tasks
const html = require("./task/html");
const clear = require("./task/clear");
const style = require("./task/style");
const script = require("./task/script");
const image = require("./task/image");

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
    watch(path.script.watch, script).on("all", browserSync.reload);
    watch(path.image.watch, image).on("all", browserSync.reload);
}

// задачи
exports.html = html;
exports.style = style;
exports.script = script;
exports.image = image;
exports.clear = clear;
exports.watcher = watcher;
exports.server = server;

exports.build = series(
    clear,
    parallel(html, style, script, image),
    parallel(watcher, server),
);

