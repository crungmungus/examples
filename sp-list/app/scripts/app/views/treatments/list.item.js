define(['app', 'text!templates/treatments/list-item.html'], function (app, template) {
  'use strict';

  var View = Backbone.Marionette.CompositeView.extend({
    tagName : 'li',
    template : _.template(template),

    events: {
      'click': 'onItemSelected',
    },

    initialize : function () {
      Backbone.Courier.add(this);
    },

    onItemSelected : function (e) {
      this.spawn( "selected", e);
    }
  });

  return View;
});