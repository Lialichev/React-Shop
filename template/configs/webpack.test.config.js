const path = require('path');

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
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "sass-loader"}
        ]
      }
    ]
  }
};
