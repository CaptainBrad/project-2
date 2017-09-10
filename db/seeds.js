const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const Toilet = require('../models/toilet');
// const Location = require('../models/location'); uncomment soon

Toilet.collection.drop();

Toilet
  .create([{
    name: 'The Langham',
    address: 'Somewhere Portland Place',
    image: 'https://t-ec.bstatic.com/images/hotel/max1024x768/740/7401098.jpg',
    // location: location[0],
    latLng: {
      lat: 300,
      lng: 300
    },
    comments: [{
      text: 'poop here',
      rating: 5
    }]


  }])
  .then((toilet) => console.log(`${toilet.length} Loo's created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
