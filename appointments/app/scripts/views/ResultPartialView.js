define(function() {
  var ResultPartialView = Backbone.View.extend({
    tagName: 'li',
    
    className : 'contact',

    initialize : function () {
      this.render();
    },

    render : function () {
      this.$el.attr('data-id', this.model.get('id'));
      this.$el.text(this.model.get('name'));
      return this;
    }
  });

  return ResultPartialView;
});