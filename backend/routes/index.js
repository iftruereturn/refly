// Separate routes to different files
const authRouter = require('./auth.js');

const authCheckMiddleware = require('../middlewares/auth-check.js');
const apiRouter = require('./api.js');

module.exports = (app) => {
  app.use('/api/auth', authRouter);

  app.use('/api', authCheckMiddleware);
  app.use('/api', apiRouter);
};
