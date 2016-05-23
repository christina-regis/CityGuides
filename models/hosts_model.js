var mongoose = require('mongoose');

var hostSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  aboutMe: String,
  thingsILike: String
});

var Host = mongoose.model('Host', hostSchema);


module.exports = Host;
