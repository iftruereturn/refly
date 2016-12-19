const Flyer = require('../models/flyer.js');

const HeaderWidget = require('../models/widgets/header-widget.js');
const ImageWidget = require('../models/widgets/image-widget.js');
const TextWidget = require('../models/widgets/text-widget.js');
const VideoWidget = require('../models/widgets/video-widget.js');

function getFlyer(req, res) {
  const id = req.params.id;

  const promiseFlyer = Flyer.findById(id).exec();
  promiseFlyer.then((flyer) => {
    res.end(flyer);
  });
}

function getAllFlyers(req, res) {
  const id = req.params.id;

  const promiseAllFlyers = Flyer.find({}).exec();
  promiseAllFlyers.then((allFlyers) => {
    res.end(allFlyers);
  });
}

function postFlyer(req, res) {
  // const flyer = req.body;


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
