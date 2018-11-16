const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const package = require('../package.json');

module.exports = {
    entry: './app.js',
    context: path.resolve(__dirname, '../src'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../public')
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    plugins: [new HtmlWebpackPlugin({
        title: package.name,
        template: './index.html',
        version: package.version
    })],

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};