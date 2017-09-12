function secureRoute(req, res, next) {
  if(!req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'Holy shitballz that\'s not right');
      res.redirect('/login');
    });
  }
  next();
}

module.exports = secureRoute;
