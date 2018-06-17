(function (window, angular, undefined) {  'use strict';

  angular
    .module('app')
    .factory('codingSvc', [function () {
      var model = {};
      model.projects = [
        {
          name:'terraform_data_source_modules',
          title:'Custom Terraform Modules to lookup AWS or extant resources.',
          href: 'https://github.com/xybersolve/terraform-data-source-modules',
          description: 'These lookup data modules are useful when one needs to grab existing resources ids or pull AMI Ids.',
          notes: 'Terraform data sources for resource lookup...',
          technology: ['terraform'],
          sortOrder: 10
        }, {
          name:'tf',
          title:'Terraform helper script. Simplifies and ensures consistency in Terraform cli commands.',
          href: 'https://github.com/xybersolve/xs-tf',
          description: 'Bash helper script, for Terraform file based state projects. Simplifies and shortens cli commands.',
          notes: 'Terraform validate, init, plan, apply, destroy wrapper...',
          technology: ['terraform', 'bash'],
          sortOrder: 15
        }, {
          name:'jinks',
          title:'Jenkins docker managment script',
          href: 'https://github.com/xybersolve/jinks',
          description: 'Bash script to manage docker blueocean deployment.',
          notes: 'Jenkins, up, down, backup, restore, logs, ssh...',
          technology: ['jenkins', 'docker', 'compose', 'make', 'bash'],
          sortOrder: 20
        }, {
          name:'zeromq-request-response-rest',
          title:'ZeroMQ Request/Response for a REST service',
          href: 'https://github.com/xybersolve/xs-zeromq-req-res-rest',
          description: 'Typical intra-microservice communication using ZeroMQ, exposing REST endpoints',
          notes: 'Promise based request service, microservices, REST...',
          technology: ['zeromq', 'microservices', 'docker', 'jenkins', 'make'],
          sortOrder: 25
        // }, {
        //   name:'zeromq-push-pull',
        //   title:'ZeroMQ Push/Pull for REST service',
        //   href: 'https://github.com/xybersolve/xs-zeromq-push-pull',
        //   description: 'ZeroMQ intra-microservice communication push/pull examples',
        //   notes: 'Promise based request service, microservices...',
        //   technology: ['zeromq', 'microservices', 'docker', 'make'],
        //   sortOrder: 25
        }, {
          name:'xs-zeromq-node-base',
          title:'ZeroMQ and node docker base image builder',
          href: 'https://github.com/xybersolve/xs-zeromq-node-base',
          description: 'ZeroMQ node base image provides node based socket communications between microservices, for lightweight collaboration',
          notes: 'ZeroMQ node base image, consumers: req-rel, pub-sub, broker-worker microservice projects',
          technology: ['docker', 'microservice', 'zeromq', 'jenkins', 'make', 'node'],
          sortOrder: 30
        }, {
          name:'xs-jenkins-blue',
          title:'Jenkins automated BlueOcean image builder',
          href: 'https://github.com/xybersolve/xs-jenkins-blue',
          description: 'Builds extensible workspace version of Jenkins BlueOcean, pushed to Docker Hub.',
          notes: 'Jenkins pipeline, docker image builder...',
          technology: ['jenkins', 'docker', 'make'],
          sortOrder: 35
        }, {
          name:'xs-janks',
          title:'Jenkins war managment script',
          href: 'https://github.com/xybersolve/xs-janks',
          description: 'Bash script to manage war deployment of Jenkins.',
          notes: 'Jenkins, start, stop, backup, restore, versions, etc...',
          technology: ['jenkins', 'war', 'bash'],
          sortOrder: 37
        }, {
          name:'Leads',
          title:'Angular Lead Management App',
          href: 'https://github.com/gmilligan/Leads',
          description: 'Manage and track leads.',
          notes: 'MEAN Fullstack, Angular 1.3 features: form validation, $q, etc...',
          technology: ['angular 1.3' , 'gulp', 'bootstrap 3.x', 'MEAN', 'mongodb', 'node', 'express 4.x'],
          sortOrder: 40
        }, {
          name:'xs-angular-cache-service',
          title:'Angular Cache Service',
          href: 'https://github.com/gmilligan/xs-angular-cache-service',
          description: 'Cache service enables angular project module & session persistence. Extends angular `$cacheFactory`, using HTML5 localStorage for persistence across sessions. Stores data (primitives) or objects. Test',
          notes: 'Test: Karma & Jasmine Unit testing',
          technology: ['angular 1.2' , 'karma', 'jasmine', 'grunt', 'html5'],
          sortOrder: 45
        }, {
          name:'xs-angular-action-buttons-directive',
          title:'Angular Action Button Directive',
          href: 'https://github.com/gmilligan/xs-angular-action-buttons-directive',
          description: 'Easy & configurable action buttons (BootStrap), include: New, Clone, Edit & Delete. Delete has automatic confirmation mechanism. Sizable, using: (xs, sm, md & lg)',
          notes: 'Demo, Test: Protractor e2e',
          technology: ['angular 1.2' , 'bootstrap 3.x', 'protractor', 'grunt'],
          sortOrder: 50
        }, {
          name:'jQM-MVC-Lazy-Loader',
          title:'jQuery Mobile Lazy Loading MVC',
          href: 'https://github.com/gmilligan/jQM-MVC-Lazy-Loader',
          description: 'Super lightweight MVC for jQuery Mobile that lazy loads modules. A handful of helper methods on the "app" object assist UI development.',
          notes: 'Demo',
          technology: ['jquery mobile 1.4', 'grunt'],
          sortOrder: 75
        }, {
          name:'mongowrap',
          title:'MongoDB Wrapper',
          href: 'https://github.com/gmilligan/mongowrap',
          description: 'Wraps native node mongoDB driver. Provides persistent authenticated connection and generic routines useful to building RESTful interfaces',
          notes: '',
          technology: ['mongodb', 'node', 'grunt'],
          sortOrder: 80
        }, {
          name:'gmilligan.github.io',
          title:'gmilligan.github.io',
          href: 'https://github.com/gmilligan/gmilligan.github.io',
          description: 'Angular github page, with code project links and photography slideshow.',
          notes: 'Gulp automation',
          technology: ['angular 1.3' ,'bootstrap 3.x', 'gulp'],
          sortOrder: 85
        }, {
          name:'xs-angular-ui-components',
          title:'Angular UI Components',
          href: 'https://github.com/gmilligan/xs-angular-ui-components',
          description: 'Handful of components to make it easier to build rich Angular apps.',
          notes: '',
          technology: ['angular 1.2' , 'grunt'],
          sortOrder: 90
        }, {
          name:'xs-dom-single-node-lib',
          title:'Speedy DOM Manipulation Library',
          href: 'https://github.com/gmilligan/xs-dom-single-node-lib',
          description: 'Speed oriented DOM manipulation library. For speedy targeted manipulating of single HTMLElement nodes',
          notes: 'Test: QUnit unit testing',
          technology: ['Raw JavaScript'],
          sortOrder: 95
        }, {
          name:'xs-angular-wizard',
          title:'Angular Wizard Widget',
          href: 'https://github.com/gmilligan/xs-angular-wizard/tree/v1.0',
          description: 'A simple but useful Angular directive to create wizards, with automatic save button and navigable breadcrumbs buttons.',
          notes: 'Demo',
          technology: ['angular 1.2' , 'bootstrap 3.x', 'grunt'],
          sortOrder: 100
        }

      ];

      return model;

    }]);

})(window, window.angular);
