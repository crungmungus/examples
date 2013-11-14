/**
 * Hybrid, main treatments view.
 * This view is intended to be used as housing for a number of sub views and should
 * mediate between the presenter, itself and sub-views it contains.
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

    onMessages : {
      'selected' : 'onSelected'
    },

    initialize : function (options) {
      Backbone.Courier.add(this);

      this.listView = new ListView({
        collection : this.collection
      });

      app.layout.main.show(this.render());
    },

    onSelected : function (e) {
      this.trigger('saved');
    },

    onSaved : function (e) {
      console.log(e);
    },

    onRender: function () {
      this.list.show(this.listView);
    }
  });

  return View;
});