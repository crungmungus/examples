/**
 * Event Dialog Component.
 * Used to create a new appointment linked against a valid contact.
 */
define(['text!templates/dialog.html', 'library/BaseView', 'views/SearchView', 'models/EventModel'], 
	function(template, BaseView, SearchView, EventModel) {
  	var Dialog = BaseView.extend({
  		el : '#dialog',

  		template : _.template(template),

  		events : {
  			'click #save' : 'onSave'
  		},

	  	initialize : function () {	
	  		_.bindAll(this, 'onSave');

	  		this.$el.modal({
	    		backdrop : true,
	    		keyboard : true,
	    		show : false
    		});  	

	   		this.search = new SearchView();
	   	},

	   	onSave : function () {
	   		var isValid = false, 
	   				contact_id, note, start, end, duration, appointment;
	   		
	   		// TODO: Tidy this up. Could build a nice form->model mapper.
	   		contact_id = parseInt(this.$el.find('#contact_id').val(), 10);
	   		note  = this.$el.find('#note').val();
	   		start = moment(this.$el.find('#start').attr('data-start'));
				end   = moment(this.$el.find('#end').attr('data-end'));

	   		// Basic Validation. Could be fortified.
	   		if(_.isNumber(contact_id) && !isNaN(contact_id)) {
	   			if(start.isValid() && end.isValid()) {
	   				duration = end.diff(start, 's');
	  				isValid  = true;
	   			}
	   		}	   		

	   		// Save if valid.
	   		if(isValid === true) {
					appointment = new EventModel({
		   			'contact_id' : contact_id,
		   			'note' : note,
		   			'start_time' : start.format('YYYY-MM-DDTHH:mm:ss.SSSZZ'),
		   			'duration' : duration
		   		});

					this.collection.create(appointment);
		   	} else {
		   		console.log('invalid data');
		   	}
	   	},

    	render : function (model) {
    		this.$el.html(this.template(model));
    		this.$el.modal('toggle');

    		this.assign(this.search, '#search');
    		return this;
    	}
  });

  return Dialog;
});