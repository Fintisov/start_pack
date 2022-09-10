const {src, dest} = require("gulp");

const plumber = require('gulp-plumber');
const fileInclude = require('gulp-file-include');
const webpHtml = require('gulp-webp-html');
const notify = require('gulp-notify');

function html() {
    return src([
        './_src/pages/*.html',
        '!./_src/pages/_head.html',
        '!./_src/pages/_script.html',
    ])
        .pipe(plumber(notify.onError({
            "title": "HTML",
            "message": "Error: <%= error.message %>"
        })))
        .pipe(fileInclude())
        .pipe(webpHtml())
        .pipe(dest('./dist/pages'))
}

module.exports = html;