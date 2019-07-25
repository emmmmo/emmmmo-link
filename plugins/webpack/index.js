/** webpack plugin */
module.exports = (options, api) => {
  const config = require('./webpack.config')
  return config(options)
}
