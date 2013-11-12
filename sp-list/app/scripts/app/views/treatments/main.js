/**
 * Main treatments view.
 * This view is intended to be used as housing for a number of sub views.
 */
define([
  'app',
  'views/treatments/list',
  'text!templates/treatments/main.html'
],
function (app, ListView, template) {
  'use strict';

  var View = Backbone.Marionette.Layout.extend({
    template : _.template(template),

    id : 'treatments',

    regions : {
      list : '#list'
    },

    initialize : function () {
      this.listView = new ListView({
        collection : this.collection
      });
    },

    onRender: function () {
      this.list.show(this.listView);
    }
  });

  return View;
});