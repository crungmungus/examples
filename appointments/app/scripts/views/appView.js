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
      this.vent = this.options.vent;
      this.agenda = new CalendarView({ vent : this.vent});
    },

    render : function () {
      this.assign(this.agenda, '#calendar', this.vent);

      return this;
    }
  });

  return AppView;
});