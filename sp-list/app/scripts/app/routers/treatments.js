define(['app', 'presenters/treatments'], function (app, presenter) {
  'use strict';

  var Router = Backbone.SubRoute.extend({
    routes : {
      '' : 'root'
    },

    root : function () {
      presenter.home();
    }
  });

  return Router;
});
