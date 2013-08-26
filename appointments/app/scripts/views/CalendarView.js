/**
 * Calendar View Component.
 * Makes use of the 'Full Calendar' plugin for jQuery so normal events and renders are handled
 * internally by that.
 */
define([
  'collections/EventCollection', 
  'collections/ContactCollection',
  'views/EventDialog'
], 
function(EventCollection, ContactCollection, EventDialog) {
  var CalendarView = Backbone.View.extend({
    initialize : function () {
      _.bindAll(this, 'onTimeSlotSelect', 'addOne','addAll');

      this.collection = new EventCollection();
      this.collection.bind('reset', this.addAll);
      this.collection.bind('add', this.addOne);
      
      this.collection.fetch({
        reset : true
      });

      this.vent = this.options.vent;

      this.dialog = new EventDialog({
        collection : this.collection,
        vent : this.vent
      });
    },

    addAll : function () {
      var evts = [];

      this.collection.each(function (evt) {
        evts.push(evt.getPushObject());
      });

      this.$el.fullCalendar('addEventSource', evts);
    },

    addOne : function (evt) {
      this.$el.fullCalendar('renderEvent', evt.getPushObject());
    },

    onTimeSlotSelect : function (start, end) {
      this.dialog.render({model : {
        start : moment(start), //.format("YYYY-MM-DDTHH:mm:ss.SSSZZ"),
        end   : moment(end),
      }});
    },

    render : function () {
      this.$el.fullCalendar({
        defaultView: 'agendaWeek',
        allDaySlot:false,
        selectable: true,
        select: this.onTimeSlotSelect
      });

      return this;
    }
  });

  return CalendarView;
});