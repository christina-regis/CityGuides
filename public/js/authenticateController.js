angular.module('cityGuidesApp')
  .controller('AuthenticateController', AuthenticateController);

AuthenticateController.$inject = ['$http', '$stateParams', '$location'];

function AuthenticateController($http, $stateParams){
  var self = this;
  self.login = login;
  self.auth = {};

//how to redirect to hosts index
  function login($location){
    console.log("login function");
    $http
      .post('http://localhost:3000/auth', self.auth)
      .then(function(response){
        console.log(response);
        $location.path('hostIndex');

      });
  }
}
