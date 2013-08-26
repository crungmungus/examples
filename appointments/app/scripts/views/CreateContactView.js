/**
 * Creational view for contacts.
 */
define([
	'collections/ContactCollection',
	'models/ContactModel'
], 
function(ContactCollection, ContactModel) {
  var CreateContactView = Backbone.View.extend({
    events : {
    	'click #create' : 'save'
    },

    initialize : function () {
    	_.bindAll(this, 'save', 'onContactCreated');

      this.vent = this.options.vent;
      this.data = this.options.data;
    	this.collection = new ContactCollection();
    },

    toggle : function () {
    	this.$el.toggle();
    },

    onContactCreated : function (data) {
      this.vent.trigger('contactCreated', data );
      this.$el.remove();
    },

    save : function () {
			var email, name, phone, contact,
   				isValid = false;

   		email = this.$el.find('#email').val();
   		name  = this.data.name;
   		phone = this.$el.find('#phone').val();

			if((_.isString(phone) && phone.length >= 3) && (_.isString(email) && email.length >= 3)) {
   			if(_.isString(name) && name.length >= 3) {
   				isValid = true;
   			}
   		}

   		if(isValid === true) {
        // FIXME: Fire and forget. This could be improved with the 'wait : true' option. 
        // Means the collection won't be updated until it gets a 201.
   			this.collection.create(	{
	    		'name'  : name,
	    		'email' : email,
	    		'phone' : phone
  			}, {
          success : this.onContactCreated
        });

  			this.$el.find('#error-contact').hide();
   		} else {
   			this.$el.find('#error-contact').show();
   		}
    },

    render : function () {
    	return this.$el;
    }
  });

  return CreateContactView;
});