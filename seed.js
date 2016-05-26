db = require('./db.js');
var Host = require('./models/hosts_model.js');
var Guest = require('./models/guests_model.js');

Host.remove({}, function(){
  Host.create({
    password: 'admin',
    firstName: 'Emma',
    lastName: 'Sue',
    email: 'admin@gmail.com',
    state: 'CA',
    city: 'Los Angeles',
    neighborhood: 'Venice',
    attractionsNearMe: 'beach, shopping, restraunts',
    aboutMe: 'I love to meet new people and show them the amazing city I live in.',
    aboutMyRental: 'Come stay with me in beautiful Venice beach.  You will have your own bedroom and bath that sleeps two with an available couch or airmattres or couch to sleep a total of 4.',
    thingsILike: 'eating out, the beach, hiking, museums'

  }, function(err, host){
    if (err) return  err;
    process.exit();
  });
    Host.create({
    password: 'susie',
    firstName: 'Susie',
    lastName: 'Hansom',
    email: 'susie@gmail.com',
    state: 'WA',
    city: 'Seattle',
    neighborhood: 'Ballard',
    attractionsNearMe: 'bars, restraunts, shopping, kayaking, Pike Place Market',
    aboutMe: 'I am very outgoing and love meeting new people.  I have lived in Seattle for 10 years so I know a ton about the city and will cater your visit to your preferences. I am always up for anything so let me know if there is anything in particular you would like to see or do.',
    aboutMyRental: 'I have two rooms and one bath available.  They have thieir own enterances so you are welcome to come and go as you please.  I am always available for any questions and would love the opportunity to show you around my city.',
    thingsILike: 'anything!'

  }, function(err, host){
    if (err) return  err;
    process.exit();
  });
    Host.create({
    password: 'greg',
    firstName: 'Greg',
    lastName: 'Connor',
    email: 'greg@gmail.com',
    state: 'TX',
    city: 'Austin',
    neighborhood: 'Tarrytown',
    attractionsNearMe: 'parks, golf, restaurants',
    aboutMe: 'I love to host new people and show the around my city.  Austin is know for its weirdness and definitely lives up to its name.  Come visit and let me show you why Austin is weird!',
    aboutMyRental: 'My couch is available for rent.  It is super comfy and you are welcome to use anything is the kitchen I just ask that you clean up after yourself.',
    thingsILike: 'eating, eating and EATING'

  }, function(err, host){
    if (err) return  err;
    process.exit();
  });
    Host.create({
    password: 'john',
    firstName: 'John',
    lastName: 'Lee',
    email: 'john@gmail.com',
    state: 'NY',
    city: 'New York City',
    neighborhood: 'Greenwich Village',
    attractionsNearMe: 'shopping, restraunts, bars, clubs, nightlife, public transportation',
    aboutMe: 'I live the new york life, I like to work and play hard and am always on the go.  I love trying new things and being in NYC there is always something going on.',
    aboutMyRental: 'My husband and I have a two bedroom one bath apartment with an available bedroom.  Our home is cozy and centrally located to everything.',
    thingsILike: 'shopping, running, eating'

  }, function(err, host){
    if (err) return  err;
    process.exit();
  });
});

Guest.remove({}, function(){
  Guest.create({
    password: 'guest',
    firstName: 'Billy',
    lastName: 'Ray',
    email: 'billy@gmail.com',
    aboutMe: 'I grew up in the south and am excited to travel to other parts of the country to meet new people and experience new things',
    thingsILike: 'eating, swimming'
  }, function(err, guest){
    if (err) return err;
    process.exit();
  });
});



