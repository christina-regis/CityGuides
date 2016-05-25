angular.module('cityGuidesApp')
  .controller('HostCreateController', HostCreateController);

HostCreateController.$inject = ['$http', '$location'];

function HostCreateController($http, $location){
  var self = this;
  self.newHost = {};
  self.allHosts = [];
  self.index = index;
  self.addHost = addHost;

  function index(){
    $http
      .get('http://localhost:3000/hosts')
      .then(function(response){
        console.log(response);
        self.allHosts = response.data;
      });
  }

//need to redirect to profile page
  function addHost(){
    console.log('addhost function');
    $http
      .post('http://localhost:3000/hosts', self.newHost)
      .then(function(response){
        console.log(response);
        $location.path('host/index');
        index();
      });
      self.newHost = {};
  }
}
