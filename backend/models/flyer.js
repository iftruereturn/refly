const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlyerSchema = new Schema({
  owner: Schema.Types.ObjectId,

  background: String,
  color: String,
  font: String,
  theme: String,

  stack: [Schema.Types.Mixed]
},
{
  timestamps: true
});

module.exports = mongoose.model('Flyer', FlyerSchema);
