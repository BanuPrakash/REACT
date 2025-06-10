let webpack = require('webpack')
let path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname) + './dist',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exlude: /node_modules/
            },
            {
                test: /\.css$/,
            }
        ]
    }
}