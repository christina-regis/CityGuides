angular.module('cityGuidesApp', ['ui.router'])
  .config(configuration);

configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

function configuration($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('hostCreate', {
      url:'/host/create',
      templateUrl: 'partials/hostCreate.html',
      controller: 'HostCreateController as hcreatectrl'
    })

    .state('hostIndex', {
      url:'/host/index',
      templateUrl: 'partials/hostIndex.html',
      controller: 'HostIndexController as hindexctrl'
    })

    .state('hostShow', {
      url:'/host/:hostId',
      templateUrl: 'partials/hostShow.html',
      controller: 'HostShowController as hshowctrl'
    })

    .state('guestIndex', {
      url: '/guest/index',
      templateUrl: 'partials/guestIndex.html',
      controller: 'GuestIndexController as gindexctrl'
    })


    .state('guestCreate', {
      url:'/guest/create',
      templateUrl: 'partials/guestCreate.html',
      controller: 'GuestCreateController as gcreatectrl'
    })

    .state('guestShow', {
      url:'/guest/:guestId',
      templateUrl: 'partials/guestShow.html',
      controller: 'GuestShowController as gshowctrl'
    })
    .state('authenticate', {
      url: '/authenticate',
      templateUrl: 'partials/authenticate.html',
      controller: 'AuthenticateController as authctrl'
    })
    .state('email', {
      url: '/email',
      templateUrl: 'partials/email.html',
      controller: 'EmailController as emailctrl',
    });

}
