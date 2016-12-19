const apiRouter = require('express').Router();

const flyerController = require('../controllers/flyer.js');

apiRouter.get('/flyers/:id', flyerController.getFlyer);
apiRouter.get('/flyers', flyerController.getAllFlyers);
apiRouter.post('/flyers', flyerController.postFlyer);
apiRouter.put('/flyers/:id', flyerController.updateFlyer);
apiRouter.delete('/flyers/:id', flyerController.deleteFlyer);

module.exports = apiRouter;
