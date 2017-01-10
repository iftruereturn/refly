// Separate routes to different files
const apiRouter = require('./api.js');

const authCheckMiddleware = require('../middlewares/auth-check.js');
const authRouter = require('./auth.js');

module.exports = (app) => {
  app.use('/api', authCheckMiddleware);
  app.use('/api/v1.0', apiRouter);
  app.use('/api/v1', apiRouter);
  app.use('/api', apiRouter);

  app.use('/auth', authRouter);
};
