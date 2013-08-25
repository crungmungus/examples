/**
 * In the past I've struggled with ways of getting sub-views  to work in a way that
 * fits in with backbone. This is by far the cleanest approach I've seen.
 * 
 * See: http://ianstormtaylor.com/rendering-views-in-backbonejs-isnt-always-simple/
 */
define(function(AppDialog) {
  var BaseView = Backbone.View.extend({
		assign : function (view, selector) {
		  view.setElement(this.$(selector)).render();
		},

		plugin : function (selector) {
			
		}
  });

  return BaseView;
});