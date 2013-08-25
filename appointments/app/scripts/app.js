define([
	'views/AppView'
], 
function (AppView) {
  var App = function () {
  	var view = new AppView();
  	    view.render();
  };

  return App;
});