define(function() {
  var NoResultPartialView = Backbone.View.extend({
    tagName: 'li',

    initialize : function () {
      this.render();
    },

    render : function () {
      this.$el.html('No contacts found. <a id="#create-contact" href="#">Create new contact?</a>');
      return this.$el;
    }
  });

  return NoResultPartialView;
});