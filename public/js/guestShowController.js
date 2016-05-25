angular.module('cityGuidesApp')
  .controller('GuestShowController', GuestShowController);

GuestShowController.$inject = ['$http', '$stateParams'];

function GuestShowController($http, $stateParams){
  var self = this;

  self.show = show;
  self.guest = null;
  self.showForm =showForm;
  self.show = true;

  function show(guestId){
    $http
      .get('http://localhost:3000/guests/' + guestId)
      .then(function(response){
        console.log(response);
        self.guest = response;
      });
  }
  show($stateParams.guestId);

  function showForm(){
    console.log('showform function');
    if(self.show){
      self.show = false;
    } else {
      self.show = true;
    }
  }
}
