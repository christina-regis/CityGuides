var Host = require('../models/hosts_model');

module.exports = function(passport, Strategy) {

  passport.use(new Strategy(function(username, password, cb) {
    Host.findOne({username: username}, function(err, host) {
      if (err) return cb(err);
      if (!host) return cb(null, false);
      if (host.validPassword(password)) return cb(null, false);
      return cb(null, host);
    });
  }));

  passport.serializeUser(function(host, cb) {
    cb(null, host._id);
  });

  passport.deserializeUser(function(id, cb) {
    Host.findById(id, function (err, host) {
      if (err) return cb(err);
      cb(null, host);
    });
  });

};
