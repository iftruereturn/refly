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
  promiseFlyer.then((flyer) => {
    res.status(200).end(flyer);
  }).catch((err) => {
    res.status(404).end();
  });
}

function getAllFlyers(req, res) {
  const id = req.params.id;

  const promiseAllFlyers = Flyer.find({}).exec();
  promiseAllFlyers.then((allFlyers) => {
    res.status(200).end(allFlyers);
  }).catch((err) => {
    res.status(404).end();
  });
}

function postFlyer(req, res) {
  // const flyer = req.body;

/*
  var newFlyer = new Flyer();

  if (templatesList[req.params.template]) {
    for (var i = 0; i < templatesList[req.params.template].stack.length; i++) {
      newFlyer.stack.push(new (widgetTypes[templatesList[req.params.template].stack[i]])(templatesList[req.params.template].fields[i]));
    }

    newFlyer.pageColor = templatesList[req.params.template].pageColor;
    newFlyer.pageBackground = templatesList[req.params.template].pageBackground;
    newFlyer.pageFont = templatesList[req.params.template].pageFont;
    newFlyer.pageTheme = templatesList[req.params.template].pageTheme;

    newFlyer.save(function(err, flyer) {
      if (err) return res.end(err);

       console.log('flyer ' + req.params.template + ' created with _id: ' + flyer.id);
       res.end('flyer ' + req.params.template + ' created with _id: ' + flyer.id);
    })


  } else {
    newFlyer.stack = [
      new Header()
    ];

    newFlyer.save(function(err, flyer) {
      if (err) return res.end(err);

        console.log('default flyer created with _id: ' + flyer.id);

        // res.end('' + flyer.id);
        res.json(flyer);
    })

  }
*/
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
