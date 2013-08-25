define(['views/appDialog'], function(AppDialog) {
  var AppView = Backbone.View.extend({
    el: '#calendar',

    initialize : function () {
      _.bindAll(this, 'create', 'addAll');

      this.collection.bind('reset', this.addAll);
      this.collection.fetch({
        reset: true
      });

      this.dialog = new AppDialog();
    },

    create : function (startDate, endDate) {
      this.dialog.render(startDate, endDate);
    },

    addAll : function () {
      var data = [];

      this.collection.each(function (evt) {
        data.push(evt.getPushObject());
      });
      
      this.$el.fullCalendar('addEventSource', data);
    },

    render : function () {
      this.$el.fullCalendar({
        defaultView: 'agendaWeek',
        selectable: true,
        select: this.create
      });

      return this;
    }
  });

  return AppView;
});