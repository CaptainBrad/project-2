const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const Toilet = require('../models/toilet');
const Location = require('../models/location');

Toilet.collection.drop();
Location.collection.drop();

Location.create([{
  area: 'Marylebone',
  image: 'http://i.dailymail.co.uk/i/pix/2015/09/09/17/242AF96100000578-3225524-image-a-11_1441814578946.jpg'
}, {

}])
  .then((location) => {
    console.log(`${location.length} Locations created!`);
    return Toilet
      .create([{
        name: 'The Langham',
        address: 'Somewhere Portland Place',
        image: 'https://t-ec.bstatic.com/images/hotel/max1024x768/740/7401098.jpg',
        location: location[0],
        latLng: {
          lat: 51.517876,
          lng: -0.1462534
        },
        comments: [{
          text: 'make poop here',
          rating: 5
        }]


      }]);
  })
  .then((toilet) => console.log(`${toilet.length} Loo's created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
