(function() {
  'use strict';

  angular.module('app', [
      'ngRoute',
      'ngAnimate',
      'ngMaterial'
    ])
    .config(config)
    .run(run);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider) {
    // routes
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
      })
      .otherwise({
        redirectTo: '/404'
      });

    $locationProvider.html5Mode(true);
  }

  function run() {
  }
})();
