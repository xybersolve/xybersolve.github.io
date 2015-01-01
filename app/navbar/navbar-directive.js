(function (window, angular) {  'use strict';

    angular
      .module('app')
      .directive('gmNavbar', ['$location', function($location ) {
        return {
          restrict: 'EA',
          templateUrl:'app/navbar/navbar.html',
          controller: ['$scope', function($scope) {
            $scope.isActive = function(locationDef) {
              return $location.path().indexOf(locationDef) === 0;
            };
          }]
        };
      }]);


})(window, window.angular);
