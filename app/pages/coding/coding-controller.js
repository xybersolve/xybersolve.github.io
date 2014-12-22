(function(window, angular, undefined) {
  'use strict';

  angular
    .module('app')
    .controller('CodingCtrl', ['codingSvc', function (codingSvc) {
      var vm = this;
      vm.projects = codingSvc.projects;
    }]);

})(window, window.angular);