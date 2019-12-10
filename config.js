const minimist = require('minimist')

const envSettings = {
  string: 'env',
  default: {
    env: process.env.NODE_ENV || 'development'
  }
}

const options = minimist(process.argv.slice(2), envSettings)
const production = options.env === 'production'

const config = {
  dirs: {
    src: './src',
    dest: './static'
  },
  envProduction: production
}

const tasks = {
  scss: {
    src: `${config.dirs.src}/scss/style.scss`,
    dest: `${config.dirs.dest}/css`
  },
  webpack: {
    src: `${config.dirs.src}/js/app.js`,
    dest: `${config.dirs.dest}/js`,
    filename: 'bundle.js'
  },
  watch: {
    css: [`${config.dirs.src}/scss/**/*.css`],
    image: [`${config.dirs.src}/img/**/*`],
    webpack: [`${config.dirs.src}/js/**/*.js`]
  },
  images: {
    src: `${config.dirs.src}/images/**/*`,
    dest: `${config.dirs.dest}/images`
  },
  fonts: {
    src: `${config.dirs.src}/fonts/**/*`,
    dest: `${config.dirs.dest}/fonts`
  },
  svg: {
    src: `${config.dirs.src}/svg/*.svg`,
    dest: './svgpack'
  },
  svgRename: {
    src: './svgpack/svgpack-sprite.svg',
    dest: './layouts/partials',
    filename: 'svgpack-sprite.html'
  },
  clean: [config.dirs.dest]
}

config.tasks = tasks
module.exports = config
