const router = require('express').Router();


const toilets = require('../controllers/toilets');
const locations = require('../controllers/locations');
const registrations = require('../controllers/registrations');

router.get('/', (req, res) => res.render('home'));

// post to /toilets is going to take the form data, and create a new toilet
router.route('/toilets')
  .get(toilets.index)
  .post(toilets.create);

// /toilets/new only shows the new form (doesn't do any creating)
router.route('/toilets/new')
  .get(toilets.new);

router.route('/toilets/:id')
  .get(toilets.show);

router.route('/toilets/:id')
  .put(toilets.update);
// add the update (.put)

router.route('/toilets/:id')
  .delete(toilets.delete);
// add the delete (.delete)

router.route('/toilets/:id/edit')
  .get(toilets.edit);

// =========================================================

router.route('/locations')
  .get(locations.index);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);




// router.route('/toilets')
//   .post(toilets.create); move to new


module.exports = router;
