let webpack = require('webpack')
let path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.[contenthash:8].js',
    },
    target: ["web", "es5"],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
            }
        ]
    },
     plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
     })],
}