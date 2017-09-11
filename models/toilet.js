const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  rating: Number
});

const toiletSchema = new mongoose.Schema({
  name: String,
  address: String,
  image: { type: String },
  location: { type: mongoose.Schema.ObjectId, ref: 'Location' },
  latLng: {
    lat: { type: Number },
    lng: { type: Number }
  },
  comments: [commentSchema]
});

module.exports = mongoose.model('Toilet', toiletSchema);

// for later!
// latLng: {
//   lat: { type: Number, required: true },
//   lng: { type: Number, required: true }
// }
