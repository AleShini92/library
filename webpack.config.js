const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  // Importa il plugin

module.exports = {
  devtool: 'source-map',  // Ottimizzato per produzione
  entry: {
    main: './src/index.js',
  },
  mode: 'production',  // Modalità di produzione per ottimizzare la build
  
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,  // Usa il plugin per estrarre il CSS
          'css-loader',                  // Carica il CSS
          'sass-loader'                  // Compila SCSS in CSS
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,  // Usa il plugin per estrarre il CSS
          'css-loader'
        ]
      }
    ]
  },
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/dist',  // Dove sono serviti gli asset nel browser
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css', // Nome del file CSS estratto
    })
  ]
};
