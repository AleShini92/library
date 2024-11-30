const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './',
  },
  mode: 'development', // Impostalo su 'production' per la produzione
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === 'development' 
            ? 'style-loader' 
            : MiniCssExtractPlugin.loader, 
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV === 'development' 
            ? 'style-loader' 
            : MiniCssExtractPlugin.loader, 
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', // Il template HTML
      inject: true, // Inietta automaticamente JS e CSS
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css', // Nome del file CSS estratto
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  optimization: {
    minimize: false, // Disabilita la minificazione
    splitChunks: false, // Disabilita lo split dei chunk
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true, // Abilita l'Hot Module Replacement
  },
};
