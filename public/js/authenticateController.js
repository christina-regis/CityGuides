angular.module('cityGuidesApp')
  .controller('AuthenticateController', AuthenticateController);

AuthenticateController.$inject = ['$http', '$stateParams', '$location'];

function AuthenticateController($http, $stateParams, $location){
  var self = this;
  self.login = login;
  self.Glogin = Glogin;
  self.auth = {};
  self.gauth = {};


//check password
  function login(){
    $http
      .post('/auth', self.auth)
      .then(function(response){
        console.log(response);
          $location.path('host/index');
      });
  }

  //check password
  function Glogin(){
    console.log("glogin");
    $http
      .post('/gauth', self.gauth)
      .then(function(response){
        console.log(response);
          $location.path('host/index');
      });
  }
}

