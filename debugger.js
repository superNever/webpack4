/**
 * Created by wanghongxiang on 2018/11/19.
 */
const webpack = require('webpack')
const config = require('./webpack.config.js')
webpack(config, function (err, stats) {
    if (err) throw err
    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')
})