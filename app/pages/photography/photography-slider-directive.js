(function(window, angular) {  'use strict';

  angular
    .module('app')
    .directive('gmSlideShow', function($timeout) {
       return {
         restrict: 'AE',
         replace: true,
         scope: {
           images: '=',
           interval: '@',
           basePath: '@'
         },
         templateUrl: 'app/pages/photography/photography-slider-template.html',
         link: function(scope, elem, attrs) {
           scope.curIdx = 0;
           scope.nextSlide = function() {
             slideShow.reset();
             scope.curIdx < scope.images.length - 1 ? scope.curIdx++: scope.curIdx = 0;
           };
           scope.prevSlide = function() {
             slideShow.reset();
             scope.curIdx > 0 ? scope.curIdx--: scope.images.length - 1;
           };
           scope.$watch('curIdx', function() {
             scope.images.forEach(function(image) {
               image.visible = false;
             });
             scope.images[scope.curIdx].visible = true;
             console.log(scope.images[scope.curIdx].title);
           });

           var slideShow = {
              timer: null,
              start: function() {
                this.timer = $timeout(function() {
                  scope.nextSlide();
                }, scope.interval);
              },
              stop: function(){
                if(this.timer) $timeout.cancel(this.timer);
              },
              reset: function(){
                this.stop();
                this.start();
              },
              change:  function() {
                this.startSlideShow();
              }
           };
           slideShow.start();

           scope.$on('$destroy', function() {
             slideShow.stop();
           });
         }
       }
    });

})(window, window.angular);
