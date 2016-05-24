db = require('../db.js');
var Guest = require('../models/guests_model.js');

var guests = {};

guests.index = function(req, res){
  Guest.find({}, function(err, guests){
    if(err){
      throw err;
    }
    res.json(guests);
  });
};


guests.create = function(req, res){
  var guest = new Guest();
  guest.username = req.body.username;
  guest.password = host.encrypt(req.body.password);
  guest.firstName = req.body.firstName;
  guest.lastName = req.body.lastName;
  guest.email = req.body.email;
  guest.aboutMe = req.body.aboutMe;
  guest.thingsILike = req.body.thingsILike;
  guest.save(function(err){
    if (err){
      throw err;
    }
    res.json(guest);
  });
};

guests.show = function(req, res){
  Guest.findById(req.params.id, function(err, guest){
    if(err) throw(err);
    res.json(guest);
  });
};

guests.update = function(req, res){
  Guest.findById(req.params.id, function(err, guest){
    guest.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      aboutMe: req.body.aboutMe,
      thingsILike: req.body.thingsILike
    }, function(err, guest){
      if(err){
        throw (err);
      }
    });
    res.json(guest);
  });
};

guests.destroy = function(req, res){
  Guest.findById(req.params.id, function(err, guest){
    if(err){
      throw err;
    } else {
      guest.remove(function(err, guest){
        if(err){
          throw err;
        }
      });
    }
    res.json({success: true, message: "guest destroyed"});
  });
};


module.exports = guests;
