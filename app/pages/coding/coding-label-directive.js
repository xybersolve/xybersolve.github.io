(function(window, angular) {  'use strict';

  angular
    .module('app')
    .directive('gmLabels', ['$log', function($log) {
      return {
        restrict: 'AE',
        replace: true,
        scope: {
          items: '='
        },
        templateUrl: '<span ng-repeat="item in items" class="label label-primary">{{item}}</span>'
      };
    }]);

})(window, window.angular);
