// Separate routes to different files

const spaRouter = require('express').Router();
const apiRouter = require('express').Router();
const path = require('path');

const flyerController = require('../controllers/flyer');

// SPA
/*
spaRouter.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'public', 'index.html'));
});
*/

spaRouter.get("**", function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
});

// API
apiRouter.get('/flyers/:id', flyerController.getFlyer);
apiRouter.get('/flyers', flyerController.getAllFlyers);
apiRouter.post('/flyers', flyerController.postFlyer);
apiRouter.put('/flyers/:id', flyerController.updateFlyer);
apiRouter.delete('/flyers/:id', flyerController.deleteFlyer);

module.exports = (app) => {
  app.use('/api/v1', apiRouter);
  app.use('/', spaRouter);
};
