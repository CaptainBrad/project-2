const router = require('express').Router();


const toilets = require('../controllers/toilets');

router.route('/toilets')
  .get(toilets.index);
// .post(toilets.create);

router.get('/', (req, res) => res.render('home'));

router.route('/toilets')
  .get(toilets.index);


module.exports = router;
