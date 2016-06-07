angular.module('cityGuidesApp')
  .controller('EmailController', EmailController);

EmailController.$inject = ['$http', '$location'];

function EmailController($http, $location) {
  var self = this;
  self.send = send;
  self.message = {};

  function send(){
    console.log('sending email', self.message);
    $http
      .post('/email', self.message)
      .then(function(response){
        console.log(response);
        self.message = {};
        window.alert("Email Sent");
      });
  }
}
