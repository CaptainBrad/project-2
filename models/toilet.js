const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  rating: Number
});

const toiletSchema = new mongoose.Schema({
  name: String,
  address: String,
  image: { type: String, required: true },
  location: { type: mongoose.Schema.ObjectId, ref: 'Location' },
  latLng: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  comments: [commentSchema]
});

module.exports = mongoose.model('Toilet', toiletSchema);
