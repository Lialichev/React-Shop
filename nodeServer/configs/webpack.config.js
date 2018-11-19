const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const package = require('../package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
            },
            {
                test: /\s?.css$/,
                use: [MiniCssExtractPlugin.loader, {loader: "css-loader"}]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: package.name,
            template: './index.html',
            version: package.version
        }),
        new MiniCssExtractPlugin({filename: `styles-${Date.now()}.css`})
    ],

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};