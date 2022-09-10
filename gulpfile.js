const {src, dest, watch, series, parallel} = require("gulp");

// other
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const browserSync = require('browser-sync').create();

//html
const fileInclude = require('gulp-file-include');
const webpHtml = require('gulp-webp-html');

function html() {
    return src([
        '!_src/pages/_head.html',
        '!_src/pages/_scripts.html',
        '_src/pages/*.html',
    ])
        .pipe(plumber(notify.onError({
            "title": "HTML",
            "message": "Error: <%= error.message %>"
        })))
        .pipe(fileInclude())
        .pipe(webpHtml())
        .pipe(dest('./dist/pages'))
        .pipe(browserSync.stream())
}

function server() {
    browserSync.init({
        server: {
            baseDir: ['./dist'],
            directory: true,
        },
        port: 3000,
        notify: false
    });
}

// Наблюдение
function watcher() {
    watch(['_src/pages/**/*.html'], html);
}

// Задачи
exports.html = html;

exports.watcher = watcher;
exports.server = server;


exports.build = series(
    html,
    parallel(watcher, server)
);

exports.default = parallel();