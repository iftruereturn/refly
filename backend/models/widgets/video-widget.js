const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoWidgetSchema = new Schema({
  title: String,
  videoUrl: String,
  flyerId: String
});

module.exports = mongoose.model('VideoWidget', VideoWidgetSchema);
