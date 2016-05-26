angular.module('cityGuidesApp')
  .controller('GuestCreateController', GuestCreateController);

GuestCreateController.$inject = ['$http', '$location'];

function GuestCreateController($http, $location){
  var self = this;
  self.newGuest = {};
  self.allGuests = [];
  self.index = index;
  self.addGuest = addGuest;

  function index(){
    $http
      .get('/guests')
      .then(function(response){
        console.log(response);
        self.allGuests = response.data;
      });
  }

//need to redirect to profile page
//create does not work
  function addGuest(){
    console.log('addguest function');
    $http
      .post('/guests', self.newGuest)
      .then(function(response){
        console.log(response);
        $location.path('host/index');
        index();
      });
      self.newGuest = {};
  }
}
