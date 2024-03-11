const webpack = require('webpack'); // installed --> node_modules
const path = require('path'); // built in module of NodeJS
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = function (__env, argv) {
    return {
        devtool: "cheap-module-source-map",
        target: ["web", "es5"],
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.[contenthash:8].js"
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        plugins: [new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html")
        }),
        new CleanWebpackPlugin({
            verbose: true
        }),
        new BundleAnalyzerPlugin()],
        devServer: {
            port: 1234,
            open: true
        },
        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js"]
        }
    }
}

// import {add, sub} from './lib'; --> look for lib.tsx --> lib.ts --> lib.jsx --> lib.js
