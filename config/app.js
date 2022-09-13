const path = require("./path");

const app = {
    html: {
        plumber: {
            "title": "HTML",
            "message": "Error: <%= error.message %>"
        }
    },

    style: {
        sass: {outputStyle: 'expanded'},
    },

    script: {
        plumber: {
            "title": "JS",
            "message": "Error: <%= error.message %>"
        },

        webpack: {
            mode: "production",
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
        }
    },

    image: {
        plumber: {
            "title": "Image",
            "message": "Error: <%= error.message %>"
        },

        webp: {quality: 70},

        imageMin: {
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            verbose: true,
            optimizationLevel: 4 // 0 to 7
        }
    },

    font: {
        plumber: {
            "title": "Font",
            "message": "Error: <%= error.message %>"
        }
    },

    asset: {
        plumber: {
            "title": "Asset",
            "message": "Error: <%= error.message %>"
        },

        webp: {quality: 70},

        imageMin: {
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            verbose: true,
            optimizationLevel: 4 // 0 to 7
        },
    },

    server: {
        browserSync: {
            server: {
                baseDir: path.server.baseDir,
                directory: true,
            },
            port: 3000,
            notify: false
        }
    }
}

module.exports = app;