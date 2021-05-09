'use strict'

const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || '网上报名系统' // page title
const port = process.env.port || process.env.npm_config_port || 8585 // dev port
module.exports = {
  lintOnSave: false,
  devServer: {
    port: port,
    open: true
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },

}
