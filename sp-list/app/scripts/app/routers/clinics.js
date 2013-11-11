define(['app'], function (app) {
  var Router = Backbone.SubRoute.extend({
  	initialize : function () {
  		console.log('wahey!');
  	}
  });

  return Router;
});
