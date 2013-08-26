/**
 * Event Dialog Component.
 * Used to create a new appointment linked against a valid contact.
 */
define([
	'text!templates/dialog.html', 
	'library/BaseView', 
	'views/CreateEventView'
], 
function(template, BaseView, CreateEventView) {
  var Dialog = BaseView.extend({
		el : '#dialog',

		template : _.template(template),

  	initialize : function () {	
      _.bindAll(this, 'onAppointmentCreated');

  		this.$el.modal({
    		backdrop : true,
    		keyboard : true,
    		show : false
  		});

      this.vent = this.options.vent;
      this.vent.bind('appointmentCreated', this.onAppointmentCreated);

  		this.createEvent = new CreateEventView({
        vent : this.vent,
  			collection : this.collection
  		});
   	},

    onAppointmentCreated : function () {
      this.$el.modal('hide');
    },

  	render : function (model) {
  		this.$el.html(this.template(model));
  		this.$el.modal('toggle');

  		this.assign(this.createEvent, '#event-form', this.events);
  		return this;
  	}
  });

  return Dialog;
});