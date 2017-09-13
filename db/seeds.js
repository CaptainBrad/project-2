const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const Toilet = require('../models/toilet');
const Location = require('../models/location');

Toilet.collection.drop();
Location.collection.drop();

Location
  .create([{
    area: 'Westminster',
    image: 'http://www.bh-index.com/wp-content/uploads/2017/05/London-Parliament.jpg'
  }, {
    area: 'Mayfair',
    image:
    'http://www.bqlive.co.uk/resizer/-1/-1/true/1485944316361.jpg--.jpg?1485944316000'
  }, {
    area: 'London Bridge',
    image: 'https://cdn.londonandpartners.com/visit/london-organisations/tower-bridge/86830-640x360-tower-bridge-640.jpg'
  }, {
    area: 'Soho',
    image: 'http://relocabroad.com/wp-content/uploads/2015/07/soho1.jpg'
  }, {
    area: 'East London',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Flickr_-_Duncan~_-_Olympic_Park_from_Hackney_Wick.jpg'
  }, {
    area: 'Holborn',
    image: 'https://clarendonlondon-rspmbr9ezvmofjn.netdna-ssl.com/wp-content/uploads/2015/11/Holborn-serviced-apartments-840x515.jpg'
  }, {
    area: 'Fitzrovia',
    image: 'http://www.lovecamden.org/sites/default/files/styles/hero_image/public/2016-10/Love_Camden_Fitzrovia_TCR_015.jpg?itok=M_VNc4mT'
  }])
  .then((location) => {
    console.log(`${location.length} Locations created!`);
    return Toilet
      .create([{
        name: 'Sketch',
        subtitle: 'Intergalactic Poop',
        review: 'Have you ever wanted to make a poop in space? well look no more, at sketch bar you can use a futuristic poop-pod!',
        address: '9 Conduit St, Mayfair, London W1S 2XG',
        image: 'http://www.bookatable.co.uk/blog/wp-content/uploads/sites/2/2015/01/sketch-gallery-samphireandsalsify.jpg',
        location: location[1],
        latLng: {
          lat: 51.5128187,
          lng: -0.143694
        },
        comments: [{
          text: 'Pooped to another dimension',
          rating: 5
        }]
      },{
        name: 'Aqua Shard',
        subtitle: 'Verti-GO Make Poop!',
        review: 'Make Poop with a great view',
        address: '32 London Bridge St, London SE1 9SG',
        image: 'http://i.dailymail.co.uk/i/pix/2013/01/11/article-2260485-16DA9272000005DC-343_964x657.jpg',
        location: location[2],
        latLng: {
          lat: 51.5045,
          lng: -0.0886887
        },
        comments: [{
          text: 'It was a bit scary but that helped me poop',
          rating: 4
        }]
      },{
        name: 'The One Way Mirror Loo',
        subtitle: 'Feels kind of wrong but also kind of right...',
        review: 'You can see the world go by while you make poop, but dont worry they cant see you!',
        address: 'Outside the Tate Modern',
        image: 'https://itisabouttime.com/wp-content/uploads/2017/05/toilet-one-way-mirror-london.jpg',
        location: location[0],
        latLng: {
          lat: 51.5075953,
          lng: -0.1015451
        },
        comments: [{
          text: 'Super awkward, especially when wiping',
          rating: 2
        }]
      },{
        name: 'Nopi',
        subtitle: 'watch yourself poop at a million differnt angles',
        review: 'Great toilet, very artistic but do not take an on toilet selfie, that will not go down well',
        address: '21-22 Warwick St, Soho, London W1B 5NE',
        image: 'https://pbs.twimg.com/media/Bu3ce71IAAA5p1J.jpg',
        location: location[3],
        latLng: {
          lat: 51.5117189,
          lng: -0.1406977
        },
        comments: [{
          text: 'Sent an on toilet selfie to my tinder fling, we dont speak anymore',
          rating: 2
        }]
      },{
        name: 'The Bonneville',
        subtitle: 'Creepy Poop',
        review: 'You kind of feel like Jack the Ripper is going to pop out at any given moment... But thats all part of the fun',
        address: 'Hackney',
        image: 'https://i0.wp.com/thecarouser.com/wp-content/uploads/2015/07/The-Bonneville-toilets.jpeg',
        location: location[4],
        latLng: {
          lat: 51.5509442, // add latLng
          lng: -0.0545107 // add latLng
        },
        comments: [{
          text: 'Like the creepy vibez but really rough toilet paper',
          rating: 1
        }]

      // },{
      //   name: 'Nopi',
      //   subtitle: 'watch yourself poop at a million differnt angles',
      //   review: 'Great toilet, very artistic but do not take an on toilet selfie, that will not go down well',
      //   address: 'Outside the Tate Modern',
      //   image: 'http://i.dailymail.co.uk/i/pix/2013/01/11/article-2260485-16DA9272000005DC-343_964x657.jpg',
      //   location: location[3],
      //   latLng: {
      //     lat: 51.5117189,
      //     lng: -0.1406977
      //   },
      //   comments: [{
      //     text: 'Sent an on toilet selfie to my tinder fling, we dont speak anymore',
      //     rating: 2
      //   }]
      }]);

  })
  .then((toilet) => console.log(`${toilet.length} Loo's created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
