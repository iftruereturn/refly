const apiRouter = require('express').Router();

const Flyer = require('../models/flyer.js');

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
  const id = req.params.id;

  const promiseFlyer = Flyer.findById(id).exec();

  promiseFlyer.then(flyer => {
    console.log(flyer);

    res.status(200).json(flyer);
  }).catch(err => {
    console.log(err);

    res.status(404).end();
  });
}

function getAllFlyers(req, res) {
  const promiseAllFlyers = Flyer.find().exec();

  promiseAllFlyers.then(allFlyers => {
    res.status(200).json(allFlyers);
  }).catch(err => {
    console.log(err);

    res.status(404).end();
  });
}

function postFlyer(req, res) {
  const newFlyer = new Flyer();

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
  const id = req.params.id;
  const updatedProps = req.body;

  const updatingFlyerPromise = Flyer.findById(id).exec();

  updatingFlyerPromise.then(flyer => {

    for (let prop in updatedProps) {
      if (prop === 'stack') {

        // ? Do I need to remove multiple sub documents correct way ?
        flyer.stack = [];

        for (let widget in updatedProps[prop]) {

          // 1. Get specific constructor by 'type' - (widgetTypes)
          // 2. Call it with widget parameters - (updatedProps[prop][widget]) + flyerId
          // 3. And then push new widget to flyer.stack

          flyer.stack.push(
            new (widgetTypes[(updatedProps[prop][widget]['type'])])(
                Object.assign({ flyerId: flyer.id }, updatedProps[prop][widget])
              )
          );
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
  const id = req.params.id;

  const promiseFlyer = Flyer.findByIdAndRemove(id).exec();
  promiseFlyer.then(() => {
    res.status(200).end();
  }).catch(err => {
    console.log(err);

    res.status(404).end();
  });
}

apiRouter.get('/flyers/:id', getFlyer);
apiRouter.get('/flyers', getAllFlyers);
apiRouter.post('/flyers', postFlyer);
apiRouter.put('/flyers/:id', updateFlyer);
apiRouter.delete('/flyers/:id', deleteFlyer);

module.exports = apiRouter;
