/**
 * The supervising presenter pattern attempts to manage "complex" UI interactions.
 */
define(['app', 'views/treatments/main', 'services/treatments'], function (app, MainView, service) {
  'use strict';

  var Presenter = Backbone.Marionette.Controller.extend({
    initialize : function () {
      this.view = new MainView({
        collection : new Backbone.Collection(procedures)
      });

      this.listenTo(this.view, 'saved', this.save);
    },

    save : function () {
      var op = service.save();
    }
  });

  return Presenter;
});