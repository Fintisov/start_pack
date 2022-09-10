const {src, dest} = require("gulp");
const path = require("../config/path");


const plumber = require('gulp-plumber');
const fileInclude = require('gulp-file-include');
const webpHtml = require('gulp-webp-html');
const notify = require('gulp-notify');



function html() {
    return src(path.html.src)
        .pipe(plumber(notify.onError({
            "title": "HTML",
            "message": "Error: <%= error.message %>"
        })))
        .pipe(fileInclude())
        .pipe(webpHtml())
        .pipe(dest(path.html.dist))
}

module.exports = html;