define(['app', 'views/treatments/main', 'presenters/treatments'], function (app, View, Presenter) {
  'use strict';

  var Router = Backbone.SubRoute.extend({
    routes : {
      '' : 'root'
    },

    root : function () {
      var presenter = new Presenter({
        view : new View()
      });
    }
  });

  return Router;
});
