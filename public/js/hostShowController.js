angular.module('cityGuidesApp')
  .controller('HostShowController', HostShowController);

HostShowController.$inject = ['$http', '$stateParams', '$location'];

function HostShowController($http, $stateParams, $location){
  var self = this;

  self.show = show;
  self.host = null;
  self.updateHost =updateHost;
  self.newHost = {};
  self.allHosts = [];
  self.showForm =showForm;
  self.shown = true;
  self.showEmail = showEmail;
  self.email = false;

  function show(hostId){
    $http
      .get('/hosts/' + hostId)
      .then(function(response){
        console.log(response);
        self.host = response;
      });
  }
  show($stateParams.hostId);

  function updateHost(hostId){
    $http
      .patch('/hosts/' + hostId, self.host.data)
      .then(function(response){
        console.log(response);
        $location.path('host/index');
      });
      self.newHost = {};
  }

  function showForm(){
    console.log('showform function');
    if(self.shown){
      self.shown = false;
    } else {
      self.shown = true;
    }
  }

  function showEmail(){
    console.log('showEmail function');
    if(self.email === false) {
      self.email = true;
    } else {
      self.email = false;
    }
  }
}
