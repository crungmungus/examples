/**
 * Contacts Collection
 * Used for contact data pulled from the API to be listed.
 */
define(['models/contactModel'], function (ContactModel) {
  var ContactCollection = Backbone.Collection.extend({
    model: ContactModel,
  	url: 'http://hidden-oasis-1864.herokuapp.com/contacts'
  });

  return CtCollection;
});