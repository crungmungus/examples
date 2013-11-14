define(['app'], function (app, ListItem, template) {
  'use strict';

  var View = Backbone.View.extend({
    tagName : 'ul',

    events : {
      'click li' : 'onLetterSelected'
    },

    initialize : function (options) {
      this.alphabet = app.utils.strings.alphabet();
    },

    onLetterSelected : function (e) {
      this.trigger('selected', e.target.value);
    },

    render : function () {
      _.each(this.alphabet, function(item) {
        this.$el.append('<li>' + item + '</li>');
      }, this);

      return this;
    }
  });

  return View;
});