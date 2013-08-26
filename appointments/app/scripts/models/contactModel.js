define(function() {
  var ContactModel = Backbone.Model.extend({
  	defaults : {
	   'name'  : null
  	}
  });

  return ContactModel;
});