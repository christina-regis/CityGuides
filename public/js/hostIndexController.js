angular.module('cityGuidesApp')
  .controller('HostIndexController', HostIndexController);

HostIndexController.$inject = ['$http'];

function HostIndexController($http){
  var self = this;
  self.newHost = {};
  self.allHosts = [];
  self.index = index;
  self.sortType = 'city';
  self.sortReverse = false;
  //searchCities not working
  self.searchCities = '';

  function index(){
    $http
      .get('http://localhost:3000/hosts')
      .then(function(response){
        console.log(response);
        self.allHosts = response.data;
      });
  }
  index();
}
