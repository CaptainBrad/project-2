const mongoose = require('mongoose');



const locationSchema = mongoose.Schema({
  location: String,
  image: String

}, {
  timestamps: true
});

module.exports = mongoose.model('Location', locationSchema);
