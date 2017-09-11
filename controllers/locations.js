const Location = require('../models/location');

function locationsIndex(req, res) {
  Location
    .find()
    .populate('location')
    .exec()
    .then(locations => res.render('locations', { locations }))
    .catch(err => res.render('error', { err }));
}

function locationsNew(req, res) {
  Location
    .find()
    .exec()
    .then(locations => res.render('locations/new', { locations }))
    .catch(err => res.render('error', { err }));
}

function locationsShow(req, res) {
  Location
    .findById(req.params.id)
    .populate('location')
    .exec()
    .then(location => res.render('locations/show', { location })) // render is the path to the file
    .catch(err => res.render('error', { err }));
}

function locationsCreate(req, res) {
  Location
    .create(req.body) // req.body here is the data from the form
    .then(() => res.redirect('/locations')) // take user back to index page
    .catch(err => res.status(500).render('error', { err }));
}

function locationsEdit(req, res) {
  Location
    .findById(req.params.id)
    .exec()
    .then(location => {
      return Location
        .find()
        .exec()
        .then((locations) => res.render('locations/edit', { location, locations }));
    })
    .catch(err => res.render('error', { err }));
}

function locationsUpdate(req, res) {
  Location
    .findById(req.params.id)
    .exec()
    .then(location => {
      location = Object.assign(location, req.body);
      return location.save();
    })
    .then(location => res.redirect(`/locations/${location.id}`))
    .catch(err => res.render('error', { err }));
}

function locationsDelete(req, res) {
  Location
    .findById(req.params.id)
    .exec()
    .then(location => location.remove())
    .then(() => res.redirect('/locations'))
    .catch(err => res.render('error', { err }));
}


module.exports = {
  index: locationsIndex,
  new: locationsNew,
  show: locationsShow,
  create: locationsCreate,
  edit: locationsEdit,
  update: locationsUpdate,
  delete: locationsDelete
};
