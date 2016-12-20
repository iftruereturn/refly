const Flyer = require('../models/flyer.js');

const HeaderWidget = require('../models/widgets/header-widget.js');
const ImageWidget = require('../models/widgets/image-widget.js');
const TextWidget = require('../models/widgets/text-widget.js');
const VideoWidget = require('../models/widgets/video-widget.js');

/*
const widgetTypes = {
  "header": Header,
  "gallery": Gallery,
  "paragraph": Paragraph,
  "image": Image,
  "video": Video,
  "bio": Bio
};
*/

function getFlyer(req, res) {
  const id = req.params.id;

  const promiseFlyer = Flyer.findById(id).exec();
  promiseFlyer.then(flyer => {
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

  newFlyer.stack.push(new HeaderWidget());

  const newFlyerPromise = newFlyer.save();
  newFlyerPromise.then(flyer => {
    console.log('flyer created with _id: ' + flyer.id);
    res.location('/flyers/' + flyer.id)
    res.status(201).send('flyer created with _id: ' + flyer.id);
  }).catch(err => {
    console.log(err);
    res.status(500).end();
  });
}

function updateFlyer(req, res) {

}

function deleteFlyer(req, res) {

}

module.exports = {
  getAllFlyers,
  getFlyer,
  postFlyer,
  updateFlyer,
  deleteFlyer
};
