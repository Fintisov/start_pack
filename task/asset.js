const {src, dest} = require("gulp");
const path = require("../config/path");

const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const webp = require("gulp-webp");
const imageMin = require("gulp-imagemin");

function asset() {
    return src(`${path.asset.src}.{jpg,png,svg,gif,ico,webp}`)
        .pipe(plumber(notify.onError({
            "title": "Asset",
            "message": "Error: <%= error.message %>"
        })))
        .pipe(newer(path.asset.dist))
        .pipe(webp({quality: 70}))
        .pipe(dest(path.asset.destSrc))
        .pipe(src(`${path.asset.src}.{jpg,png,svg,gif,ico,webp}`))
        .pipe(newer(path.asset.dist))
        .pipe(imageMin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            verbose: true,
            optimizationLevel: 4 // 0 to 7
        }))
        .pipe(dest(path.asset.destSrc))
        .pipe(src(path.asset.src))
        .pipe(dest(path.asset.dist))
}

module.exports = asset;