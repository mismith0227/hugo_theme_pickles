import config from './config'
import path from 'path'
import webpack from 'webpack'

export default {
  mode: config.envProduction ? 'production' : 'development',
  devtool: '',
  entry: [
    path.join(__dirname, `${config.tasks.webpack.src}`)
  ],
  output: {
    path: path.join(__dirname, config.tasks.webpack.dest),
    filename: config.tasks.webpack.filename
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'standard-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'window.jQuery': 'jquery',
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}
