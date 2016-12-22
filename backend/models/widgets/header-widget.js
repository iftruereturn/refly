const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HeaderWidgetSchema = new Schema({
  type: { type: String, default: 'HeaderWidget' },
  title: String,
  text: String,
  flyerId: Schema.ObjectId
});

module.exports = mongoose.model('HeaderWidget', HeaderWidgetSchema);
