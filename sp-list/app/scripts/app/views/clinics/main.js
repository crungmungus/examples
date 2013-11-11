define(['app', 'text!templates/clinics/main.html'], function (app, template) {
  'use strict';

  var View = Backbone.View.extend({
    events : {

    },

    initialize : function () {
      this.template = template;
    },

    render : function () {
    	this.$el.html(_.template(this.template));
    	return this.$el;
    }
  });

  return View;
});