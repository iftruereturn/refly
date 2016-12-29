// Separate routes to different files
const apiRouter = require('./api.js');

module.exports = (app) => {
  app.use('/api/v1.0', apiRouter);
  app.use('/api/v1', apiRouter);
  app.use('/api', apiRouter);
};
