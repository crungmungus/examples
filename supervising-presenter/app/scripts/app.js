var EventModel = Backbone.Model.extend({});

var EventCollection = Backbone.Collection.extend({
  model : EventModel
});

// Supervising Presenter.
// Mediates complex interactions between the view and service.
var EventDialogPresenter = Marionette.Controller.extend({
  initialize : function () {

  }
});

// Dumbed down view logic.
var EventCreateView = Backbone.View.extend({
  render : function () {
    return this;
  }
});

// Use case service.
var EventCreateService = function (collection) {

};

// Router. Don't think of this as a controller but rather a configuration/wire-up mechanism.
//         We should have more than one router.
var EventRouter = Backbone.SubRoute.extend({
  initialize: function () {
    this.supervisor = new EventDialogPresenter({  
      service : new EventCreateService()
    });
  }
});

// In the real world the main router would decide which sub-router to invoke.
var Router = Backbone.Router.extend({
  routes : {
    'events/*subroute' : 'invokeEventsModule'
  },
 
  invokeEventsModule : function (subroute) {
    new EventRouter('events/');
  }
});

new Router();