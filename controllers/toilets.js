const Toilet = require('../models/toilet');

function toiletsIndex(req, res) {
  Toilet
    .find()
    .exec()
    .then(toilets => res.render('toilets/index', { toilets }))
    .catch(err => res.render('error', { err }));
}

module.exports = {
  index: toiletsIndex
};
