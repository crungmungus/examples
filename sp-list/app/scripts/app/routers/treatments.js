define(['app', 'presenters/treatments.list'], function (app, ListPresenter) {
  'use strict';

  var Router = Backbone.SubRoute.extend({
    routes : {
      '' : 'root'
    },

    root : function () {
      this.presenter = new ListPresenter();
    }
  });

  return Router;
});