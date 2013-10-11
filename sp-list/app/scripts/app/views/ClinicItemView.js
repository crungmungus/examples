define(function (require) {
  return Marionette.ItemView.extend({
	  tagName : 'li',
	  events  : {
	    'click' : function () {
	      this.trigger('selected')
	    }
	  },

	  template : function (model) {
	    return model.name;
	  }
	});
});

