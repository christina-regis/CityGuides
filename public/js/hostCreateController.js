angular.module('cityGuidesApp')
  .controller('HostCreateController', HostCreateController);

HostCreateController.$inject = ['$http'];

function HostCreateController($http){
  var self = this;
  self.newHost = {};
  self.allHosts = [];
  self.index = index;
  self.addHost = addHost;

  function index(){
    $http
      .get('https://localhost:3000/hosts')
      .then(function(response){
        console.log(response);
        self.allHosts = response.data;
      });
  }

//need to redirect to profile page
  function addHost(){
    $http
      .post('http://localhost:3000/hosts', self.newHost)
      .then(function(response){
        console.log(response);
        index();
        // $state.go('?')
      });
      self.newHost = {};
  }
}
