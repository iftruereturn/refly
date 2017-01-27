// Separate routes to different files
const apiRouter = require('./api.js');

const authCheckMiddleware = require('../middlewares/auth-check.js');
const authRouter = require('./auth.js');

module.exports = (app) => {
  app.use('/api/auth', authRouter);

  app.use('/api', authCheckMiddleware);
  app.use('/api', apiRouter);
};
