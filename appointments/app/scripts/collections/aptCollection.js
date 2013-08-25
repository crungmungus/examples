define(['models/aptModel'], function (AptModel) {
  var AptCollection = Backbone.Collection.extend({
    model: AptModel,
  	url: 'http://hidden-oasis-1864.herokuapp.com/appointments'
  });

  return AptCollection;
});