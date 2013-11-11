define(['app', 'presenters/clinics'], function (app, Presenter) {
  var Router = Backbone.SubRoute.extend({
    routes : {
      '' : 'root'
    },

    root : function () {
      var presenter = new Presenter({

      });

      console.log(presenter);
    }
  });

  return Router;
});
