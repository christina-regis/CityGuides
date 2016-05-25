db = require('../db.js');
var Host = require('../models/hosts_model.js');

var hosts = {};

hosts.authenticate = function(req, res){
  console.log("hello");
  if (req.body){
    var email = req.body.email.toLowerCase();
    var password = req.body.password;
    Host.findOne( { email: email } )
      .then(function(host){
        res.json(host);
      });
  }
};

hosts.index = function(req, res){
  Host.find({}, function(err, hosts){
    if(err){
      throw err;
    }
    res.json(hosts);
  });
};

hosts.create = function(req, res){
  var host = new Host();
  // host.password = host.encrypt(req.body.password);
  host.firstName = req.body.firstName;
  host.lastName = req.body.lastName;
  host.city = req.body.city;
  host.state = req.body.state;
  host.neighborhood = req.body.neighborhood;
  host.attractionsNearMe = req.body.attractionsNearMe;
  host.email = req.body.email;
  host.aboutMe = req.body.aboutMe;
  host.aboutMyRental = req.body.aboutMyRental;
  host.thingsILike = req.body.thingsILike;
  host.save(function(err){
    if(err){
      throw err;
    }
    res.json({success: true, message: 'Host created'});
  });
};

hosts.show = function(req, res){
  Host.findById(req.params.id, function(err, host){
    if(err) throw (err);
    res.json(host);
  });
};

hosts.update = function(req, res){
  Host.findById(req.params.id, function(err, host){
    host.update({
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      state: req.body.state,
      city: req.body.city,
      neighborhood: req.body.neighborhood,
      aboutMe: req.body.aboutMe,
      aboutMyRental: req.body.aboutMyRental,
      thingsILike: req.body.thingsILike
    }, function(err, host){
      if(err) {
        throw err;
      }
    });
    res.json({success: true, message: "user updated"});
  });
};

hosts.destroy = function(req, res){
  Host.findById(req.params.id, function(err, host){
    if(err){
      throw err;
    } else {
      host.remove(function(err, host){
        if(err){
          throw err;
        }
      });
    }
    res.json({success: true, message: "host destroyed"});
  });
};


module.exports = hosts;


