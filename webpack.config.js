/**
 * Created by wanghongxiang on 2018/11/18.
 */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    mode: 'development',
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HashedModuleIdsPlugin(), // 保持vendor文件不变
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: true
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
        rules: [
            {
                test: /\.html$/,
                use: [
                    // {loader: 'html-loader'},
                    {
                        loader: 'no-html-loader',
                        options: {
                            comments: false
                        }
                    }
                ]
            }
        ]
    }
}