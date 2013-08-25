define(['models/EventModel'], function (EventModel) {
  var AptCollection = Backbone.Collection.extend({
    model: EventModel,
  	url: 'http://hidden-oasis-1864.herokuapp.com/appointments'
  });

  return AptCollection;
});