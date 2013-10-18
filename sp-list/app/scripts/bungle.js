requirejs.config({
  baseUrl: 'scripts',

  paths: {
    text: 'vendor/text',
    presenters: 'app/presenters',
    routers : 'app/routers',
    models : 'app/models',
    collections : 'app/collections',
    views: 'app/views'
  },

  shim: {
    'vendor/jquery-2.0.3.min': {
      exports: '$'
    },
  	'vendor/underscore-min': {
      exports: '_'
    },
    'vendor/backbone': {
      deps: ['vendor/underscore-min'],
      exports: 'Backbone'
    },
    'library/marionette/backbone.marionette': {
      deps: ['vendor/backbone'],
      exports: 'Marionette'
    },
    'library/backbone.stickit' : {
      deps: ['vendor/backbone'] 
    },
    'library/backbone.subroute' : {
      deps: ['vendor/backbone'],
      exports: 'Backbone.SubRoute'
    },
    'app': {
      deps: [
        'vendor/jquery-2.0.3.min', 
        'vendor/underscore-min', 
        'vendor/backbone',
        'library/backbone.stickit',
        'library/backbone.subroute',
        'library/marionette/backbone.marionette'
      ]
    }
  }
});

require(['app', 'routers/main'], function (app, MainRouter) { 
  app.expose('vent', _.extend({}, Backbone.Events));

  // Pass in an initialization function to be run.
  app.initialize(function () {    
    var router = require();

    this.vent.trigger('initialized');
  });
});