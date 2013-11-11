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
      deps: ['backbone']
    },
    'library/backbone.subroute' : {
      deps: ['backbone']
    },
    'library/backbone.stickit' : {
      deps: ['backbone']
    }
  }
});