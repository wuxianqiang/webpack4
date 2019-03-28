const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  entry: resolve('src/index.js'),
  output: {
    filename: 'main_[hash:8].js',
    path: resolve('dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('template/index.html'),
      filename: 'index.html'
    })
  ]
}