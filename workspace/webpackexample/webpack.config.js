const webpack = require('webpack');  // installed module
const path = require('path');  // builtin module
const config = {
    module: 'esm',
    entry : './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module :{
        rules: [
            {
                test : /\.js$/,
                use: {
                   loader: 'babel-loader'
                }
            },
            {
                test : /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    }
};

module.exports = config;