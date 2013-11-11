requirejs.config({
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
    }
  }
});