(function (window, angular) {  'use strict';

  angular
  angular
    .module('app', [
      'ngRoute',
      'ngAnimate',
      'ui.router'
    ])

    .config(['$httpProvider', function($httpProvider) {
      if(! $httpProvider.defaults.headers.get){
        $httpProvider.defaults.headers.get = {};
      }
      $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
    }])
    .run(function($rootScope, $route, $location, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    });

})(window, window.angular);
