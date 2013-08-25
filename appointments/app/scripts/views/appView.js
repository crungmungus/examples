define(['library/BaseView', 'views/CalendarView'], function(BaseView, CalendarView) {
  /**
   * Main Application View.
   * Makes use of 'assign' helper to delegate subviews to regions (via selector).
   * Look at beefing this up with Marionette's 'Layout Manager' and 'Regions' as there 
   * are some great performance benefits to be reaped from there.
   */
  var AppView = BaseView.extend({
    el: 'body',

    initialize : function () {
      this.agenda = new CalendarView();
    },

    /*
    create : function (startDate, endDate) {
      console.log(this.dialog.render(startDate, endDate).el);
    },

    addAll : function () {
      var data = [];

      this.collection.each(function (evt) {
        data.push(evt.getPushObject());
      });
      
      this.$el.fullCalendar('addEventSource', data);
    },
*/
    render : function () {
      this.assign(this.agenda, '#calendar');

      return this;
    }
  });

  return AppView;
});