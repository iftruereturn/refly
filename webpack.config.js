const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: (process.env.NODE_ENV === 'development' ?
    'cheap-module-eval-inline-source-map' : 'cheap-module-source-map'),

  context: path.join(__dirname, 'frontend', 'js'),

  entry: {
    index: [
      'webpack-dev-server/client', // --inline
      'webpack/hot/dev-server',    // --hot
      './index'
    ],
  },

  output: {
    path:       path.join(__dirname, 'public/assets'),
    publicPath: '/assets/',
    filename:   '[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss']
  },

  resolveLoader: {
    moduleDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js']
  },

  module: {

    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: [
          path.join(__dirname, 'frontend'),
        ],
      }
    ],

    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader'],
        include: path.join(__dirname, 'frontend'),
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.scss$/,
        // loader: 'style!css!postcss!resolve-url!sass?sourceMap'
        loader: ExtractTextPlugin.extract(
          'style',
          'css!postcss!resolve-url!sass?sourceMap'
        )
      },
      {
        test: /\.(png|jpg|svg|ttf|otf|eot|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        // hash is important for hot reloading
        loader: 'file?name=[name].[ext]?[hash]'
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('[name].css', {
      allChunks: true,
      disable: process.env.NODE_ENV === 'development'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  postcss: [
    autoprefixer({
      browsers: [
        (process.env.NODE_ENV === 'development' ?
          'last 2 versions' : 'last 20 versions')
      ]
    })
  ]
};

if (process.env.NODE_ENV === 'development') {

  module.exports.devServer = {
    host: 'localhost',  // default
    port: 8080,  // default
    hot: true
    /*proxy: [
      {
        path: '**',
        target: 'http://localhost:3000'
      }
    ]*/
  };
}

if (process.env.NODE_ENV === 'production') {

  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}
