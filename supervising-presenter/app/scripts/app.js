var EventModel = Backbone.Model.extend({});

var EventCollection = Backbone.Collection.extend({
  model : EventModel
});

// Supervising Presenter.
// Mediates complex interactions between the view and service.
var EventCreatePresenter = Marionette.Controller.extend({
  initialize : function () {
    this.view    = this.options.view; 
    this.service = this.options.service;
  },

  createEvent : function (model) {
    this.service.create(model);
  },

  eventCreateSuccess : function () {

  },

  eventCreateFailure : function () {

  }
});

// Dumbed down view logic.
// Rule of thumb: Anything you don't want to test goes in here.
var EventCreateView = Backbone.View.extend({
  render : function () {
    return this;
  }
});

// Use case service.
var EventCreateService = function () {
  this.save = function (model) {
    model.save(model, {
      success : listener.eventCreateSuccess,
      error   : listener.eventCreateFailure
    });
  }
};

// In the real world the main router would decide which sub-router to invoke.
var Router = Backbone.Router.extend({
  routes : {
    'events/' : 'invokeEventsModule'
  },
 
  invokeEventsModule : function (subroute) {
    new EventRouter('events/');
  }
});

// Router. Don't think of this as a controller but rather a configuration/wire-up mechanism.
// We should have more than one router. Wire up your supervisors here.
var EventRouter = Backbone.SubRoute.extend({
  initialize: function () {
    this.supervisor = new EventCreatePresenter({ 
      view : new EventCreateView(),
      service : new EventCreateService()
    });
  }
});

var router = new Router();
Backbone.history.start();