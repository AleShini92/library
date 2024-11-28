const path = require('path');

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
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      // Aggiungi eventualmente una regola per i file .css se necessario
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/static/',
  },
};
