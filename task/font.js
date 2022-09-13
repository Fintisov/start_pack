const {src, dest} = require("gulp");
const path = require("../config/path");

const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

function font() {
    return src(path.font.src)
        .pipe(plumber(notify.onError({
            "title": "Font",
            "message": "Error: <%= error.message %>"
        })))
        .pipe(dest(path.font.dist))
}

module.exports = font;