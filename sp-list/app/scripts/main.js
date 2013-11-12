/*jshint browser: true, devel: true, plusplus: true, white: false, indent: 2 */

requirejs.config({
  paths: {
    text: 'vendor/text',
    presenters: 'app/presenters',
    routers : 'app/routers',
    models : 'app/models',
    collections : 'app/collections',
    views: 'app/views',
    templates : 'app/templates',
    underscore : 'vendor/underscore-min',
    jquery : 'vendor/jquery.min',
    backbone : 'vendor/backbone',
    subroute : 'library/backbone.subroute'
  },

  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'library/marionette/backbone.marionette': {
      deps: ['backbone'],
      exports: 'Backbone'
    },
    'library/backbone.subroute' : {
      deps: ['backbone'],
      exports: 'Backbone'
    },
    'library/backbone.stickit' : {
      deps: ['backbone'],
      exports: 'Backbone'
    },
    'library/backbone.courier' : {
      deps: ['backbone'],
      exports: 'Backbone'
    },
    'app' : {
      deps : [
        'backbone',
        'library/backbone.stickit',
        'library/backbone.subroute',
        'library/backbone.courier',
        'library/marionette/backbone.marionette'
      ]
    }
  }
});

/**
 *  The initialization of the application is separate from its execution.
 *  One place where all the components are created and wired up.
 *
 *  Routers and RequireJS break this pattern as you will see. Alternatively
 *  we could initialize all of the presenters in one place and put them into
 *  the app namespace.
 */
require(['app', 'routers/router', 'views/layout'], function(app, Router, Layout) {
  'use strict';

  app.addInitializer(function(options){
    app.layout = new Layout();
    app.layout.render();

    $('body').prepend(app.layout.el);
  });

  app.addInitializer(function(options){
    new Router();
    Backbone.history.start();
  });

  app.start();
});