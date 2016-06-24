var webpack = require('webpack');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
    context: __dirname + '/src/',
    entry: './index.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js',
        library: 'my-app',
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              loader: 'babel-loader'
            }
        ]
    },
    externals: {
        react: {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        }
    },

    plugins: [
        new UglifyJsPlugin()
    ]
};
