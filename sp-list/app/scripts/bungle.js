requirejs.config({
  baseUrl: 'scripts',

  paths: {
    text: 'vendor/text',
    presenters: 'presenters'
  },

  shim: {
  	'vendor/underscore-min': {
      exports: '_'
    },
    'vendor/backbone-min': {
      deps: ['vendor/underscore-min'],
      exports: 'Backbone'
    },
    'library/marionette/backbone.marionette': {
      deps: ['vendor/backbone-min'],
      exports: 'Marionette'
    },
    'library/backbone.stickit' : {
      deps: ['vendor/backbone-min'] 
    },
    'app': {
      deps: [
        'vendor/underscore-min', 
        'vendor/backbone-min',
        'library/backbone.stickit',
        'library/marionette/backbone.marionette'
      ]
    }
  }
});

require(['app'], function (App) {
  window.clinics = new App();
});