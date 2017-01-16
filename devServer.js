// WEBPACK DEV SERVER
// USE IT IF YOU HAVE TROUBLES WITH WEBPACK-HOT-MIDDLEWARE
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.config');

const port = 8080;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  contentBase: './public',
  historyApiFallback: true,
  proxy: {
    '/api/*': {
        target: 'http://localhost:3000/',
        secure: false
    },
    '/auth/*': {
        target: 'http://localhost:3000/',
        secure: false
    }
  },
}).listen(port, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:' + port + '/');
});
