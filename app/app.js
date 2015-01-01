(function (window, angular) {  'use strict';

  angular
    // simple module structure for simple app
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

    .run(['$rootScope', '$route', '$location', '$state', '$stateParams',
      function($rootScope, $route, $location, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);

})(window, window.angular);
