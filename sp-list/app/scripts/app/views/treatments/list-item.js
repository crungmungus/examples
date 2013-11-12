/**
 * A CompositeView extends from CollectionView to be used as a composite view for scenarios where it should
 * represent both a branch and leaf in a tree structure, or for scenarios where a collection needs to be
 * rendered within a wrapper template.
 */
define(['app', 'text!templates/treatments/list-item.html'], function (app, template) {
  'use strict';

  var View = Backbone.Marionette.CompositeView.extend({
    tagName : 'li',
    template : _.template(template)
  });

  return View;
});