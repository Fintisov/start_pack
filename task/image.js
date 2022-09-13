const {src, dest} = require("gulp");
const path = require("../config/path");

const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const webp = require("gulp-webp");
const imageMin = require("gulp-imagemin");

function images() {
    return src(path.image.src)
        .pipe(plumber(notify.onError({
            "title": "Image",
            "message": "Error: <%= error.message %>"
        })))
        .pipe(newer(path.image.dist))
        .pipe(webp({quality: 70}))
        .pipe(dest(path.image.destSrc))
        .pipe(dest(path.image.dist))
        .pipe(src(path.image.src))
        .pipe(newer(path.image.dist))
        .pipe(imageMin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            verbose: true,
            optimizationLevel: 4 // 0 to 7
        }))
        .pipe(dest(path.image.destSrc))
        .pipe(dest(path.image.dist))
}

module.exports = images;