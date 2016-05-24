angular.module('cityGuidesApp')
  .controller('HostShowController', HostShowController);

HostShowController.$inject = ['$http', '$stateParams'];

function HostShowController($http, $stateParams){
  var self = this;

  self.show = show;
  self.host = null


  function show(hostId){
    console.log(hostId);
    $http
      .get('http://localhost:3000/hosts/' + hostId)
      .then(function(response){
        console.log(response);
        self.host = response
      });
  }
  show($stateParams.hostId);
}
