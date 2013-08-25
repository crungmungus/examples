	define(function() {
  var AptModel = Backbone.Model.extend({
  	defaults : {
      'contact_id': null,
      'created_at': moment().toISOString(),
      'duration': 0,
      'note': null,
      'start_time': null,
      'updated_at': moment().toISOString()
    },

  	// Lazy helper to keep my view logic clean.
  	getPushObject : function () {
  		var start = moment(this.get('start_time'));

  		// See: http://arshaw.com/fullcalendar/docs/event_data/Event_Object/
  		return {
  			start  : start.toISOString(),
  			end    : start.add('s', this.get('duration')).toISOString(),
  			title  : this.get('note'),
  			allDay : false
  		}
  	}
  });

  return AptModel;
});