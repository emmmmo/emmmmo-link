const path = require('path')
const fs = require('fs')
const entry = require('webpack-glob-entry')
const rules = require('./webpack.config.base.loaders')

const resolve = file => path.resolve(__dirname, '../', file)
global.context = resolve('../')
// 处理JSON.stringily方法重复引用的问题
var handleCircular = function() {
  var cache = []
  var keyCache = []
  return function(key, value) {
    if (typeof value === 'object' && value !== null) {
      var index = cache.indexOf(value)
      if (index !== -1) {
        return '[Circular ' + keyCache[index] + ']'
      }
      cache.push(value)
      keyCache.push(key || 'root')
    }
    return value
  }
}

var tmp = JSON.stringify
JSON.stringify = function(value, replacer, space) {
  replacer = replacer || handleCircular()
  return tmp(value, replacer, space)
}
// 移除webpack默认输出文件
class RemovePlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('remove', compilation => {
      const pathReg = /^\/\w*\//g
      const pathArray = pathReg.exec(path.resolve(__dirname, ''))
      Object.keys(compilation.assets).forEach(value => {
        if (value.indexOf(pathArray[0]) !== -1) {
          delete compilation.assets[value]
        }
      })
    })
  }
}
const config = ({ miniprogramPath, distPath }) => {
  return {
    context: miniprogramPath,
    entry: entry(filePath => filePath, `${miniprogramPath}/**/*.*`),
    output: {
      path: distPath,
    },
    module: {
      rules: rules(miniprogramPath),
    },
    resolveLoader: {
      modules: [path.resolve(__dirname, 'node_modules')],
    },
    optimization: {
      splitChunks: {
        minChunks: 1000000,
      },
    },
    plugins: [new RemovePlugin()],
  }
}
module.exports = config
