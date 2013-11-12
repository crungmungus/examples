define(['app', 'presenters/treatments'], function (app, Presenter) {
  'use strict';

  var Router = Backbone.SubRoute.extend({
    routes : {
      '' : 'root'
    },

    initialize : function () {
      this.presenter = new Presenter();
    },

    root : function () {
      this.presenter.home();
    }
  });

  return Router;
});
