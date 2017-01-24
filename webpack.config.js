const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    // resolves import blah from 'blah' - so you dont have to say .js
    extensions: ['js', 'jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          // inject styles into bundle.js
          'style-loader',
          {
            // lets webpack read css
            loader: 'css-loader',
            // prevents webpack injecting images into bundle.js
            options: {
              url: false,
            },
          },
        ],
      },
    ],
  },
};

//
// {
//   test: /\.scss$/,
//   loaders: ['style', 'css', 'sass'],
// },
