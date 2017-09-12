const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  rating: Number,
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

commentSchema.methods.getPoopIcons = function() {
  let poops = '';
  for(let i = 0; i<Math.floor(this.rating); i++) {
    poops += '<span class="poop">&#128169;</span> ';
  }
  return poops;
};

const toiletSchema = new mongoose.Schema({
  name: String,
  subtitle: String,
  address: String,
  review: String,
  image: { type: String },
  location: { type: mongoose.Schema.ObjectId, ref: 'Location' },
  latLng: {
    lat: { type: Number },
    lng: { type: Number }
  },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comments: [commentSchema]
});

toiletSchema
  .virtual('avgRating')
  .get(function getAvgRating() {
    if(this.comments.length === 0) return false;
    const total = this.comments.reduce((sum, comment) => {
      return sum + comment.rating;
    }, 0);
    const avg = total / this.comments.length;
    return Math.round(avg*2)/2;
  });

toiletSchema.methods.getPoopIcons = function() {
  let poops = '';
  for(let i = 0; i<Math.floor(this.avgRating); i++) {
    poops += '<span class="poop">&#128169;</span> ';
  }
  if(this.avgRating % 1 > 0) poops += '<span class="poop half">&#128169;</span>';
  return poops;
};

module.exports = mongoose.model('Toilet', toiletSchema);

// for later!
// latLng: {
//   lat: { type: Number, required: true },
//   lng: { type: Number, required: true }
// }
