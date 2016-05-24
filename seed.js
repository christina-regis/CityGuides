db = require('./db.js');
var Host = require('./models/hosts_model.js');

Host.remove({}, function(){
  Host.create({
    username: 'admin',
    password: 'admin',
    firstName: 'Emma',
    lastName: 'Sue',
    email: 'emma@gmail.com',
    state: 'CA',
    city: 'Los Angeles',
    neighborhood: 'Venice',
    attractionsNearMe: 'beach, shopping, restraunts',
    aboutMe: 'I love to meet new people and show them the amazing city I live in.',
    aboutMyRental: 'Come stay with me in beautiful Venice beach.  You will have your own bedroom and bath that sleeps two with an available couch or airmattres or couch to sleep a total of 4.',
    thingsILike: 'eatting out, the beach, hiking, museums'

  }, function(err, host){
    if (err) return  err;
    process.exit();
  });
});

