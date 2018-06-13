(function(window, angular) {  'use strict';

  angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', appRoutes]);

  function appRoutes($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/about');

    $stateProvider
      // .state('home', {
      //   url: '/',
      //   templateUrl: 'app/pages/home.html'
      // })
      .state('about', {
        url: '/about',
        templateUrl: 'app/pages/about.html'
      })

      .state('coding', {
        url: '/coding',
        templateUrl: 'app/pages/coding/coding.html',
        controller: 'CodingCtrl as coding'
      })
      .state('photography', {
        url: '/photography',
        templateUrl: 'app/pages/photography/photography.html',
        controller: 'PhotoCtrl as photo'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/pages/contact.html'
      });
  }

})(window, window.angular);
