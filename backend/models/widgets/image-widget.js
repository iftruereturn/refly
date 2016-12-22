const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageWidgetSchema = new Schema({
  type: { type: String, default: 'ImageWidget' },
  title: String,
  image: String,
  flyerId: Schema.ObjectId
});

module.exports = mongoose.model('ImageWidget', ImageWidgetSchema);
