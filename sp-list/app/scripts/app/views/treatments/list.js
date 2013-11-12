/**
 * A CompositeView extends from CollectionView to be used as a composite view for scenarios where it should
 * represent both a branch and leaf in a tree structure, or for scenarios where a collection needs to be
 * rendered within a wrapper template.
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
    itemViewContainer : '.items'
  });

  return View;
});