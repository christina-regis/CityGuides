angular.module('cityGuidesApp')
  .controller('GuestIndexController', GuestIndexController);

GuestIndexController.$inject = ['$http'];

function GuestIndexController($http){
  var self = this;
  self.newGuest = {};
  self.allGuests = [];
  self.index = index;

  function index(){
    $http
      .get('/guests')
      .then(function(response){
        console.log(response);
        self.allGuests = response.data;
      });
  }
  index();
}
