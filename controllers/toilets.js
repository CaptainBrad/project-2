const Toilet = require('../models/toilet');
const Location = require('../models/location');

function toiletsIndex(req, res) {
  Toilet
    .find()
    .populate('location')
    .exec()
    .then(toilets => res.render('toilets', { toilets }))
    .catch(err => res.render('error', { err }));
}
// ====================================================
// function locationIndex(req, res) {
//   Location
//     .find()
//     .exec()
//     .then(locations => res.render('locations', { locations }))
//     .catch(err => res.render('error', { err }));
// }

//===========================================================

function toiletsNew(req, res) {
  Location
    .find()
    .exec()
    .then(locations => res.render('toilets/new', { locations }))
    .catch(err => res.render('error', { err }));
}

//==============================================================

function toiletsShow(req, res) {
  Toilet
    .findById(req.params.id)
    .populate('location comments.user user')
    .exec()
    .then(toilet => res.render('toilets/show', { toilet })) // render is the path to the file
    .catch(err => res.render('error', { err }));
}

function toiletsCreate(req, res) {
  req.body.user = req.currentUser;
  Toilet
    .create(req.body) // req.body here is the data from the form
    .then(() => res.redirect('/toilets')) // take user back to index page
    .catch(err => res.status(500).render('error', { err }));
}

function toiletsEdit(req, res) {
  Toilet
    .findById(req.params.id)
    .exec()
    .then(toilet => {
      return Location
        .find()
        .exec()
        .then((locations) => res.render('toilets/edit', { toilet, locations }));
    })
    .catch(err => res.render('error', { err }));
}

function toiletsUpdate(req, res) {
  Toilet
    .findById(req.params.id)
    .exec()
    .then(toilet => {
      toilet = Object.assign(toilet, req.body);
      return toilet.save();
    })
    .then(toilet => res.redirect(`/toilets/${toilet.id}`))
    .catch(err => res.render('error', { err }));
}

function toiletsDelete(req, res) {
  Toilet
    .findById(req.params.id)
    .exec()
    .then(toilet => toilet.remove())
    .then(() => res.redirect('/toilets'))
    .catch(err => res.render('error', { err }));
}
// ===================================================================

function toiletsCommentsCreate(req, res) {
  req.body.user = req.currentUser;
  Toilet
    .findById(req.params.id)
    .populate({
      path: 'comments',
      populate: {
        path: 'user',
        model: 'User'
      }
    })
    .exec()
    .then(toilet => {
      toilet.comments.push(req.body);
      return toilet.save();
    })
    .then(toilet => res.redirect(`/toilets/${toilet.id}`))
    .catch(err => res.render('error', {err}));
}

function toiletsCommentsDelete(req, res) {
  Toilet
    .findById(req.params.id)
    .exec()
    .then(toilets => {
      const comment = toilets.comments.id(req.params.commentId);
      comment.remove();
      return toilets.save();
    })
    .then(toilets => res.redirect(`/toilets/${toilets.id}`))
    .catch(err => res.render('error', {err}));
}

module.exports = {
  index: toiletsIndex,
  new: toiletsNew,
  show: toiletsShow,
  create: toiletsCreate,
  edit: toiletsEdit,
  update: toiletsUpdate,
  delete: toiletsDelete,
  commentsCreate: toiletsCommentsCreate,
  commentsDelete: toiletsCommentsDelete
};
