(function (window, angular, undefined) {  'use strict';

// "fas fa-terminal"
// "fab fa-aws"
// "fab fa-jenkins"
// "fab fa-node-js"
// "fab fa-docker"
// "fab fa-angular"
// "fas fa-database"
// "fab fa-react"
// "fab fa-btc"
  angular
    .module('app')
    .factory('codingSvc', [function () {
      var model = {};
      model.projects = [
        {
          name:'antsy',
          fa: 'fas fa-cloud',
          title:'Antsy - Manage Ansible projects, setup and configuration',
          href: 'https://github.com/xybersolve/antsy',
          description: 'Antsy - Manage Ansible projects, setup and configuration',
          notes: 'Install, setup, roles, sync ansible code to bastion server ...',
          technology: ['bash', 'script', 'ansible'],
          sortOrder: 5
        }, {          name:'xs-jenkins-blue',
          fa: 'fab fa-docker',
          title:'Jenkins automated BlueOcean image builder',
          href: 'https://github.com/xybersolve/xs-jenkins-blue',
          description: 'Builds extensible workspace version of Jenkins BlueOcean, pushed to Docker Hub.',
          notes: 'Jenkins pipeline, docker image builder...',
          technology: ['jenkins', 'docker', 'make'],
          sortOrder: 10
        }, {
          name:'terraform_gsuite_aws_module',
          fa: 'fab fa-aws',
          title:'Custom Terraform Module to map DNS for corporate email via GSuite.',
          href: 'https://github.com/xybersolve/terraform_gsuite_aws_module',
          description: 'Custom Terraform module automates Route53 MX, TXT & CNAME record creation for Google Gsuite email and application subdomains.',
          notes: 'Terraform module for easy 3rd party domain email service, via Google...',
          technology: ['terraform', 'AWS', 'Route53', 'gsuite', 'google'],
          sortOrder: 5
        }, {

          name:'tf',
          fa: 'fab fa-aws',
          title:'Terraform helper script. Simplifies and ensures consistency in Terraform cli commands.',
          href: 'https://github.com/xybersolve/xs-tf',
          description: 'Bash helper script, for Terraform file based state projects. Simplifies and shortens cli commands.',
          notes: 'Terraform validate, init, plan, apply, destroy wrapper...',
          technology: ['terraform', 'bash'],
          sortOrder: 15
        }, {
          name:'jinks',
          fa: 'fab fa-jenkins',
          title:'Jenkins docker managment script',
          href: 'https://github.com/xybersolve/jinks',
          description: 'Bash script to manage docker blueocean deployment.',
          notes: 'Jenkins, up, down, backup, restore, logs, ssh...',
          technology: ['jenkins', 'docker', 'compose', 'make', 'bash'],
          sortOrder: 20
        }, {
          name:'terraform_r53_web_host_module',
          fa: 'fab fa-aws',
          title:'Terraform module wraps Route53 creation host zone and website records',
          href: 'https://github.com/xybersolve/terraform_r53_web_host_module',
          description: 'Creates host zone, NS and A records for site and www-site',
          notes: 'Can be used to map an AWS resources for domain registered on non-AWS registror...',
          technology: ['Terraform', 'AWS', 'Route53'],
          sortOrder: 23
        }, {
          name:'zeromq-request-response-rest',
          fa: 'fab fa-node-js',
          title:'ZeroMQ Request/Response for a REST service',
          href: 'https://github.com/xybersolve/xs-zeromq-req-res-rest',
          description: 'Typical intra-microservice communication using ZeroMQ, exposing REST endpoints',
          notes: 'Promise based request service, microservices, REST...',
          technology: ['nodeJS', 'docker', 'microservices', 'zeromq', 'jenkins', 'make'],
          sortOrder: 25
        }, {
          name:'xs-zeromq-node-base',
          fa: 'fab fa-docker',
          title:'ZeroMQ and node docker base image builder',
          href: 'https://github.com/xybersolve/xs-zeromq-node-base',
          description: 'ZeroMQ node base image provides node based socket communications between microservices, for lightweight collaboration',
          notes: 'ZeroMQ node base image, consumers: req-rel, pub-sub, broker-worker microservice projects',
          technology: ['docker', 'nodeJS','microservices', 'zeromq', 'jenkins', 'make'],
          sortOrder: 30
        }, {
          name:'terraform_data_source_modules',
          fa: 'fab fa-aws',
          title:'Custom Terraform Modules to lookup AWS or extant resources.',
          href: 'https://github.com/xybersolve/terraform-data-source-modules',
          description: 'These lookup data modules are useful when one needs to grab existing resources ids or pull AMI Ids.',
          notes: 'Terraform data sources for resource lookup...',
          technology: ['terraform', 'AWS'],
          sortOrder: 35
        // }, {
        //   name:'zeromq-push-pull',
        //   fa: 'fab fa-node-js',
        //   title:'ZeroMQ Push/Pull for REST service',
        //   href: 'https://github.com/xybersolve/xs-zeromq-push-pull',
        //   description: 'ZeroMQ intra-microservice communication push/pull examples',
        //   notes: 'Promise based request service, microservices...',
        //   technology: ['zeromq', 'nodeJS', 'microservices', 'docker', 'make'],
        //   sortOrder: 30

        }, {
          name:'terraform-s3-subdomain',
          fa: 'fab fa-aws',
          title:'Terraform S3 Static Website',
          href: 'https://github.com/xybersolve/terraform-s3-subdomain',
          description: 'Terraform service to create static S3 website, with Route53 subdomain & www records',
          notes: 'Terraform: AWS, S3, Route53 for a quick and easy static website as subdomain',
          technology: ['terraform', 'AWS', 'S3', 'Route53', 'bash'],
          sortOrder: 40
        }, {
          name:'CryptoScanner-react-client',
          fa: 'fab fa-react',
          title:'Crypto Currency scanner (React), finds hot trading coins based on increasing volume.',
          href: 'https://github.com/xybersolve/CryptoScanner-client',
          description: 'React client takes leverages Node microservices, to scrape cryptocurrency trading sites and interact with Mongo DB.',
          notes: 'React app is webpack built in Docker container, and pushed to image repository...',
          technology: ['React', 'node', 'webpack'],
          sortOrder: 45
        }, {
          name:'xs-janks',
          fa: 'fab fa-jenkins',
          title:'Jenkins war managment script',
          href: 'https://github.com/xybersolve/xs-janks',
          description: 'Bash script to manage war deployment of Jenkins.',
          notes: 'Jenkins, start, stop, backup, restore, versions, etc...',
          technology: ['jenkins', 'war', 'bash'],
          sortOrder: 55
        }, {
          name:'xs-checkbox',
          fa: 'fab fa-react',
          title:'React checkbox component.',
          href: 'https://github.com/xybersolve/xs-checkbox',
          description: 'React checkbox, enables: user customizable icons, check/unchecked label text and return values',
          notes: 'React component enables customization of HTML form type checkbox and returns expected e.target object for controlled forms',
          technology: ['React', 'npm', 'webpack'],
          sortOrder: 60
        }, {
          //https://github.com/xybersolve/xs-checklist
          name:'xs-checklist',
          fa: 'fab fa-react',
          title:'React checklist component.',
          href: 'https://github.com/xybersolve/xs-checklist',
          description: 'React checklist, leverage Xybersolve "xs-checkbox" into lists of checkboxs',
          notes: 'React component enables lists of customized checkboxs (i.e, icons, labels, text and return values)',
          technology: ['React', 'npm', 'webpack'],
          sortOrder: 65
        }, {
          name:'xybersolve.io',
          fa: 'fab fa-angular',
          title:'xybersolve.io',
          href: 'https://github.com/xybersolve/xybersolve.github.io',
          description: 'Angular github page, with code project links and photography slideshow. Currently published as S3 static website',
          notes: 'Gulp automation',
          technology: ['jenkins', 'docker', 'AWS', 'S3', 'make', 'angular 1.3' ,'bootstrap 3.x', 'gulp'],
          sortOrder: 68
        }, {
          name:'Leads',
          fa: 'fab fa-angular',
          title:'Angular Lead Management App',
          href: 'https://github.com/gmilligan/Leads',
          description: 'Manage and track leads.',
          notes: 'MEAN Fullstack, Angular 1.3 features: form validation, $q, etc...',
          technology: ['angular 1.3' , 'gulp', 'bootstrap 3.x', 'MEAN', 'mongodb', 'nodeJS', 'express 4.x'],
          sortOrder: 70
        }, {
          name:'xs-angular-cache-service',
          fa: 'fab fa-angular',
          title:'Angular Cache Service',
          href: 'https://github.com/gmilligan/xs-angular-cache-service',
          description: 'Cache service enables angular project module & session persistence. Extends angular `$cacheFactory`, using HTML5 localStorage for persistence across sessions. Stores data (primitives) or objects. Test',
          notes: 'Test: Karma & Jasmine Unit testing',
          technology: ['angular 1.2' , 'karma', 'jasmine', 'grunt', 'html5'],
          sortOrder: 75
        }, {
          name:'xs-angular-action-buttons-directive',
          fa: 'fab fa-angular',
          title:'Angular Action Button Directive',
          href: 'https://github.com/gmilligan/xs-angular-action-buttons-directive',
          description: 'Easy & configurable action buttons (BootStrap), include: New, Clone, Edit & Delete. Delete has automatic confirmation mechanism. Sizable, using: (xs, sm, md & lg)',
          notes: 'Demo, Test: Protractor e2e',
          technology: ['angular 1.2' , 'bootstrap 3.x', 'protractor', 'grunt'],
          sortOrder: 80
        }, {
          name:'mongowrap',
          fa: 'fas fa-database',
          title:'MongoDB Wrapper',
          href: 'https://github.com/gmilligan/mongowrap',
          description: 'Wraps native node mongoDB driver. Provides persistent authenticated connection and generic routines useful to building RESTful interfaces',
          notes: '',
          technology: ['mongodb', 'node', 'grunt'],
          sortOrder: 85
        }, {
          name:'xs-angular-ui-components',
          fa: 'fab fa-angular',
          title:'Angular UI Components',
          href: 'https://github.com/gmilligan/xs-angular-ui-components',
          description: 'Handful of components to make it easier to build rich Angular apps.',
          notes: '',
          technology: ['angular 1.2' , 'grunt'],
          sortOrder: 90
          }, {
          name:'xs-angular-wizard',
          fa: 'fab fa-angular',
          title:'Angular Wizard Widget',
          href: 'https://github.com/gmilligan/xs-angular-wizard/tree/v1.0',
          description: 'A simple but useful Angular directive to create wizards, with automatic save button and navigable breadcrumbs buttons.',
          notes: 'Demo',
          technology: ['angular 1.2' , 'bootstrap 3.x', 'grunt'],
          sortOrder: 95
        }

      ];

      return model;

    }]);

})(window, window.angular);
