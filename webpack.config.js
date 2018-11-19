/**
 * Created by wanghongxiang on 2018/11/18.
 */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const os = require('os');
const rootPath = path.resolve(__dirname, '.');     // 项目根目录
const srcPath = path.join(rootPath, 'src');             // 开发源码目录
// const env = process.env.NODE_ENV.trim();            // 当前环境

const commonPath = {
    rootPath: rootPath,
    srcPath: srcPath,
    public: path.join(rootPath, 'public'),              // build 后输出目录
    indexHTML: path.join(srcPath, 'index.html'),        // 入口模板页面
    staticDir: path.join(rootPath, 'static')        // 不需编译的静态资源
};

module.exports = {
    entry: './src/index.js',
    // mode: 'development',
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HashedModuleIdsPlugin(), // 保持vendor文件不变
        // 主要用于大型生产导出
        new ParallelUglifyPlugin({
            workerCount: os.cpus().length - 1,//开启几个子进程去并发的执行压缩。默认是当前运行电脑的 CPU 核数减去1
            uglifyJS: {
                output: {
                    beautify: false, //不需要格式化
                    comments: true, //不保留注释
                },
                compress: {
                    warnings: false, // 在UglifyJs删除没有用到的代码时不输出警告
                    drop_console: true, // 删除所有的 `console` 语句，可以兼容ie浏览器
                    collapse_vars: true, // 内嵌定义了但是只用到一次的变量
                    reduce_vars: true, // 提取出出现多次但是没有定义成变量去引用的静态值
                }
            }
        })
    ],
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        library: "MyLibrary",    // 全局命名空间
        libraryTarget: "umd"     // 模式
    },
    resolveLoader: {
        modules: [path.join(__dirname, './loaders'), 'node_modules']
    },
    module: {
    }
}