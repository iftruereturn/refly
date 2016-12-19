const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TextWidgetSchema = new Schema({
  type: { type: String, default: 'TextWidget' },
  title: String,
  text: String,
  flyerId: String
});

module.exports = mongoose.model('TextWidget', TextWidgetSchema);
