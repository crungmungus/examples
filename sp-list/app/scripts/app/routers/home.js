define(['app', 'presenters/home.main'], function (app, Presenter) {
  'use strict';

  var Router = Backbone.SubRoute.extend({
    routes : {
      '' : 'root'
    },

    root : function () {
      this.presenter = new Presenter();
    }
  });

  return Router;
});
