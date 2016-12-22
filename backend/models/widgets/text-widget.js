const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TextWidgetSchema = new Schema({
  type: { type: String, default: 'TextWidget' },
  title: String,
  text: String,
  flyerId: Schema.ObjectId
});

module.exports = mongoose.model('TextWidget', TextWidgetSchema);
