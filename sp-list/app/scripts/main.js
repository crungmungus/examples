/*jshint browser: true, devel: true, plusplus: true, white: false, indent: 2 */

requirejs.config({
  paths: {
    text: 'vendor/text',
    presenters: 'app/presenters',
    services: 'app/services',
    routers : 'app/routers',
    models : 'app/models',
    collections : 'app/collections',
    views: 'app/views',
    underscore : 'vendor/underscore-min',
    jquery : 'vendor/jquery.min',
    backbone : 'vendor/backbone',
    subroute : 'library/backbone.subroute',
    director : 'library/director'
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
    'library/utils' : {
      deps: ['underscore'],
    },
    'app' : {
      deps : [
        'backbone',
        'library/backbone.stickit',
        'library/backbone.subroute',
        'library/backbone.courier',
        'library/marionette/backbone.marionette',
        'director'
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
require(['app', 'library/utils', 'routers/router', 'views/layout'], function(app, utils, Router, Layout) {
  'use strict';

  app.addInitializer(function(options){
    app.layout = new Layout();
    app.layout.render();


    app.utils = utils;

    app.navigation = {};

    $('body').prepend(app.layout.el);
  });

  app.addInitializer(function(options){
    new Router();
    Backbone.history.start();
  });

  app.start();
});