angular.module('cityGuidesApp')
  .controller('GuestCreateController', GuestCreateController);

GuestCreateController.$inject = ['$http'];

function GuestCreateController($http){
  var self = this;
  self.newGuest = {};
  self.allGuests = [];
  self.index = index;
  self.addGuest = add;

  function index(){
    $http
      .get('https://localhost:3000/guests')
      .then(function(response){
        console.log(response);
        self.allGuests = response.data;
      });
  }

//need to redirect to profile page
//create does not work
  function addGuest(){
    $http
      .post('http://localhost:3000/guests', self.newGuest)
      .then(function(response){
        console.log(response);
        index();
        // $state.go('?')
      });
      self.newGuest = {};
  }
}
