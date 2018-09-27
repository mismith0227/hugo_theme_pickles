import minimist from 'minimist'

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
  css: {
    src: `${config.dirs.src}/css/style.css`,
    dest: `${config.dirs.dest}/css`,
    processors: [
      require('postcss-import'),
      require('postcss-custom-properties'),
      require('postcss-custom-media'),
      require('postcss-apply'),
      require('postcss-nesting'),
      require('postcss-flexbugs-fixes'),
      require('autoprefixer'),
      require('postcss-browser-reporter')({
        selector: 'body:before'
      }),
      require('postcss-reporter')({
        clearMessages: true
      })
    ],
    minifyLib: require('csswring')
  },
  webpack: {
    src: `${config.dirs.src}/js/app.js`,
    dest: `${config.dirs.dest}/js`,
    filename: 'bundle.js'
  },
  watch: {
    css: [`${config.dirs.src}/css/**/*.css`],
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
  clean: [
    config.dirs.dest
  ]
}

config.tasks = tasks
module.exports = config
