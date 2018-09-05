# webpack4

1. html-webpack-plugin 自动产出HTML文件，并引入产出的资源
```js
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
plugins: [
  new HtmlWebpackPlugin({
    minify: {
      removeAttributeQuotes: true
    },
    hash: true,
    template: './src/index.html',
    filename: 'index.html'
  })
]
```
2. webpack-dev-server 配置开发服务器，并自动监听文件改变
```js
// webpack.config.js
devServer: {
  contentBase: path.resolve(__dirname, 'dist'),
  host: 'localhost',
  compress: true,
  port: 8080
}

// package.json
"scripts": {
  "dev": "webpack-dev-server --open --mode development"
}
```
3. loader 的三种写法，loader 是从右往左解析
```js
// loader
module: {
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
  ]
}
// use
module: {
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
  ]
}
// loader + use
module: {
  rules: [
    {
      test: /\.css$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
      use: [
        {
          loader: 'style-loader',
          options: {
            insertAt: 'top'
          }
        },
        'css-loader'
      ]
    }
  ]
}
```