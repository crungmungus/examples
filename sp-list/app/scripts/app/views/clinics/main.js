define(['app', 'text!templates/clinics/main.html'], function (app, template) {
  'use strict';

  var View = Backbone.View.extend({
    events : {

    },

    initialize : function () {
      this.template = template;
    }
  });

  return View;
});