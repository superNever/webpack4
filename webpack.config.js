/**
 * Created by wanghongxiang on 2018/11/18.
 */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HappyPack = require('happypack')
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
    mode: 'development',
    // mode: 'production',
    plugins: [
        new webpack.HashedModuleIdsPlugin(), // 保持vendor文件不变
        // new HtmlWebPackPlugin({
        //     template: './src/index.html'
        // }),s
        // new HappyPack({
        //     id: 'babel',
        //     loaders: ['babel-loader']// 和rules里的配置相同
        // }),
        // new HappyPack({
        //     id: 'css',
        //     loaders: ['style-loader', 'css-loader']// 和rules里的配置相同
        // }),
        // new HappyPack({
        //     id: 'html',
        //     loaders: ['html-loader']// 和rules里的配置相同
        // })
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                //把对.js文件的处理转交给id为babel的HappyPack实例
                //用唯一的标识符id来代表当前的HappyPack是用来处理一类特定文件
                include: path.resolve('./src'),
                exclude: /node_modules/
            },
            {
                test: /\.html/,
                use: 'html-loader',
                //把对.js文件的处理转交给id为babel的HappyPack实例
                //用唯一的标识符id来代表当前的HappyPack是用来处理一类特定文件
                include: path.resolve('./src'),
                exclude: /node_modules/
            },
            {
                test: /\.js/,
                use: 'babel-loader',
                include: path.resolve('./src'),
                exclude: /node_modules/
            }
        ]
    }
}