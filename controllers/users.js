const User = require('../models/user');


function usersCheckEmail(req, res) {
  if(!req.query.email) return res.json(true);
  User
    .findOne({email: req.query.email })
    .exec()
    .then(user => res.json(!user));
}

module.exports = {
  checkEmail: usersCheckEmail
};
