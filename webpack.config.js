var webpack = require('webpack');
module.exports = {
  entry: './app/src/main.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {

    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './build',
    inline: true,
    hot: true
  }
};
