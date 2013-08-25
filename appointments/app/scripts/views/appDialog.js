define(['text!templates/dialog.html'], function(template, SearchView) {
  var Dialog = Backbone.View.extend({
  	el : '#dialog',

  	template : _.template(template),

  	initialize : function () {
   		this.$el.modal({
    		backdrop : true,
    		keyboard : true,
    		show : false
    	});

			this.$el.append(template);

			this.url = 'http://hidden-oasis-1864.herokuapp.com/contacts';
    },

    events : {
  		'keyup #contact' : 'onKeyUp',
  		'click #results li' : 'onContactSelect'
  	},

  	onKeyUp : function (e) {  	
  		var results = this.$el.find('#results');
  		if(e.target.value.length >= 3) {
	  		$.ajax({
	  			url : this.url + '?q=' + e.target.value
	  		}).done(function (data) {
	  			results.empty();
	  			if(data.length !== 0) {	  				
		  			_.each(data, function (contact) {
		  				results.append('<li data-id="'+contact.id+'">'+contact.name+'<br />' + contact.email + '</li>')
		  			});
		  		} else {
		  			results.append('Nothing found ... <a href="#">Create New</a>');
		  		}
	  		});
	  	} else {
				results.empty();
				
	  	}
  	},

  	onContactSelect : function () {
  		console.log('selected contact!')
  	},

    render : function (startDate, endDate) {
    	var start, end, date;

    	// Poor way of updating a pre-rendered template. But alas there's no magical data binding.
    	start = moment(startDate).format('h:mma');
    	end   = moment(endDate).format('h:mma');
    	date  = moment(startDate).format('ddd Do MMM');

    	this.$el.find('.start').text(start);
    	this.$el.find('.end').text(end);
    	this.$el.find('.date').text(date);

    	this.$el.modal('toggle');
    }
  });

  return Dialog;
});