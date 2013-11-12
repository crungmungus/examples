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

  /**
   * Things get strange from here as I need to insert a number of sub views.
   */
  var View = Backbone.Marionette.Layout.extend({
    template : _.template(template),

    id : 'treatments',

    regions : {
      list : '#list'
    },

    initialize : function () {
      /**
       * At this point I have everything I need to create a 'list' sub view.
       */
      this.listView = new ListView({
        collection : this.collection
      });

      // And render it?
      this.list.show(this.listView);
    }
  });

  return View;
});