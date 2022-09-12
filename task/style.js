const {src, dest} = require("gulp");
const path = require("../config/path");

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sass = require('gulp-sass')(require('sass'));
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const webpCss = require('gulp-webp-css');
const groupMedia = require('gulp-group-css-media-queries');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');

function style() {
    return src(path.style.src, {sourcemaps: true})
        .pipe(plumber(notify.onError({
            "title": "SCSS",
            "message": "Error: <%= error.message %>"
        })))
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(shorthand())
        .pipe(webpCss())
        .pipe(groupMedia())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true,
            cascade: true,
        }))
        .pipe(size({title: "style.css"}))
        .pipe(dest('_src/styles'))
        .pipe(dest(path.style.dist))
        .pipe(cleanCss())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(size({title: "style.min.css"}))
        .pipe(dest('_src/styles'))
        .pipe(dest(path.style.dist, {sourcemaps: true}))
}

module.exports = style;