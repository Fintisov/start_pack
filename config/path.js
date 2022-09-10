const pathSrc = "./_src";
const pathDist = "./dist"

module.exports = {
    root: pathDist,

    html: {
        src: [`${pathSrc}/pages/*.html`,
            `!${pathSrc}/pages/_head.html`,
            `!${pathSrc}/pages/_script.html`
        ],
        watch: `${pathSrc}/pages/**/*.html`,
        dist: `${pathDist}/pages`
    },

    server: {
        baseDir: [`${pathDist}/pages`, pathDist],
    },

    style: {
        src: `${pathSrc}/styles/style.{scss,sass}`,
        watch: `${pathSrc}/styles/**/*.{sass,scss}`,
        dist: `${pathDist}/styles`,
    }
}