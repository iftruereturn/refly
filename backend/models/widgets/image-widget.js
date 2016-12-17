const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageWidgetSchema = new Schema({
  title: String,
  image: String,
  flyerId: String
});

module.exports = mongoose.model('ImageWidget', ImageWidgetSchema);
