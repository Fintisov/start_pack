const {src, dest} = require("gulp");
const path = require("../config/path");

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

function script() {
    return src(path.script.src, {sourcemaps: true})
        .pipe(plumber(notify.onError({
            "title": "JS",
            "message": "Error: <%= error.message %>"
        })))
        .pipe(babel())
        .pipe(webpack({
            mode: "development",
            entry: "./_src/scripts/script.js",
            output: {
                filename: 'script.js'
            },
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                            }
                        }
                    }
                ]
            }
        }))
        .pipe(dest(path.script.dist, {sourcemaps: true}))
}

module.exports = script;