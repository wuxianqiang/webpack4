# webpack4

1. html-webpack-plugin 自动产出HTML文件，并引入产出的资源
```js
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