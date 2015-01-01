(function(window, angular, undefined){ 'use strict';

  angular
    .module('app')
    .controller('PhotoCtrl', ['$timeout', 'filterFilter', 'photoSvc',
      function($timeout, filterFilter, photoSvc){
        var vm = this;
        vm.images = filterFilter(photoSvc.images, {show: true});
   }]);

})(window, window.angular);