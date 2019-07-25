const path = require('path')

const fileLoader = (name, context) => ({
  loader: 'file-loader',
  options: {
    publicPath: '',
    context,
    name,
  },
})

module.exports = miniprogramPath => [
  {
    test: /\.(t|j)s$/,
    use: [fileLoader('[path][name].js', miniprogramPath), 'ts-loader'],
  },
  {
    test: /.wxml/,
    use: [
      fileLoader('[path][name].[ext]', miniprogramPath),
      // 'mini-program-webpack-loader',
    ],
  },
  {
    test: /\.wxss$/,
    use: [
      fileLoader('[path][name].[ext]', miniprogramPath),
      // 'mini-program-webpack-loader',
    ],
  },
  {
    test: /\.styl$/,
    use: [fileLoader('[path][name].wxss', miniprogramPath), 'stylus-loader'],
  },
  {
    test: /\.pcss$/,
    use: [fileLoader('[path][name].wxss', miniprogramPath)],
  },
  {
    test: /.wxs$/,
    use: [fileLoader('[path][name].[ext]', miniprogramPath), 'babel-loader'],
  },
  {
    test: /\.json/,
    type: 'javascript/auto',
    use: [fileLoader('[path][name].[ext]', miniprogramPath)],
  },
  {
    test: /\.(png|jpg|gif)$/,
    include: /src/,
    use: fileLoader('[path][name].[ext]', miniprogramPath),
  },
]
