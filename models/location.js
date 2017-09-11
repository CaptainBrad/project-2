const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
  area: String,
  image: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Location', locationSchema);
