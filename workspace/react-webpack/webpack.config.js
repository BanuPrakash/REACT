const webpack = require('webpack'); // CommonJS module system
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path'); // built-in module

module.exports = function (__env, argv) {
    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.[contenthash:8].js"
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: "babel-loader"
                },
                {
                    test: /\.tsx?$/,
                    use: "ts-loader"
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js"]
        },
        plugins: [new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html")
        })],
        devServer: {
            port: 3000
        }
    }
}