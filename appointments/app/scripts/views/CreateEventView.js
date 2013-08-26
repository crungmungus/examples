/**
 * Event Creation View.
 * This view sits inside the main dialog and presents different feature sets depending
 * on user interactions. Both searching and contact creation views are loaded in here.
 *
 * Side note on event aggregator:
 * I could of created a dialog specific events aggregator here instead of in the main 
 * app which might of made more sense. I do however like the idea of having something
 * application-level as well.
 */
define([
	'library/BaseView',
	'views/CreateContactView',
	'views/SearchView'
], 
function(BaseView, CreateContactView, SearchView) {
  var CreateEventView = BaseView.extend({
  	events : {
			'click #save' : 'save',
			'click #add'  : 'showContactForm'
		},

  	initialize : function () {
  		_.bindAll(this, 'save', 'showContactForm', 'onContactCreated', 'onAppointmentCreated');
      
      // Event aggregator.
      this.vent = this.options.vent; 
  		this.vent.bind("createContact", this.showContactForm);
      this.vent.bind("contactCreated", this.onContactCreated);

      // Create a new inner search view.
      this.search = new SearchView({ vent: this.vent});
  	},

    /**
     * Display the contact creation form from within the main dialog.
     * Things get a bit blurry here because I am not only relying on the event aggregator
     * but also passing template data in via the constructor. 
     *
     * FIXME: Watch out for memory leaks here with use of 'assign' as I'm not properly 
     * destroying the view!
     */
  	showContactForm : function (name) {
      var create = new CreateContactView({ 
        vent : this.vent,
        data : {
          name : name
        }
      });

      this.assign(create, '#contact-form');
  		create.toggle();
  	},

    /**
     * Save the appointment to the API.
     * Validation is VERY basic for demonstration purposes only.
     */
  	save : function () {
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

   		// Save if valid. Note: Linear objects get mapped to model objects.
   		if(isValid === true) {
				this.collection.create({
	   			'contact_id' : contact_id,
	   			'note' : note,
	   			'start_time' : start.format('YYYY-MM-DDTHH:mm:ss.SSSZZ'),
	   			'duration' : duration
	   		}, {
          success : this.onAppointmentCreated
        });
	   	} else {
	   		this.$el.find('#error-event').show();
	   	}
  	},

    /**
     * Fires out an event once an appointment has been created.
     */
    onAppointmentCreated : function () {
      this.vent.trigger('appointmentCreated');
    },

    /**
     * Handler for contact creation.
     * FIXME: Duplicates logic performed in SearchView.
     */
    onContactCreated : function (data) {
      this.$el.find('#contact').val(data.get('name'));
      this.$el.find('#contact_id').val(data.get('id'));
    },

    render : function () {
    	this.assign(this.search, '#search');
    }
  });

  return CreateEventView;
});