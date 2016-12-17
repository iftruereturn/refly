const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HeaderWidgetSchema = new Schema({
  title: String,
  text: String,
  flyerId: String
});

module.exports = mongoose.model('HeaderWidget', HeaderWidgetSchema);
