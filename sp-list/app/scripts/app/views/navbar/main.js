define(['app', 'text!templates/navbar/main.html'], function (app, template) {
  'use strict';

  var View = Backbone.View.extend({
    events : {

    },

    className : 'navbar navbar-fixed-top navbar-inverse',

    role : 'navigation',

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