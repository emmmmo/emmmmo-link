const webpackFn = require('@my/weapp-webpack')
const path = require('path')
module.exports = webpackFn({
  miniprogramPath: path.resolve(__dirname, '../client/miniprogram'),
  distPath: path.resolve(__dirname, '../dist'),
})
