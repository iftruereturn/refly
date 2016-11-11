const express = require('express');
const path = require('path');

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../', 'public')));

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.dev.config');
  const compiler = webpack(webpackConfig);

  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));

  app.use(require("webpack-hot-middleware")(compiler));
}

// Set routes
require('./routes/index')(app);

app.get("**", function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listens at port: ${port}`);
});
