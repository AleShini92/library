const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    main: './src/index.js',
  },
  
  mode: 'development',
  
  module: {
    rules: [{
      exclude: /node_modules/,
      use:
      [{
        loader: 'babel-loader'
      }],
 test: /\.jsx?$/
    }, {
      use:
      [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }],
      test: /\.s[ac]ss$/i
    }]
  },
  
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: '[name].bundle.js',
  },
};
