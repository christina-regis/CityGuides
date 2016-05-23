db = require('./db.js');
var Host = require('./models/hosts_model.js');

Host.remove({}, function(){
  Host.create({
    firstName: 'admin',
    lastName: 'admin',
    email: 'admin@gmail.com'
  }, function(err, host){
    if (err) return  err;
    process.exit();
  });
});
