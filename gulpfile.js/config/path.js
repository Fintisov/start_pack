const pathSrc = "./_src";
const pathDist = "./dist"

const isProd = process.argv.includes("--production");
const isDev = !isProd;


const path = {
    root: pathDist,
    isProd: isProd,
    isDev: isDev,

    html: {
        watch: `${pathSrc}/pages/**/*.html`,
        src: isDev ? [`${pathSrc}/pages/*.html`] : [`${pathSrc}/pages/*.html`, `!${pathSrc}/pages/_style-guide.html`],
        dist: `${pathDist}`
    },

    style: {
        src: [`${pathSrc}/styles/style.{scss,sass}`,
            `${pathSrc}/styles/vendors.{scss,sass}`],
        watch: `${pathSrc}/styles/**/*.{sass,scss}`,
        destSrc: `${pathSrc}/styles`,
        dist: `${pathDist}/styles`,
    },

    script: {
        src: `${pathSrc}/scripts/script.js`,
        watch: `${pathSrc}/scripts/**/*.js`,
        dist: `${pathDist}/scripts`,
    },

    image: {
        src: `${pathSrc}/images/**/*.{jpg,jpeg,png,gif,ico,webp}`,
        watch: `${pathSrc}/images/**/*.{jpg,jpeg,png,gif,ico,webp}`,
        destSrc: `${pathSrc}/images`,
        dist: `${pathDist}/images`,
    },

    sprite: {
        src: `${pathSrc}/images/**/*.svg`,
        watch: `${pathSrc}/images/**/*.svg`,
        dist: `${pathDist}/images`,
    },

    asset: {
        src: `${pathSrc}/assets/**/*`,
        watch: `${pathSrc}/assets/**/*`,
        dist: `${pathDist}/assets`,
    },

    vendorScript: {
        src: `${pathSrc}/scripts/vendors/**/*.js`,
        watch: `${pathSrc}/scripts/vendors/**/*.js`,
        dist: `${pathDist}/scripts/vendors`,
    },

    font: {
        src: `${pathSrc}/fonts/**/*`,
        watch: `${pathSrc}/fonts/**/*`,
        dist: `${pathDist}/fonts`,
    },

    webpack: {
        entry: `${pathSrc}/scripts/script.js`
    },

    server: {
        baseDir: `./dist`,
    },

}

module.exports = path;