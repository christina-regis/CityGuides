angular.module('cityGuidesApp')
  .controller('AuthenticateController', AuthenticateController);

AuthenticateController.$inject = ['$http', '$stateParams', '$location'];

function AuthenticateController($http, $stateParams, $location){
  var self = this;
  self.login = login;
  self.auth = {};
  self.password = '';

//check password
  function login(){
    $http
      .post('http://localhost:3000/auth', self.auth)
      .then(function(response){
        console.log(response);
          $location.path('host/index');
      });
  }
}

