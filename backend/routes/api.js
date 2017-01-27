const flyersApiRightCheckMiddleware = require('../middlewares/flyers-api-rights-check.js');
const apiRouter = require('express').Router();

const Flyer = require('../models/flyer.js');

const User = require('../models/user.js');

const HeaderWidget = require('../models/widgets/header-widget.js');
const TextWidget = require('../models/widgets/text-widget.js');
const ImageWidget = require('../models/widgets/image-widget.js');
const VideoWidget = require('../models/widgets/video-widget.js');


const widgetTypes = {
  "HeaderWidget": HeaderWidget,
  "TextWidget": TextWidget,
  "ImageWidget": ImageWidget,
  "VideoWidget": VideoWidget
};


function getFlyer(req, res) {
  const userId = req.params.userId;
  const flyerId = req.params.flyerId;

  const promiseFlyer = Flyer.findById(flyerId).exec();

  promiseFlyer.then(flyer => {
    console.log(flyer);

    res.status(200).json(flyer);
  }).catch(err => {
    console.log(err);

    res.status(404).end();
  });
}

function getAllFlyers(req, res) {
  const userId = req.params.userId;

  const promiseAllFlyers = Flyer.find().exec();

  promiseAllFlyers.then(allFlyers => {
    res.status(200).json(allFlyers);
  }).catch(err => {
    console.log(err);

    res.status(404).end();
  });
}

function postFlyer(req, res) {
  const userId = req.params.userId;

  const newFlyer = new Flyer({ owner: req.user._id });

  const newFlyerPromise = newFlyer.save();

  newFlyerPromise.then(flyer => {
    flyer.stack.push(new HeaderWidget({
      flyerId: flyer.id,
      title: 'Sample title',
      text: 'Sample text'
    }));

    return flyer.save();
  }).then(flyer => {
    console.log('flyer created with _id: ' + flyer.id);

    res.location('/flyers/' + flyer.id)
    res.status(201).send('flyer created with _id: ' + flyer.id);
  }).catch(err => {
    console.log(err);

    res.status(500).end();
  });
}

function updateFlyer(req, res) {
  const userId = req.params.userId;
  const flyerId = req.params.flyerId;

  const updatedProps = req.body;

  const updatingFlyerPromise = Flyer.findById(flyerId).exec();

  updatingFlyerPromise.then(flyer => {

    for (let prop in updatedProps) {
      if (prop === 'stack') {

        // ? Do I need to remove multiple sub documents correct way ?
        flyer.stack = [];

        for (let widget in updatedProps[prop]) {

          // 1. Get specific constructor by 'type' - (widgetTypes)
          let WidgetConstructor = widgetTypes[(updatedProps[prop][widget]['type'])];

          // 2. Call it with widget parameters - (updatedProps[prop][widget]) + flyerId
          let newWidget = new WidgetConstructor(Object.assign({ flyerId: flyer.id }, updatedProps[prop][widget]));

          // 3. And then push new widget to flyer.stack
          flyer.stack.push(newWidget);
        }
      } else {
        flyer[prop] = updatedProps[prop];
      }
    }

    return flyer.save();
  }).then(flyer => {
    res.status(200).end();
  }).catch(err => {
    console.log(err);

    res.status(404).end();
  });

}

function deleteFlyer(req, res) {
  const userId = req.params.userId;
  const flyerId = req.params.flyerId;

  const promiseFlyer = Flyer.findByIdAndRemove(flyerId).exec();
  promiseFlyer.then(() => {
    res.status(200).end();
  }).catch(err => {
    console.log(err);

    res.status(404).end();
  });
}


function getUser(req, res) {
  const userId = req.params.userId;

  let response = {};

  const promiseUser = User.findById(userId).exec();
  promiseUser.then(user => {
    response.user = user;

    return Flyer.find({ owner: userId }).select('_id').exec();
  }).then(flyerIds => {
    response.flyerIds = flyerIds;

    res.status(200).json(response);
  }).catch(err => {
    console.log(err);

    res.status(404).end();
  });
}


apiRouter.get('/users/:userId', getUser);

apiRouter.get('/users/:userId/flyers/:flyerId', getFlyer);
apiRouter.get('/users/:userId/flyers', getAllFlyers);

apiRouter.post('/users/:userId/flyers', flyersApiRightCheckMiddleware, postFlyer);
apiRouter.put('/users/:userId/flyers/:flyerId', flyersApiRightCheckMiddleware, updateFlyer);
apiRouter.delete('/users/:userId/flyers/:flyerId', flyersApiRightCheckMiddleware, deleteFlyer);


module.exports = apiRouter;
