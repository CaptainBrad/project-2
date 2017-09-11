const Toilet = require('../models/toilet');
const Location = require('../models/location');

function toiletsIndex(req, res) {
  Toilet
    .find()
    .populate('location')
    .exec()
    .then(toilets => res.render('toilets/index', { toilets }))
    .catch(err => res.render('error', { err }));
}
// ====================================================
function locationIndex(req, res) {
  Location
    .find()
    .exec()
    .then(locations => res.render('locations', { locations }))
    .catch(err => res.render('error', { err }));
}

module.exports = {
  index: toiletsIndex,
  locationIndex: locationIndex
};
