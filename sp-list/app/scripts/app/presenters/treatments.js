/**
 * The supervising presenter pattern attempts to manage "complex" UI interactions.
 */
define(['app', 'views/treatments/main'], function (app, MainView) {
  'use strict';

  var Presenter = Backbone.Marionette.Controller.extend({
    initialize : function () {
      this.view = new MainView({
        collection : new Backbone.Collection(treatments)
      });
    },

    home : function () {
      app.layout.main.show(this.view);
    }
  });

  return Presenter;
});