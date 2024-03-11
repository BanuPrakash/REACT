const webpack = require('webpack'); // installed --> node_modules
const path = require('path'); // built in module of NodeJS

module.exports = function (__env, argv) {
    return {
        target: ["web", "es5"],
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.js"
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
        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js"]
        }
    }
}

// import {add, sub} from './lib'; --> look for lib.tsx --> lib.ts --> lib.jsx --> lib.js
