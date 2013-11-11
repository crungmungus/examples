define(['app'], function (app) {
  'use strict';

  var Presenter = Backbone.Marionette.Controller.extend({
    initialize : function (options) {
      this.view = options.view;
      app.layout.main.show(this.view);
    }
  });

  return Presenter;
});