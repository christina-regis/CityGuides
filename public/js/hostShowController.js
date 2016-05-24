angular.module('cityGuidesApp')
  .controller('HostShowController', HostShowController);

HostShowController.$inject = ['$http'];

function HostShowController($http){
  var self = this;
  self.show = show;

  function show(){
    $http
      .get('https://city-guides.herokuapp.com/hosts/:id')
      // .get('http://localhost:3000/hosts/:id')
      .then(function(response){
        console.log(response);
        self.allHosts = response.data;
      });
  }
  index();
}
