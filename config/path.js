const pathSrc = "./_src";
const pathDist = "./dist"

const path = {
    root: pathDist,

    server: {
        baseDir: [`${pathDist}/pages`, pathDist],
    },

    html: {
        src: [`${pathSrc}/pages/*.html`,
            `!${pathSrc}/pages/_head.html`,
            `!${pathSrc}/pages/_script.html`
        ],
        watch: `${pathSrc}/pages/**/*.html`,
        dist: `${pathDist}/pages`
    },

    style: {
        src: `${pathSrc}/styles/style.{scss,sass}`,
        watch: `${pathSrc}/styles/**/*.{sass,scss}`,
        dist: `${pathDist}/styles`,
    },

    script: {
        src: `${pathSrc}/scripts/script.js`,
        watch: [
            `${pathSrc}/scripts/**/*.js`,
            `!${pathSrc}/scripts/script.min.js`
        ],
        dist: `${pathDist}/scripts`,
    },

    webpack: {
        entry: `${pathSrc}/scripts/script.js`
    }
}

module.exports = path;