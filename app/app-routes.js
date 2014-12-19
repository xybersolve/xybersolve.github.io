(function(window, angular) {  'use strict';

  angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', appRoutes]);

  function appRoutes($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/pages/home.html'
      })
      .state('coding', {
        url: '/coding',
        templateUrl: 'app/pages/coding.html'
      })
      .state('photography', {
        url: '/photography',
        templateUrl: 'app/pages/photography.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/pages/contact.html'
      });
  }

})(window, window.angular);
