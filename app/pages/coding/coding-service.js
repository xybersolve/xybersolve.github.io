(function (window, angular, undefined) {  'use strict';

  angular
    .module('app')
    .factory('codingSvc', [function () {
      var model = {};
      model.projects = [
        {
          name:'xs-angular-cache-service',
          title:'Angular Cache Service',
          href: 'https://github.com/gmilligan/xs-angular-cache-service',
          description: 'Cache service enables angular project module & session persistence. Extends angular `$cacheFactory`, using HTML5 localStorage for persistence across sessions. Stores data (primitives) or objects.',
          notes: 'Karma & Jasmine Unit testing',
          technology: ['angular 1.x' , 'karma', 'jasmine', 'grunt', 'html5']
        }, {
          name:'xs-angular-action-buttons-directive',
          title:'Angular Action Button Directive',
          href: 'https://github.com/gmilligan/xs-angular-action-buttons-directive',
          description: 'Easy & configurable action buttons (BootStrap), include: New, Clone, Edit & Delete. Delete has automatic confirmation mechanism. Sizable, using: (xs, sm, md & lg)',
          notes: 'Demo & Protractor e2e testing.',
          technology: ['angular 1.x' , 'bootstrap', 'protractor', 'grunt']
        }, {
          name:'jQM-MVC-Lazy-Loader',
          title:'jQuery Mobile Lazy Loading MVC',
          href: 'https://github.com/gmilligan/jQM-MVC-Lazy-Loader',
          description: 'Super lightweight MVC for jQuery Mobile that lazy loads modules. A handful of helper methods on the "app" object assist UI development.',
          notes: '',
          technology: ['jquery mobile', 'grunt']
        }, {
          name:'mongowrap',
          title:'MongoDB Wrapper',
          href: 'https://github.com/gmilligan/mongowrap',
          description: 'Wraps native node mongoDB driver. Provides persistent authenticated connection and generic routines useful to building RESTful interfaces',
          notes: '',
          technology: ['mongodb', 'node', 'grunt']
        }, {
          name:'PrintAssistant',
          title:'Print Assistant',
          href: 'https://github.com/gmilligan/Print-Assistant',
          description: 'Manages print inventory in galleries. Commercial & private lead management. Invoicing sales & tax reports. Uses MEAN stack',
          notes: 'MEAN Stack',
          technology: ['angular 1.x' , 'bootstrap', 'node', 'express', 'mongodb', 'grunt', 'phantomjs', 'handlebars']
        }, {
          name:'xs-angular-ui-components',
          title:'Angular UI Components',
          href: 'https://github.com/gmilligan/xs-angular-ui-components',
          description: 'Handful of components to make it easier to build rich Angular apps.',
          notes: '',
          technology: ['angular 1.x' , 'grunt']
        }, {
          name:'',
          title:'',
          href: '',
          description: '',
          notes: ''
        }, {
          name:'',
          title:'',
          href: '',
          description: '',
          notes: ''
        }

      ];

      return model;

    }]);

})(window, window.angular);