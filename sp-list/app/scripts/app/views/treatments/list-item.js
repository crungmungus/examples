define(['app', 'text!templates/treatments/list-item.html'], function (app, template) {
  'use strict';

  var View = Backbone.Marionette.CompositeView.extend({
    tagName : 'li',
    template : _.template(template)
  });

  return View;
});