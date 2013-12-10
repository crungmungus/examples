/**
 * Options:
 */
var Messenger = Backbone.View.extend({
  /**
   */
  initialize : function (options) {
    options = options || {};

    _.defaults(options, {
      template : null,
      gateway  : null,
    });

    _.extend(this, _.pick(options, 'template'));

    this.options = options;
  },



  /**
   */
  render : function () {
    var template = _.template(this.template);
    return this.$el;
  }
});