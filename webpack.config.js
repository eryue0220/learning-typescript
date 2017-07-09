const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '/dist/')
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}