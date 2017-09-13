const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');

const toilets = require('../controllers/toilets');
const locations = require('../controllers/locations');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const users = require('../controllers/users');

router.get('/', (req, res) => res.render('home'));

// post to /toilets is going to take the form data, and create a new toilet
router.route('/toilets')
  .get(toilets.index)
  .post(secureRoute, toilets.create);

// /toilets/new only shows the new form (doesn't do any creating)
router.route('/toilets/new')
  .get(secureRoute, toilets.new);

router.route('/toilets/:id')
  .get(toilets.show)
  .put(secureRoute, toilets.update)
  .delete(secureRoute, toilets.delete);
// add the delete (.delete)

router.route('/toilets/:id/edit')
  .get(toilets.edit);

// =========================================================

router.route('/locations')
  .get(locations.index);

router.route('/locations/:id')
  .get(locations.show);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.get('/logout', sessions.delete);

router.route('/toilets/:id/comments')
  .post(secureRoute, toilets.commentsCreate);
router.route('/toilets/:id/comments/:commentId')
  .delete(secureRoute, toilets.commentsDelete);

router.get('/checkemail', users.checkEmail);




// router.route('/toilets')
//   .post(toilets.create); move to new


module.exports = router;
