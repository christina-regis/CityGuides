var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var guestSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  aboutMe: String,
  thingsILike: String
});

guestSchema.methods.validPassword = function(pwd) {
  return bcrypt.compareSync(pwd, this.password);
};

guestSchema.methods.encrypt = function(pwd) {
  return bcrypt.hashSync(pwd, 8);
};

var Guest = mongoose.model('Guest', guestSchema);


module.exports = Guest;
