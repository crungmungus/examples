define(['app','views/home/main'], function (app, MainView) {
  'use strict';

  var Presenter = Backbone.Marionette.Controller.extend({
    initialize : function (options) {
      this.view = new MainView();
      app.layout.main.show(this.view);
    }
  });

  return Presenter;
});