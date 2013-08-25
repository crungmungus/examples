	define(function() {
  var AptModel = Backbone.Model.extend({
  	
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