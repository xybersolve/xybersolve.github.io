'use strict';

var gulp        = require('gulp')
  , gutil       = require('gulp-util')
  , gulpIf      = require('gulp-if')
  , install     = require('gulp-install')
  , clean       = require('gulp-clean')
  , jshint      = require('gulp-jshint')
  , concat      = require('gulp-concat')
  , uglify      = require('gulp-uglify')
  , cssmin      = require('gulp-cssmin')
  , gzip        = require('gulp-gzip')
  , stripDebug  = require('gulp-strip-debug')
  , htmlreplace = require('gulp-html-replace')
  , minifyhtml  = require('gulp-minify-html')
  , sourcemaps  = require('gulp-sourcemaps')
  , stylish     = require('jshint-stylish')
  , less        = require('gulp-less')
  , runSequence = require('run-sequence')
  , rename      = require('gulp-rename')
  , del         = require('del')
  , zip         = require('gulp-zip');

var project = 'gmilligan@github'
  , verbose = true
  , environ = process.env.NODE_ENV || 'development'
  , useGzip  = false
  , useSourceMap = false;

var paths = {
  base: './',
  app: './app/',
  css: './css/',
  libs: './vendor/',
  image: './image/',
  build: './build/',
  archives: './archives/',
  node: './node_modules/',
  git: './.git/'
};

var filePaths = {
  lint :[
    './gulpfile.js',
    paths.app + '*.js',
    paths.app + '**/*.js',
    '!' + paths.libs + '**/*.js'
  ],
  clean: {
    pre:  [
      './build//bundle.js',
      './build/app.js',
      './build/app.css',
      './*.css'
    ],
    post: [
      './*.css' // clean up artifacts
    ],
    js: [
      './app.js',
      './bundle.js'
    ]
  },
  libs: [
    paths.libs + 'jquery/dist/jquery.js',
    paths.libs + 'bootstrap/dist/js/bootstrap.js',
    paths.libs + 'angular/angular.js',
    paths.libs + 'angular-route/angular-route.js',
    paths.libs + 'angular-animate/angular-animate.js',
    paths.libs + 'angular-ui/build/angular-ui.js',
    paths.libs + 'angular-ui/build/angular-ui-ieshiv.js',
    paths.libs + 'angular-ui-router/release/angular-ui-router.js'
  ],
  css: [
    paths.libs + 'bootstrap/dist/css/bootstrap.css',
    paths.css + 'styles.css'
  ],
  less: [
    paths.css + '*.less'
  ],
  app: [
    paths.app + 'app.js', // module defs are here
    paths.app + '**/*.js'
  ],
  build: [
    paths.build + '*'
  ],
  archive: [
    './**/*.*'
  ],
  excludes: [ // archive excludes - reusable??
    '!.git/**/*',
    '!node_modules/**/*',
    '!vendor/**/*',
    '!libs/**/*',
    '!image/**/*',
    '!img/**/*',
    '!build/**/*',
    '!archives/**/*',
    '!temp/**/*',
    '!tmp/**/*',
    '!npm-debug.log',
    '!nohup.out',
    '!nohup.err'
  ]
};

gutil.log('Gulp running in: ' + environ);
gulp
  // ------------------------------------------------
  // JS Lint Tasks
  //
  .task('clean:pre', function(cb) {
    del(filePaths.clean.pre, function() {
      cb(null);
    });
  })
  .task('clean:post', function(cb) {
    del(filePaths.clean.post, function() {
      cb(null);
    });
  })
  .task('clean:js', function(cb) {
    del(filePaths.clean.js, function() {
      cb(null);
    });
  })

  // ------------------------------------------------
  // JS Lint Tasks
  //
  .task('jshint', function() {
    return gulp
      .src(filePaths.lint)
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter('default'));
  })

  // ------------------------------------------------
  // JS Build Tasks
  //
  .task('js', function() {
    return gulp
      .src(filePaths.libs.concat(filePaths.app))
      .pipe(gulpIf(useSourceMap===true, sourcemaps.init()))
      .pipe(concat('bundle.js'))
      .pipe(gulpIf(environ==='production', stripDebug()))
      .pipe(gulpIf(environ==='production', uglify({mangle:false})))
      .pipe(gulpIf(useGzip===true, gzip()))
      .pipe(rename('app.js'))
      .pipe(gulpIf(useSourceMap===true, sourcemaps.write()))
      .pipe(gulp.dest('build/'));
  })

  // ------------------------------------------------
  // CSS Build Tasks
  //
  .task('less', function() {
    return gulp
      .src(filePaths.less)
      .pipe(less())
      .pipe(gulp.dest(paths.css));
  })
  .task('css', ['less'], function() {
    return gulp
      .src(filePaths.css)
      .pipe(concat('app.css'))
      .pipe(gulpIf(environ==='production', cssmin()))
      .pipe(gulpIf(useGzip===true, gzip()))
      .pipe(gulp.dest('./build'));
  })

  // ------------------------------------------------
  // Archive Tasks
  //
  .task('archive:project', function() {
    var filename = project + '-' + getTodayAsString() + '.zip';
    return gulp
      .src(filePaths.excludes.concat(filePaths.archive))
      .pipe(zip(filename))
      .pipe(gulp.dest(paths.archives));
  })

  .task('archive:build', function() {
    var filename = 'build-' + getTodayAsString() + '.zip';
    return gulp
      //.src(filePaths.excludes.concat(filePaths.archive))
      .src(filePaths.build)
      .pipe(zip(filename))
      .pipe(gulp.dest(paths.archives));
  })

  // ------------------------------------------------
  // Debug Tasks
  //
  .task('show:filePaths', function() {
    gutil.log('filePaths.clean: ', filePaths.clean);
    gutil.log('filePaths.libs: ', filePaths.libs);
    gutil.log('filePaths.app: ', filePaths.app);
    gutil.log('filePaths.less: ', filePaths.less);
    gutil.log('filePaths.css: ', filePaths.css);
    gutil.log('filePaths.archive: ', filePaths.archive);
  })

  // ------------------------------------------------
  // Watch Tasks
  //
  .task('watch', function() {
    gulp.watch(filePaths.less, ['less']);
    gulp.watch(filePaths.app, ['js']);
  })

  // ------------------------------------------------
  // Composite Tasks
  //
  .task('build:js', ['clean:js', 'js'], function() {
    gutil.log('build:js complete');
  })
  .task('build:all', ['clean:pre', 'jshint', 'js', 'css', 'clean:post'], function(){
    gutil.log('build:all complete');
  })
  .task('default', ['build:all', 'watch'], function() {

  });

function logTask(task, inComing, outGoing ){
  if(verbose){
    gutil.log('Task: ', task);
    gutil.log('Read: ', inComing);
    gutil.log('Write: ', outGoing);
  }
}

function getTodayAsString(){
  var now = new Date();
  function padWithZero(item){
    return ('0' + item).slice(-2);
  }
  return now.getFullYear() + padWithZero(now.getMonth() + 1) + padWithZero(now.getDate());
}
