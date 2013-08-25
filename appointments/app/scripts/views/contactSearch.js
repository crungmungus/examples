define(['text!templates/search.html'], function(template) {
  var Search = Backbone.View.extend({
  	initialize : function () {
  		this.url = 'http://hidden-oasis-1864.herokuapp.com/contacts';
  	}

  	events : {
  		'keyup 	input[name="contacts"]' : 'onKeyUp'
  	}

  	onKeyUp : function (e) {
  		console.log(e);
  	}
  });

  return Search;
});