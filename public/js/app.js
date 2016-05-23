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
      url:'/host/show',
      templateUrl: 'partials/hostShow.html',
      controller: 'HostShowController as hshowctrl'
    });

}
