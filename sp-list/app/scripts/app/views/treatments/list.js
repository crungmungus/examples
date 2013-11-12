/**
 * Composite view that wraps around a list of treatments.
 */
define([
  'app',
  'views/treatments/list-item',
  'text!templates/treatments/list.html'
],
function (app, ListItem, template) {
  'use strict';

  var View = Backbone.Marionette.CompositeView.extend({
    id : 'treatment-list',

    template : _.template(template),

    itemView : ListItem,

    itemViewContainer : '.items',

    events : {
      'itemview:click' : 'selected'
    },

    selected : function () {
      console.log(arguments);
    },

    initialize : function () {
      this.listenTo(this, 'itemview:selected', function () {
        console.log('test');
      })
    }
  });

  return View;
});