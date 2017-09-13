function secureRoute(req, res, next) {
  if(!req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'Ah Shit, somethings not right');
      res.redirect('/login');
    });
  }
  next();
}

module.exports = secureRoute;
