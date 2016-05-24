db = require('../db.js');
var Host = require('../models/hosts_model.js');

var hosts = {};

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
  host.firstName = req.body.firstName;
  host.lastName = req.body.lastName;
  host.email = req.body.email;
  host.aboutMe = req.body.aboutMe;
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
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      aboutMe: req.body.aboutMe,
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


