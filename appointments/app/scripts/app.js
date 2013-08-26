define([
	'views/AppView'
], 
function (AppView) {
  var App = function () {
  	var view, vent = _.extend({}, Backbone.Events);

  	view = new AppView({
  		vent : vent
  	}).render();
  };

  return App;
});