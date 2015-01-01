(function (window, angular, undefined) {  'use strict';

  angular
    .module('app')
    .factory('codingSvc', [function () {
      var model = {};
      model.projects = [
        {
          name:'Leads',
          title:'Angular Lead Management App',
          href: 'https://github.com/gmilligan/Leads',
          description: 'Manage and track leads. Uses Angular 1.3 features',
          notes: '',
          technology: ['angular 1.3' , 'grunt'],
          sortOrder: 5
        }, {
          name:'xs-angular-cache-service',
          title:'Angular Cache Service',
          href: 'https://github.com/gmilligan/xs-angular-cache-service',
          description: 'Cache service enables angular project module & session persistence. Extends angular `$cacheFactory`, using HTML5 localStorage for persistence across sessions. Stores data (primitives) or objects.',
          notes: 'Karma & Jasmine Unit testing',
          technology: ['angular 1.2' , 'karma', 'jasmine', 'grunt', 'html5'],
          sortOrder: 10
        }, {
          name:'xs-angular-action-buttons-directive',
          title:'Angular Action Button Directive',
          href: 'https://github.com/gmilligan/xs-angular-action-buttons-directive',
          description: 'Easy & configurable action buttons (BootStrap), include: New, Clone, Edit & Delete. Delete has automatic confirmation mechanism. Sizable, using: (xs, sm, md & lg)',
          notes: 'Demo & Protractor e2e testing.',
          technology: ['angular 1.2' , 'bootstrap', 'protractor', 'grunt'],
          sortOrder: 20
        }, {
          name:'jQM-MVC-Lazy-Loader',
          title:'jQuery Mobile Lazy Loading MVC',
          href: 'https://github.com/gmilligan/jQM-MVC-Lazy-Loader',
          description: 'Super lightweight MVC for jQuery Mobile that lazy loads modules. A handful of helper methods on the "app" object assist UI development.',
          notes: '',
          technology: ['jquery mobile 1.4', 'grunt'],
          sortOrder: 40
        }, {
          name:'mongowrap',
          title:'MongoDB Wrapper',
          href: 'https://github.com/gmilligan/mongowrap',
          description: 'Wraps native node mongoDB driver. Provides persistent authenticated connection and generic routines useful to building RESTful interfaces',
          notes: '',
          technology: ['mongodb', 'node', 'grunt'],
          sortOrder: 55
        }, {
          name:'gmilligan.github.io',
          title:'gmilligan.github.io',
          href: 'http://gmilligan.github.io/',
          description: 'Angular github page, with code project links and photography slideshow.',
          notes: 'Gulp automated',
          technology: ['angular 1.3' ,'bootstrap', 'gulp'],
          sortOrder: 50
        }, {
          name:'xs-angular-ui-components',
          title:'Angular UI Components',
          href: 'https://github.com/gmilligan/xs-angular-ui-components',
          description: 'Handful of components to make it easier to build rich Angular apps.',
          notes: '',
          technology: ['angular 1.2' , 'grunt'],
          sortOrder: 35
        }, {
          name:'xs-dom-single-node-lib',
          title:'Speedy DOM Manipulation Library',
          href: 'https://github.com/gmilligan/xs-dom-single-node-lib',
          description: 'Speed oriented DOM manipulation library. For speedy targeted manipulating of single HTMLElement nodes',
          notes: '',
          technology: ['Raw JavaScript'],
          sortOrder: 70
        }, {
          name:'xs-angular-wizard',
          title:'Angular Wizard Widget',
          href: 'https://github.com/gmilligan/xs-angular-wizard/tree/v1.0',
          description: 'A simple but useful Angular directive to create wizards, with automatic save button and navigable breadcrumbs buttons.',
          notes: '',
          technology: ['angular 1.2' , 'bootstrap', 'grunt'],
          sortOrder: 25
        }

      ];

      return model;

    }]);

})(window, window.angular);