(function(window, angular) {  'use strict';

  angular
    .module('app')
    .directive('gmLabels', function($log) {
      return {
        restrict: 'AE',
        replace: true,
        scope: {
          items: '='
        },
        templateUrl: '<span ng-repeat="item in items" class="label label-primary">{{item}}</span>'
        /*
        link: function(scope, element, attrs) {
          $log.log(scope.items);
        }*/
      }
    });

})(window, window.angular);
