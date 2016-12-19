const express = require('express');
const path = require('path');

const config = require('./config/config.js');

const app = express();

// db connect
const mongoose = require('mongoose');
const dburl = process.env.PROD_MONGODB || config.mongo.URL;
mongoose.connect(dburl);

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

/*
app.get("**", function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});
*/

app.listen(config.app.PORT, () => {
  console.log(`Server listens at port: ${config.app.PORT}`);
});
