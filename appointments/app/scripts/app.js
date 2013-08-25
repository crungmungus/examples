define([
	'views/appView',
	'collections/aptCollection'
], 
function (AppView, AptCollection) {
  var App = function () {
  	var view, collection = new AptCollection();

  	view = new AppView({
  		collection : collection
  	});
  	
  	view.render();
  };

  return App;
});