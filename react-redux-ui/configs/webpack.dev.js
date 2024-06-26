const webpack = require('webpack')
const common = require('./webpack.common.js')

module.exports = function (configDirs) {
    const devConfig = Object.assign({}, common)
    devConfig.mode = 'development'
    devConfig.devServer = {
        port: 8888,
        historyApiFallback: true,
        watchFiles: 'src/*',
    }
    ;(devConfig.devtool = 'source-map'), console.log('\x1b[36m%s\x1b[0m', 'Building for development...')

    return devConfig
}
