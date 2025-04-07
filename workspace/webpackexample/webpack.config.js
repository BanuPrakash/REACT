const webpack = require('webpack');  // installed module
const path = require('path');  // builtin module
const config = {
    entry : './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module :{
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  targets: "defaults",
                  sourceType: "module",
                  presets: [
                    ['@babel/preset-env']
                  ]
                }
              }
            }
          ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    }
};

module.exports = config;