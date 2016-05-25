var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var hostSchema = mongoose.Schema({

  email: String,
  password: String,
  firstName: String,
  lastName: String,
  state: String,
  city: String,
  neighborhood: String,
  attractionsNearMe: String,
  aboutMe: String,
  aboutMyRental: String,
  thingsILike: String
});

hostSchema.methods.validPassword = function(pwd) {
  return bcrypt.compareSync(pwd, this.password);
};

hostSchema.methods.encrypt = function(pwd) {
  return bcrypt.hashSync(pwd, 8);
};

var Host = mongoose.model('Host', hostSchema);


module.exports = Host;
