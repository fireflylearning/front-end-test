const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname + '/public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './public',
    port: 8081,
    open: true,
    hot: true,
  },
};
