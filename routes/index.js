module.exports = function(app, passport) {

  app.get('/login', function(req, res) {
    res.render('login');
  });

  app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('http://localhost:3000/#/host/index');
  });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

};
