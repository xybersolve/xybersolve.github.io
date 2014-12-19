(function (window, angular) {  'use strict';

  angular
    .module('app', ['ngRoute', 'ui.router'])
    .config(['$httpProvider', function($httpProvider) {
      if(! $httpProvider.defaults.headers.get){
        $httpProvider.defaults.headers.get = {};
      }
      $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
    }])
    .run(function($rootScope, $route, $location, $state, $stateParams) {
      console.log('app is running');
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    });


})(window, window.angular);
