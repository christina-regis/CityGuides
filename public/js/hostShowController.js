angular.module('cityGuidesApp')
  .controller('HostShowController', HostShowController);

HostShowController.$inject = ['$http', '$stateParams'];

function HostShowController($http, $stateParams){
  var self = this;

  self.show = show;
  self.host = null;
  self.updateHost =updateHost;
  self.newHost = {};
  self.allHosts = [];
  self.showForm =showForm;
  self.shown = true;
  self.allHosts = [];
  self.index = index;

  function index(){
    $http
      .get('http://localhost:3000/hosts')
      .then(function(response){
        console.log(response);
        self.allHosts = response.data;
      });
  }
  index();

  function show(hostId){
    $http
      .get('http://localhost:3000/hosts/' + hostId)
      .then(function(response){
        console.log(response);
        self.host = response;
      });
  }
  show($stateParams.hostId);

//not working
  function updateHost(hostId){
    $http
      .patch('http://localhost:3000/hosts/' + hostId, self.host.data)
      .then(function(response){
        console.log(response);
        index();
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
}
