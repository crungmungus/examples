requirejs.config({
  paths: {
    text: 'vendor/text',
    presenters: 'app/presenters',
    routers : 'app/routers',
    models : 'app/models',
    collections : 'app/collections',
    views: 'app/views',
    underscore : 'vendor/underscore-min',
    jquery : 'vendor/jquery.min',
    backbone: 'vendor/backbone',
    subroute: 'library/backbone.subroute'
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
    'app' : {
    	deps : [
    		'backbone',
	      'library/backbone.stickit',
	      'library/backbone.subroute',
	      'library/marionette/backbone.marionette'
    	]
    }
  }
});

/**
 *  The initialization of the application is separate from its execution.
 *	One place where all the components are created and wired up.
 */
require(['app', 'routers/router'], function(app, Router) {
	app.initialize(function () {
		new Router();
	});
});