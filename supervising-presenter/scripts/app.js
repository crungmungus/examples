var EventModel = Backbone.Model.extend({});

var EventCollection = Backbone.Collection.extend({
  model : EventModel
});

// Supervising Presenter.
// Mediates complex interactions between the view and service.
var EventDialogPresenter = Marionette.Controller.extend({
  initialize : function () {
    this.service = options.service;
    this.view = options.view;
  }
});

// Dumbed down view logic.
var EventDialogView = Backbone.View.extend({
  render : function () {
    return this;
  }
});

// Use case service.
// Acts as a fascade between the 'repository' and the supervising presenter.
var EventCreateService = function (collection) {

};

// Initialization.
var eventDialog = new EventDialogView();
    eventDialog.render();

// Pass dependencies into the presenter.
new EventDialogPresenter({
  view : eventDialog,
  service : new EventCreateService()
});