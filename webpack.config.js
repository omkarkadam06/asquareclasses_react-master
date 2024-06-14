const { resolve } = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new ImageminPlugin({
      plugins: [
        imageminMozjpeg({
          quality: 75,
          progressive: true
        }),
        imageminPngquant({
          quality: [0.6, 0.8]
        }),
        imageminGifsicle({
          optimizationLevel: 3
        })
      ]
    })
  ]
};
