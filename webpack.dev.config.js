const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval',

  entry: [
    // 'webpack-dev-server/client?http://localhost:8080',
    // 'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './frontend/js/index.jsx'
  ],

  output: {
    path:         path.join(__dirname, 'public', 'assets'),
    publicPath:   '/assets/',
    filename:     'index.js'
  },

  resolve: {
    moduleDirectories:  ['node_modules'],
    extensions:         ['', '.js', '.jsx', '.css', '.scss']
  },

  module: {
    preLoaders: [
      {
        test:     /\.jsx?$/,
        loaders:  ['eslint-loader'],
        include:  [
          path.resolve(__dirname, 'frontend', 'js'),
        ],
      }
    ],

    loaders: [
      {
        test:     /\.jsx?$/,
        loader:   'babel',
        exclude:  /node_modules/,
      },
      {
        test:     /\.scss$/,
        loaders:  ['style-loader', 'css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
      },
      {
        test:     /\.css$/,
        loaders:  ['style-loader', 'css-loader']
      },
      {
        test:     /\.(png|jpg|svg|ttf|otf|eot|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader:   'file?name=[name].[ext]?[hash]' // hash is important for hot reloading
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]/*,
  /*devServer: {
    host: 'localhost',  // default
    port: 8080,  // default
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api/*': {
          target: 'http://localhost:3000/',
          secure: false
      }
    }
  }*/

};
